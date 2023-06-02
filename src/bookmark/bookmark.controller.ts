import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { BookmarkService } from './bookmark.service';
import {
  CreateBookmarkDto,
  EditBookmarkDto,
} from './dto';
import { ApiCreatedResponse, ApiOkResponse, ApiResponse, ApiTags, ApiProperty, ApiBearerAuth, ApiUnauthorizedResponse, ApiBody } from '@nestjs/swagger';

@Controller('bookmarks')
@ApiTags('bookmarks')
export class BookmarkController {
  constructor(
    private bookmarkService: BookmarkService,
  ) { }

  @Get()
  @UseGuards(JwtGuard)
  @ApiProperty()
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @ApiOkResponse({ status: 200, description: 'All bookmarks successfully showed' })
  getBookmarks(@GetUser('id') userId: number) {
    return this.bookmarkService.getBookmarks(
      userId,
    );
  }

  @Get(':id')
  @UseGuards(JwtGuard)
  @ApiProperty()
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @ApiOkResponse({ status: 200, description: 'Unique bookmarks successfully showed' })
  getBookmarkById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) bookmarkId: number,
  ) {
    return this.bookmarkService.getBookmarkById(
      userId,
      bookmarkId,
    );
  }

  @Post()
  @UseGuards(JwtGuard)
  @ApiProperty()
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @ApiCreatedResponse({ status: 201, description: 'Bookmark successfully created' })
  //@ApiBody({type: CreateBookmarkDto})
  createBookmark(
    @GetUser('id') userId: number,
    @Body() dto: CreateBookmarkDto,
  ) {
    return this.bookmarkService.createBookmark(
      userId,
      dto
    );
  }

  @Patch(':id')
  @UseGuards(JwtGuard)
  @ApiProperty()
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @ApiResponse({ status: 201, description: "Bookmark updated" })
  editBookmarkById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) bookmarkId: number,
    @Body() dto: EditBookmarkDto,
  ) {
    return this.bookmarkService.editBookmarkById(
      userId,
      bookmarkId,
      dto,
    );
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  @UseGuards(JwtGuard)
  @ApiProperty()
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @ApiOkResponse({ status: 204, description: 'Bookmark deleted' })
  deleteBookmarkById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) bookmarkId: number,
  ) {
    return this.bookmarkService.deleteBookmarkById(
      userId,
      bookmarkId,
    );
  }
}
