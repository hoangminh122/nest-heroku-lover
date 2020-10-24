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

    @Post('/:groupUser')
    async createMember(@Body() data: MemberDTO,@Param('groupUser') groupUser:string){
        const result = await this.memberService.createMember(data,groupUser);
        return {
            success :result
        }
    }
    
    
}