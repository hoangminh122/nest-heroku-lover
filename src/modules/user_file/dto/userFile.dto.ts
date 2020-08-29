import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from 'class-validator';

export class UserFileDTO {
    @ApiProperty()
    @IsOptional()  
    userId: string;
    
    @ApiProperty()
    @IsOptional()
    @IsString()
    fileId: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    description?: string;

    
}