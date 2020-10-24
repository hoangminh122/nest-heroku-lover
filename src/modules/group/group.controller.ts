import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { GroupDTO } from "./dto/group.dto";
import { GroupService } from "./group.service";

@Controller('group')
@ApiTags('Group')
export class GroupController {
    constructor(
        private groupService: GroupService 
    ){}

    @Get()
    getAllUser() {
        // console.log("ok")
        return this.groupService.showAll();
    }


    @Get(':id')
    showUserById(@Param('id') id: string) {
        return this.groupService.findById(id);
    }

    @Get('get-by-code/:code')
    async showUserByCode(@Param('code') code: string) {
        return await this.groupService.findByCode(code);
    }

    @Post()
    createUser(@Body() data: GroupDTO) { 
         return this.groupService.create(data);
    }

    @Delete(':id')
    async destroyUser(@Param('id') id: string) {
        return this.groupService.destroy(id);
    }

    @Put(':id')
    updateUser(@Param('id') id: string, @Body() data: GroupDTO) {
        return this.groupService.update(id, data);
    }

}