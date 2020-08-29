import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from 'class-validator';

export class ContentDTO {
    @ApiProperty()
    @IsOptional()  
    userId: string;
    
    @ApiProperty()
    @IsOptional()
    @IsString()
    title?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    content?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    day?: string;

    
}