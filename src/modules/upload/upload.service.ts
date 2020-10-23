import { Injectable, HttpStatus, HttpException, Inject } from "@nestjs/common";
import * as fs from 'fs';
import { extname } from "path";
import { FileEntity } from "../../entities/file/Files";
import { v4 as uuid } from 'uuid';
import { idFile } from "./config";
import { async } from "rxjs/internal/scheduler/async";
import { GroupService } from "../group/group.service";
import { GroupFileService } from "../user_file/user_file.service";


@Injectable()
export class UploadService {
  constructor(
    @Inject('FILE_REPOSITORY')
    private readonly fileRepository: typeof FileEntity,
    private groupService: GroupService,
    private userFileService: GroupFileService
  ) {}

    async saveAvatar(file) {
        try {
            const dataFile = {
              originalName: idFile.id[0],
              fileName: file[0].fieldname,
              size: file[0].size
            }
            // console.log(dataFile)
            const files = await this.fileRepository.create(dataFile);
            if (!files) {
              throw new HttpException(
                {
                  status: HttpStatus.BAD_REQUEST,
                  error: 'Bad Request !',
                },
                HttpStatus.BAD_REQUEST
              );
            }
            // console.log(files.id);
            //set idFile default
            idFile.id = [];
            return {
                avatarPath:await files.originalName
            };

          } catch (e) {
            idFile.id = [];
            throw new HttpException(
              {
                status: HttpStatus.BAD_REQUEST,
                error: 'Can not read file',
              },
              HttpStatus.BAD_REQUEST
            );
          }
  }


  async saveFile(file,userId,day) {
    try {
        let result = await idFile.id.map(async(value,index)=>{
            let dataFiles = [];
           let dataFile ={
                originalName: value,
                fileName: file[index].fieldname,
                size: file[index].size,
                day:day
              };
              const files = await this.fileRepository.create(dataFile)
              .then((value)=>{
                // console.log(dataFiles)
                let userFileData = {
                  userId:userId,
                  fileId:value.id,
                  description:'',
                }
                this.userFileService.saveFile(userFileData);
              })
              .catch((e)=>{
                console.log(e)
                throw new HttpException(
                      {
                          status: HttpStatus.BAD_REQUEST,
                          error: 'Bad Request !',
                      },
                      HttpStatus.BAD_REQUEST
                      );
              });
                // if (!files) {
                //     throw new HttpException(
                //     {
                //         status: HttpStatus.BAD_REQUEST,
                //         error: 'Bad Request !',
                //     },
                //     HttpStatus.BAD_REQUEST
                //     );
                // }
                // dataFiles.push(files.id);
               
                return 1;

        });
        // console.log(result)
      //set idFile default
      idFile.id = [];
      return await this.groupService.findById(userId);

    } catch (e) {
      idFile.id = [];
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Can not read file',
        },
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async findById(id: number) {
    const file = await this.fileRepository.findOne({
      where: {
        id,
      },
    });
    return file;
  }

  async updateFile(file, id) {
    try {
      const file = this.findById(id);
      if (!file) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Can not found file',
          },
          HttpStatus.NOT_FOUND
        );
      }
      const dataFile = {
        originalName: idFile.id,
        fileName: file[0].fieldname,
        size: file[0].size
      }
      return this.fileRepository.update(dataFile, { where: { id } });
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Can not read file',
        },
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async getFile(id) {
    try {
      const file = await this.findById(id);
      if (!file) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Can not found file',
          },
          HttpStatus.NOT_FOUND
        );
      }
      return file;


    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Can not read URL',
        },
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async removeFile(id){
    const fs = require('fs')
    let todo = await this.fileRepository.findOne({
        where:{
            id:id
        }
    });
    if(!todo) {
        throw new HttpException(
            {
              status: HttpStatus.NOT_FOUND,
              error: 'Can found file',
            },
            HttpStatus.NOT_FOUND
          );
    }

    const filePath = 'uploads/'+ todo.originalName;
    try {
        fs.unlinkSync(filePath)
        return {
            status:1,
            error:0
        }
        //file removed
      } catch(err) {
        console.error(err)
      }
  }
}