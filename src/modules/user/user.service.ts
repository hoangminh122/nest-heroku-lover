import { Get, HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { FileEntity } from "src/entities/file/Files";
import { UserFile } from "src/entities/user/UserFile";
import { UserEntity } from "../../entities/user/User";
import { UserDTO } from "./dto/user.dto";

@Injectable()
export class UserService {
   
    constructor(
        @Inject('USER_REPOSITORY') private userRepository: typeof UserEntity
    ) { }

    async showAll(): Promise<UserEntity[]> {
        return await this.userRepository.findAll({ include: [{model:FileEntity, as:'files'}]});
        // return await this.userRepository.findAll();
    }

    async create(data: UserDTO) {
        const userStudent = await this.userRepository.create(data);
        return userStudent;
    }

    async findById(id: string): Promise<UserEntity> {
        let user = await this.userRepository.findOne({
            where: {
                id
            },
           
            include: [
                {
                  attributes:['id','originalName','day','url'],
                  model: FileEntity,
                  as: 'files',
                  order: [
                    ['day', 'ASC'],
                ]
                //   required: isEmpty(whereClauseContact) ? false : true,
                },
              ],
        });
        return user;
    }

    async update(id: string, data: UserDTO) {
        try {
            let todo = await this.userRepository.findOne({
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


            await this.userRepository.update(data, { where: { id } });
            return await this.userRepository.findOne({
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
        await this.userRepository.destroy({
            where: {
                id
            }
        })
        return { deleted: true };
    }

    async saveAvatar() {

    }

}