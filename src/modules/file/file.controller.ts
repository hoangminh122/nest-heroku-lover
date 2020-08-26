import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { FileDTO } from "./dto/file.dto";
import { FileService } from "./file.service";

@Controller('files')
export class FileController {
    constructor(
        private fileService: FileService 
    ){}

    @Get()
    getAllUser() {
        return this.fileService.showAll();
    }

    @Get('GetById/:id')
    showUserById(@Param('id') id: string) {
        return this.fileService.findById(id);
    }

    @Post()
    createUser(@Body() data: FileDTO) {
         return this.fileService.create(data);
    }

    @Delete(':id')
    async destroyUser(@Param('id') id: string) {
        return this.fileService.destroy(id);
    }

    @Put(':id')
    updateUser(@Param('id') id: string, @Body() data: FileDTO) {
        return this.fileService.update(id, data);
    }
}