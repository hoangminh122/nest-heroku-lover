import { Module } from "@nestjs/common";
import { FileEntity } from "../../entities/file/Files";
import { FileController } from "./file.controller";
import { FileService } from "./file.service";


@Module({
    imports:[],
    providers:[FileService,{
        provide:'FILE_REPOSITORY',
        useValue:FileEntity
   }],
    controllers:[FileController]
})
export class FileModule {

}