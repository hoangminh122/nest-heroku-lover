import { Injectable, HttpStatus, HttpException, Inject } from "@nestjs/common";
import * as fs from 'fs';
import { extname } from "path";
import { FileEntity } from "../../entities/file/Files";
import { v4 as uuid } from 'uuid';
import { idFile } from "./config";
import { async } from "rxjs/internal/scheduler/async";
import { UserService } from "../user/user.service";


@Injectable()
export class UploadService {
  constructor(
    @Inject('FILE_REPOSITORY')
    private readonly fileRepository: typeof FileEntity,
    private userService: UserService
  ) {}

    async saveAvatar(file) {
        try {
            const dataFile = {
              originalName: idFile.id[0],
              fileName: file[0].fieldname,
              size: file[0].size
            }
            console.log(dataFile)
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
            console.log(files.id);
            //set idFile default
            idFile.id = [];
            return {
              id:files.id
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


  async saveFile(file) {
    try {
        let result = await idFile.id.map(async(value,index)=>{
            let dataFiles = [];
           let dataFile ={
                originalName: value,
                fileName: file[index].fieldname,
                size: file[index].size
              };
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
                // dataFiles.push(files.id);
                console.log(dataFiles)
                return files.id;

        });
        // console.log(result)
      //set idFile default
      idFile.id = [];
      return {
                status: HttpStatus.CREATED,
                error: 0,
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
}
