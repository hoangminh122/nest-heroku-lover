import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { MemberDTO } from "./dto/member.dto";
import { MemberService } from "./member.service";

@Controller('member')
@ApiTags('Member')
// @ApiBearerAuth()
export class MemberController {
    constructor(
        private memberService: MemberService
    ) {
    }

    @Post('/:groupUser/:memberId')
    async addMemberToGroup(@Param('groupUser') groupUser: string, @Param('memberId') memberId: string) {
        const result = await this.memberService.addMemberToGroup(groupUser, memberId);
        return {
            success: result
        }
    }

    @Post()
    async createMember(@Body() data: MemberDTO) {
        return await this.memberService.createMember(data);

    }

    @Get(':id')
    async getInforMember(@Param('id') id: string) {
        return await this.memberService.getInforMember(id) || [];

    }

    @Put(':id')
    async updateMember(@Body() data: MemberDTO, @Param('id') memberId: string) {
        const result = await this.memberService.updateMember(data, memberId);
        return {
            success: result
        }
    }


}           