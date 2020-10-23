import { Module } from "@nestjs/common";
import { groupRepository } from "../database/repository.database.provider";
import { GroupModule } from "../group/group.module";
import { DayLoveController } from "./day_love.controller";
import { DayLoveService } from "./day_love.server";


@Module({
    imports:[GroupModule],
    providers:[DayLoveService,
        groupRepository
    ],
    controllers:[DayLoveController],
    exports:[]
})
export class DayLoveModule {

}