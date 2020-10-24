import { forwardRef, Module } from "@nestjs/common";
import { FileEntity } from "../../entities/file/Files";
import { UploadController } from "./upload.controller";
import { UploadService } from "./upload.service";
import { GroupModule } from "../group/group.module";
import { GroupFileModule } from "../user_file/user_file.module";
import { DatabaseModule } from "../database/database.module";

@Module({
    imports:[
        DatabaseModule,
        forwardRef(() => GroupModule),
        forwardRef(() => GroupFileModule),
        GroupFileModule
    ],
    providers:[UploadService,{
        provide: 'FILE_REPOSITORY',
        useValue: FileEntity
    }
    

],
    controllers:[UploadController]
})
export class UploadModule {

}