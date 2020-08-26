import { forwardRef, Module } from "@nestjs/common";
import { UserEntity } from "src/entities/user/User";
import { UploadModule } from "../upload/upload.module";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";


@Module({
    imports:[ forwardRef(() => UploadModule)],
    providers:[UserService,{
         provide:'USER_REPOSITORY',
         useValue:UserEntity
    }],
    controllers:[UserController],
    exports:[UserService]
})
export class UserModule {

}