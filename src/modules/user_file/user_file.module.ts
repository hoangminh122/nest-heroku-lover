import { forwardRef, Module } from "@nestjs/common";
import { UserFile } from "../../entities/user/UserFile";
import { UploadModule } from "../upload/upload.module";
import { UserFileController } from "./user_file.controller";
import { UserFileService } from "./user_file.service";

@Module({
    imports:[forwardRef(() => UploadModule)],
    providers:[UserFileService,{
        provide:'USER_FILE_REPOSITORY',
        useValue:UserFile
    }
   ],
    controllers:[UserFileController],
    exports:[UserFileService]
})
export class UserFileModule {

}