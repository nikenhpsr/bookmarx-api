import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    UseGuards,
  } from '@nestjs/common';
  import { GetBookmark, GetUser } from '../auth/decorator';
  import { JwtGuard } from '../auth/guard';
  import { TagService } from './tag.service';
  import {
    CreateTagDto, EditTagDto,
    // EditTagDto,
  } from './dto';
  import { ApiCreatedResponse, ApiOkResponse, ApiResponse, ApiTags, ApiProperty, ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';

  @UseGuards(JwtGuard)
  @Controller('tags')
  @ApiTags('tags')
  export class TagController {
  constructor(
    private tagService: TagService,
  ) { }

  @Get()
  @ApiProperty()
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @ApiOkResponse({ status: 200, description: 'All tags successfully showed' })
  getTags(@GetBookmark('id') bookmarkId: number) {
    return this.tagService.getTags(
      bookmarkId,
    );
  }

  @Get(':id')
  @ApiProperty()
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
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
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
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

  @Patch(':id')
  @ApiProperty()
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @ApiOkResponse({status: 201, description:'Tag updated'})
  editTagById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) tagId: number,
    @Body() dto: EditTagDto,
  ) {
    return this.tagService.editTagById(
      tagId,
      dto,
    )
  }

  @Delete(':id')
  @ApiProperty()
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @ApiOkResponse({status: 204, description: 'tag deleted'})
  deleteTagById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) tagId: number,
  ) {
    return this.tagService.deleteTagById(
      userId,
      tagId,
    );
  }
}
