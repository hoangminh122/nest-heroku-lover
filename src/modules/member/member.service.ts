import { HttpException, HttpStatus, Inject } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
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

    async createMember(data,groupUser:string){

        return await this.unitOfWork.scope(async () => {

            const userOwn = await this.groupModel.findOne({where:{
                id:groupUser
            }});
            console.log(userOwn)
            if(!userOwn) {
                console.log("asagshagshasghg")
                throw new HttpException(
                    {
                        status:HttpStatus.NOT_FOUND,
                        error:'Not Found'
                    },
                    HttpStatus.NOT_FOUND
                )
            }

            data.groupId = groupUser;
            await this.memberModel.create(data);
            return true;
        })
    }
}