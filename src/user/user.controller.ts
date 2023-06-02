import {
  Body,
  Controller,
  Get,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { ApiProperty, ApiPropertyOptional, ApiTags, ApiOkResponse, ApiCreatedResponse, ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(private userService: UserService) {}
  @UseGuards(JwtGuard)
  @ApiProperty()
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @Get('me')
  @ApiOkResponse({type: UserEntity})
  getMe(@GetUser() user: User) {
    return user;
  }
  
  @UseGuards(JwtGuard)
  @ApiPropertyOptional()
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @Patch()
  @ApiCreatedResponse({status: 200, description: 'Your profile successfully edited'})
  editUser(
    @GetUser('id') userId: number,
    @Body() dto: EditUserDto,
  ) {
    return this.userService.editUser(userId, dto);
  }
}
