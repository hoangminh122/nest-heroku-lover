import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ContentService } from "./content.service";
import { ContentDTO } from "./dto/content.dto";

@Controller('content')
@ApiTags('Content')
export class ContentController {
    constructor(
        private contentService: ContentService,
    ) { }

    @Post()
    createUser(@Body() data: ContentDTO) {
        // console.log(data)
         return this.contentService.saveFile(data);
    }
}