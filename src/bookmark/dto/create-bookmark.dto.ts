import {
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateTagDto } from 'src/tag/dto';
import { Schema } from 'prisma';

export class CreateBookmarkDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;
  
  @ApiProperty()
  @IsString()
  @IsOptional()
  description?: string;
  
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  link: string;
}
