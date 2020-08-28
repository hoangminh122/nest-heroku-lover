import { forwardRef, Module } from "@nestjs/common";
import { UserFile } from "src/entities/user/UserFile";
import { FileEntity } from "../../entities/file/Files";
import { UserModule } from "../user/user.module";
import { UserService } from "../user/user.service";
import { UploadController } from "./upload.controller";
import { UploadService } from "./upload.service";

@Module({
    imports:[forwardRef(() => UserModule)],
    providers:[UploadService,{
        provide: 'FILE_REPOSITORY',
        useValue: FileEntity
    },
    {
        provide:'USER_FILE_REPOSITORY',
        useValue:UserFile
    }

],
    controllers:[UploadController]
})
export class UploadModule {

}