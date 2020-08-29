import { forwardRef, Module } from "@nestjs/common";
import { ContentEntity } from "src/entities/file/Content";
import { ContentController } from "./content.controller";
import { ContentService } from "./content.service";

@Module({
    imports:[],
    providers:[
        ContentService,{
        provide:'CONTENT_REPOSITORY',
        useValue:ContentEntity
    }
   ],
    controllers:[ContentController],
    exports:[ContentService]
})
export class ContentModule {

}