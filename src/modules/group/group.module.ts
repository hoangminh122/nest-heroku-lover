import { forwardRef, Module } from "@nestjs/common";
import { groupRepository } from "../database/repository.database.provider";
import { UploadModule } from "../upload/upload.module";
import { UserController } from "./group.controller";
import { GroupService } from "./group.service";


@Module({
    imports:[ forwardRef(() => UploadModule)],
    providers:[
        GroupService,
        groupRepository
    ],
    controllers:[UserController],
    exports:[GroupService]
})
export class GroupModule {

}