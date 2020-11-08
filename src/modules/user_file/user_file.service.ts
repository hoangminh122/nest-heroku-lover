import { Get, HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { GroupFile } from "../../entities/user/GroupFile";
import { UserFileDTO } from "./dto/userFile.dto";

@Injectable()
export class GroupFileService {
   
    constructor(
        @Inject('GROUP_FILE_REPOSITORY') private groupFileRepository :typeof GroupFile
    ) {

    }
    async saveFile(userFile: UserFileDTO){
      return await this.groupFileRepository.create(userFile);
    }
}