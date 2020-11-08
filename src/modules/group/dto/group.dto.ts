import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class GroupDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsString() 
    code: string;

    @ApiProperty()
    @IsString()
    fullName: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    ownName?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    avatar?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsDateString()
    dayStart?: Date;

}