import { forwardRef, Module } from "@nestjs/common";
import { GroupFile } from "src/entities/user/GroupFile";
import { UploadModule } from "../upload/upload.module";
import { UserFileController } from "./user_file.controller";
import { GroupFileService } from "./user_file.service";

@Module({
    imports:[forwardRef(() => UploadModule)],
    providers:[GroupFileService,{
        provide:'GROUP_FILE_REPOSITORY',
        useValue:GroupFile
    }
   ],
    controllers:[UserFileController],
    exports:[GroupFileService]
})
export class GroupFileModule {

}