import { Controller, Get, Param, Post, Put, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FilesInterceptor } from "@nestjs/platform-express/multer/interceptors/files.interceptor";
import { ApiBody, ApiConsumes } from "@nestjs/swagger";
import { UploadService } from "./upload.service";
import { multerOptions } from "./config";

@Controller('upload')
export class UploadController {
    constructor(
        private uploadService: UploadService,
    ) { }

    
    @Post()
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                files: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    })
    @UseInterceptors(FilesInterceptor('files', null, multerOptions))
    async uploadFile(@UploadedFiles() file) {
        // console.log(file)
        return await this.uploadService.saveFile(file);
    }

    @Post('/avatar')
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                files: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    })
    @UseInterceptors(FilesInterceptor('files', null, multerOptions))
    async uploadFileAvatar(@UploadedFiles() file, @Param('user_id') userId: String) {
        // console.log(file)
        return await this.uploadService.saveAvatar(file);
    }

    @Put(':id')
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                files: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    })
    @UseInterceptors(FilesInterceptor('files', null, multerOptions))
    async updateFile(@UploadedFiles() file, @Param('id') id: String) {
        this.uploadService.updateFile(file, id);
    }

    @Get('getUrlFile/:id')
    async getUrlavatar(@Param('id') id: String) {
        return await this.uploadService.getFile(id);
    }

}