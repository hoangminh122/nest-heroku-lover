import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsDateString, isDateString, IsNumber, IsOptional, IsString } from "class-validator";
import { NotNull } from "sequelize-typescript";

export class MemberDTO {
    
    // @ApiProperty()
    // @IsNumber()
    // id!: Number;

    @ApiProperty()
    @IsString()
    fullName: string;

    @ApiPropertyOptional()
    @IsDateString()
    dateOfBirth?: Date;

    @ApiPropertyOptional()
    @IsString()
    avatar?: string;

    @ApiProperty()
    @IsString()
    code: string;

    @ApiPropertyOptional()
    @IsString()
    gender?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    groupId?: string;


}