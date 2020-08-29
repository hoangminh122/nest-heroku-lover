import { forwardRef, Module } from "@nestjs/common";
import { UserFile } from "../../entities/user/UserFile";
import { FileEntity } from "../../entities/file/Files";
import { UserModule } from "../user/user.module";
import { UserService } from "../user/user.service";
import { UserFileService } from "../user_file/user_file.service";
import { UploadController } from "./upload.controller";
import { UploadService } from "./upload.service";
import { UserFileModule } from "../user_file/user_file.module";

@Module({
    imports:[forwardRef(() => UserModule),forwardRef(() => UserFileModule),UserFileModule],
    providers:[UploadService,{
        provide: 'FILE_REPOSITORY',
        useValue: FileEntity
    }
    

],
    controllers:[UploadController]
})
export class UploadModule {

}