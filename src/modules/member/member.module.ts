import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { groupRepository, memberRepository } from "../database/repository.database.provider";
import { UnitOfWork } from "../database/UnitOfWork";
import { MemberController } from "./member.controller";
import { MemberService } from "./member.service";


@Module({
    imports:[DatabaseModule],
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
export class MemberModule {

}