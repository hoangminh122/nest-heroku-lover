import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { GroupDTO } from "./dto/group.dto";
import { GroupService } from "./group.service";

@Controller('group')
export class UserController {
    constructor(
        private groupService: GroupService 
    ){}

    @Get()
    getAllUser() {
        // console.log("ok")
        return this.groupService.showAll();
    }

    @Get('/test')
    getAllUsers() {
        // console.log("ok")
        return {minh:"agshg"};
    }


    @Get('GetById/:id')
    showUserById(@Param('id') id: string) {
        return this.groupService.findById(id);
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