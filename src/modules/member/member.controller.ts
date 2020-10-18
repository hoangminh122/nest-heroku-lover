import { Body, Controller, Param, Post } from "@nestjs/common";
import { MemberDTO } from "./dto/member.dto";
import { MemberService } from "./member.service";

@Controller('member')
export class MemberController {
    constructor(
        private memberService : MemberService
    ){
    }

    @Post('/:idUser')
    createMember(@Body() data: MemberDTO,@Param('idUser') idUser:string){
        this.memberService.createMember(data,idUser);
    }
    
}