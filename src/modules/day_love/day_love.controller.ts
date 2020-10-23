import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { get } from "http";
import { DayLoveService } from "./day_love.server";

@Controller('day-love')
@ApiTags('day-love')
export class DayLoveController {
    constructor(
        private dayLoveService: DayLoveService
    ){
    }

    @Get('set-date-start/:id')
    async setDayStart(@Param('id') id:string){
        console.log("asjdgashg")
        return this.dayLoveService.setDayStart(id);
    }

    @Get(':id')
    async findTimeLove(@Param('id') id:string){
        console.log("aaa")
        return this.dayLoveService.findTimeLove(id);
    }

}