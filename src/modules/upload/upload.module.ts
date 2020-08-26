import { forwardRef, Module } from "@nestjs/common";
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
    }],
    controllers:[UploadController]
})
export class UploadModule {

}