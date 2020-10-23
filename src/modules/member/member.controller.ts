import { Body, Controller, Param, Post } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { MemberDTO } from "./dto/member.dto";
import { MemberService } from "./member.service";

@Controller('member')
@ApiTags('Member')
// @ApiBearerAuth()
export class MemberController {
    constructor(
        private memberService : MemberService
    ){
    }

    @Post('/:idUser')
    async createMember(@Body() data: MemberDTO,@Param('idUser') idUser:string){
        const result = await this.memberService.createMember(data,idUser);
        return {
            success :result
        }
    }
    
    
}