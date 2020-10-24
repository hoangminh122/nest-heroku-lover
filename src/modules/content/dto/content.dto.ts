import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class ContentDTO {
    @ApiProperty()
    // @IsOptional()  
    groupId: string;
    
    @ApiProperty()
    // @IsOptional()
    @IsString()
    title: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    content?: string;

    @ApiProperty()
    // @IsOptional()
    @IsNumber()
    day: string;

    
}