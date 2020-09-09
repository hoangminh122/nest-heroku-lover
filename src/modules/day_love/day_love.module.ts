import { Module } from "@nestjs/common";
import { UserEntity } from "src/entities/user/User";
import { DayLoveController } from "./day_love.controller";
import { DayLoveService } from "./day_love.server";
import { UserService } from "../user/user.service";
import { UserModule } from "../user/user.module";


@Module({
    imports:[UserModule],
    providers:[DayLoveService,
        {
            provide:'USER_REPOSITORY',
            useValue:UserEntity
        }
    ],
    controllers:[DayLoveController],
    exports:[]
})
export class DayLoveModule {

}