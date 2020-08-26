import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { FileEntity } from "../../entities/file/Files";
import { FileDTO } from "./dto/file.dto";

@Injectable()
export class FileService {
    constructor(
        @Inject('FILE_REPOSITORY') private fileRepository: typeof FileEntity
    ) { }

    async showAll(): Promise<FileEntity[]> {
        // return await this.fileRepository.findAll({ include: [{model:FileEntity, as:'files'}]});
        return await this.fileRepository.findAll();
    }

    async create(data: FileDTO) {
        const userStudent = await this.fileRepository.create(data);
        return userStudent;
    }

    async findById(id: string): Promise<FileEntity> {
        let user = await this.fileRepository.findOne({
            where: {
                id
            }
        });
        return user;
    }

    async update(id: string, data: FileDTO) {
        try {
            let todo = await this.fileRepository.findOne({
                where: {
                    id
                }
            });
            if (!todo.id) {
                // tslint:disable-next-line:no-console
                // console.error('user doesn\'t exist');
                throw new HttpException({
                    status: HttpStatus.NOT_FOUND,
                    error: "Can not found user"
                }, HttpStatus.NOT_FOUND)
            }


            await this.fileRepository.update(data, { where: { id } });
            return await this.fileRepository.findOne({
                where: {
                    id
                }
            });
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'update database error'
            }, HttpStatus.BAD_REQUEST);
        }
    }

    async destroy(id: string) {
        await this.fileRepository.destroy({
            where: {
                id
            }
        })
        return { deleted: true };
    }

}