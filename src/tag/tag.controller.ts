import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    UseGuards,
  } from '@nestjs/common';
  import { GetBookmark } from '../auth/decorator';
  import { JwtGuard } from '../auth/guard';
  import { TagService } from './tag.service';
  import {
    CreateTagDto,
    // EditTagDto,
  } from './dto';
  import { ApiCreatedResponse, ApiOkResponse, ApiResponse, ApiTags, ApiProperty } from '@nestjs/swagger';

  @UseGuards(JwtGuard)
  @Controller('tags')
  @ApiTags('tags')
  export class TagController {
  constructor(
    private tagService: TagService,
  ) { }

  @Get()
  @ApiProperty()
  @ApiOkResponse({ status: 200, description: 'All tags successfully showed' })
  getTags(@GetBookmark('id') bookmarkId: number) {
    return this.tagService.getTags(
      bookmarkId,
    );
  }

  @Get(':id')
  @ApiProperty()
  @ApiOkResponse({status:200, description: 'Unique tags successfully showed'})
  getBTagById(
    @GetBookmark('id') bookmarkId: number,
    @Param('id', ParseIntPipe) tagId: number,
  ) {
    return this.tagService.getTagById(
      bookmarkId,
      // tagId,
    );
  }

  @Post()
  @ApiProperty()
  @ApiCreatedResponse({status: 201, description: 'Tag successfully created'})
  createTag(
    @GetBookmark('id') bookmarkId : number,
    @Body() dto: CreateTagDto,
  ) {
    return this.tagService.createTag(
      bookmarkId,
      dto,
  );
  }
}