import {
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EditTagDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
}