import { HttpException, HttpStatus, Inject } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { async } from "rxjs/internal/scheduler/async";
import { Group } from "src/entities/user/Group";
import { Member } from "src/entities/user/Member";
import { UnitOfWork } from "../database/UnitOfWork";
import { MemberDTO } from "./dto/member.dto";


export class MemberService {
    constructor(
        @Inject(UnitOfWork)
        private readonly unitOfWork: UnitOfWork,
        @Inject('MembersRepository')
        private memberModel: typeof Member,
        @Inject('GroupsRepository')
        private groupModel: typeof Group
    ){ }

    async addMemberToGroup(groupUser:string,memberId:string){

        return await this.unitOfWork.scope(async () => {

            const group = await this.groupModel.findOne({where:{
                id:groupUser
            }});
            if(!group) {
                console.log("asagshagshasghg")
                throw new HttpException(
                    {
                        status:HttpStatus.NOT_FOUND,
                        error:'Group Not Found'
                    },
                    HttpStatus.NOT_FOUND
                )
            }

            let member :any = await this.memberModel.findOne({where:{
                id:memberId
            }});
            if(!member) {
                throw new HttpException(
                    {
                        status:HttpStatus.NOT_FOUND,
                        error:'Member Not Found'
                    },
                    HttpStatus.NOT_FOUND
                )
            }

            member.groupId = groupUser;
            const memberCover = JSON.parse(JSON.stringify(member));
            //update member with groupId
            await this.memberModel.update(memberCover,{where:{id:memberId}});
            return true;
        })
    }

    async createMember(data){
        return await this.unitOfWork.scope(async()=>{
            await this.memberModel.create(data);
            return true;
        });
    }

    async updateMember(data,id){
        return await this.unitOfWork.scope(async()=>{
            await this.memberModel.update(data,{where:{id}});
            return true;
        });
    }
}