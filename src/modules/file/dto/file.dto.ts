import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class FileDTO {
    @ApiProperty()
    @IsOptional()  
    code: string;
    
    @ApiProperty()
    @IsOptional()
    @IsString()
    originalName: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    fileName: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    day?: number;

    @ApiProperty()
    @IsOptional()
    @IsString()
    size: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    url: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    content: string;

}