import { Get, HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { ContentEntity } from "../../entities/file/Content";
import { ContentDTO } from "./dto/content.dto";

@Injectable()
export class ContentService {
   
    constructor(
        @Inject('CONTENT_REPOSITORY') private contentRepository :typeof ContentEntity
    ) {

    }

    async saveFile(content: ContentDTO){
      return await this.contentRepository.create(content);
    }

    
}