import { Module } from "@nestjs/common";
import { groupRepository, memberRepository } from "../database/repository.database.provider";
import { UnitOfWork } from "../database/UnitOfWork";
import { MemberController } from "./member.controller";
import { MemberService } from "./member.service";


@Module({
    imports:[],
    providers:[
        memberRepository,
        groupRepository,
        MemberService
    ],
    controllers:[
        MemberController
    ],
    exports:[]
})
export class ContentModule {

}