import { Get, HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { UserFile } from "../../entities/user/UserFile";
import { UserFileDTO } from "./dto/userFile.dto";

@Injectable()
export class UserFileService {
   
    constructor(
        @Inject('USER_FILE_REPOSITORY') private userFileRepository :typeof UserFile
    ) {

    }
    async saveFile(userFile: UserFileDTO){
      return await this.userFileRepository.create(userFile);
    }
}