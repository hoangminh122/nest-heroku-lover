import { Get, HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Content } from "src/entities/file/Content";
import { FileEntity } from "src/entities/file/Files";
import { Member } from "src/entities/user/Member";
import { Group } from "../../entities/user/Group";
import { GroupDTO } from "./dto/group.dto";

@Injectable()
export class GroupService {
   
    constructor(
        @Inject('GroupsRepository') private groupRepository: typeof Group
    ) { }
    

    async showAll(): Promise<Group[]> {
        return await this.groupRepository.findAll({ 
            include: [
            {
                model:FileEntity,
                 as:'files'
            },
            {
                model:Member,
                 as:'members'
            },
            {
                model:Content,
                 as:'contents'
            }
        ]
    });
        // return await this.userRepository.findAll();
    }

    async create(data: GroupDTO) {
        const userStudent = await this.groupRepository.create(data);
        return await this.findById(userStudent.id);
    }

    async findByDefaultId(id: string): Promise<Group> {
        let user = await this.groupRepository.findOne({
            where: {
                id
            }
        });
        return user;
    }

    
    async findById(id: string): Promise<Group> {
        let user = await this.groupRepository.findOne({
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
                {
                    attributes:['id','title','day','content'],
                    model:Content,
                    as:'contents',
                    order:[
                        ['day','ASC']
                    ]
                },
                {
                    model:Member,
                     as:'members'
                },
              ],
              
        });
        return user;
    }

    async findByCode(code: string): Promise<Group> {
        let user = await this.groupRepository.findOne({
            where: {
                code
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
                {
                    attributes:['id','title','day','content'],
                    model:Content,
                    as:'contents',
                    order:[
                        ['day','ASC']
                    ]
                }
              ],
        });
        if(!user) throw new HttpException(
            {
                status:HttpStatus.NOT_FOUND,
                error:'Not Found'
            }
            ,
            HttpStatus.NOT_FOUND
        )
        return user;
    }

    async update(id: string, data: GroupDTO) {
        try {
            let todo = await this.groupRepository.findOne({
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


            await this.groupRepository.update(data, { where: { id } });
            return await this.groupRepository.findOne({
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
        await this.groupRepository.destroy({
            where: {
                id
            }
        })
        return { deleted: true };
    }

    async saveAvatar() {

    }

}