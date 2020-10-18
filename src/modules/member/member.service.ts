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
        @InjectModel(Member)
        private memberModel: typeof Member,
        @InjectModel(Group)
        private userModel: typeof Group
    ){ }

    async createMember(data,idUser:string){

        return await this.unitOfWork.scope(async () => {

            const userOwn = await this.userModel.findOne({where:{
                id:idUser
            }});

            if(!userOwn) {
                throw new HttpException(
                    {
                        status:HttpStatus.NOT_FOUND,
                        error:'Not Found'
                    },
                    HttpStatus.NOT_FOUND
                )
            }

            data.userId = idUser;
            return await this.memberModel.create(data)
        })
    }
}