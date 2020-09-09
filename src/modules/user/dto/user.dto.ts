import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from 'class-validator';

export class UserDTO {
    @ApiProperty()
    @IsOptional()  
    code: string;
    
    @ApiProperty()
    @IsOptional()
    @IsString()
    fullName: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    ownName?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    gender?: string;

    // @ApiProperty()
    @IsOptional()
    @IsString()
    avatar?: string;

    @IsOptional()
    @IsString()
    dayStart?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    dateOfBirth: string;
}