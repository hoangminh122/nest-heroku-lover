import { Body, Controller, Get, Inject, Param, Post, Put, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FilesInterceptor } from "@nestjs/platform-express/multer/interceptors/files.interceptor";
import { ApiBody, ApiConsumes, ApiTags } from "@nestjs/swagger";
import { UploadService } from "./upload.service";
import { multerOptions } from "./config";


@Controller('upload')
@ApiTags('Upload')
export class UploadController {
    constructor(
        private uploadService: UploadService,
    ) { }

    
    @Post('some/:groupId/:day')
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
    async uploadFile(@Param('groupId') groupId:any,@Param('day') day:number,@UploadedFiles() file) {
        console.log(file)
        // console.log(userId)
        return await this.uploadService.saveFile(file,groupId,day);
    }

    @Post('/user/avatar')
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
    async uploadFileAvatar(@UploadedFiles() file) {
        console.log(file)
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
    @Get('delFile/:id')
    async removeFile(@Param('id') id: string) {
       return await this.uploadService.removeFile(id);
        
    }

    // @Post()
    // saveContent(@Body() content){

    // }

}