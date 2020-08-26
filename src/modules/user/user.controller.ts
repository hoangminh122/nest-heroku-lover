import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserDTO } from "./dto/user.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService 
    ){}

    @Get()
    getAllUser() {
        return this.userService.showAll();
    }

    @Get('GetById/:id')
    showUserById(@Param('id') id: string) {
        return this.userService.findById(id);
    }

    @Post()
    createUser(@Body() data: UserDTO) {
         return this.userService.create(data);
    }

    @Delete(':id')
    async destroyUser(@Param('id') id: string) {
        return this.userService.destroy(id);
    }

    @Put(':id')
    updateUser(@Param('id') id: string, @Body() data: UserDTO) {
        return this.userService.update(id, data);
    }

}