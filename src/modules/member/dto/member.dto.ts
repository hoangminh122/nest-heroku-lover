import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsDateString, isDateString, IsNumber, IsString } from "class-validator";
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

    @ApiProperty()
    @IsString()
    code: string;

    @ApiPropertyOptional()
    @IsString()
    gender?: string;


}