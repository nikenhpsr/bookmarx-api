import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  CreateTagDto,
  EditTagDto,
} from './dto';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  getTags(tagId: number) {
    return this.prisma.tag.findMany({
      where: {
        id : tagId,
      },
    });
  }

  getTagById(
    tagId: number ) {
    return this.prisma.tag.findFirst({
      where: {
        id : tagId,
      },
    });
  }

  async createTag(
    bookmarkId: number,
    dto: CreateTagDto,
  ) {
    const tags =
      await this.prisma.tag.create({
        data: {
          ...dto,
        },
      });

    return tags;
  }

 async editTagById(
    tagId: number,
    dto: EditTagDto,
  ) {
    // get the tag by id
      await this.prisma.tag.findUnique({
        where: {
          id: tagId,
        },
      })

    return this.prisma.tag.update({
      where: {
        id: tagId,
      },
      data: {
        ...dto,
      },
    });
    }

    async deleteTagById(
      userId: number,
      tagId: number,
    ) {
      const tag =
        await this.prisma.tag.findUnique({
          where: {
            id: tagId,
          },
        });
        await this.prisma.tag.delete({
          where: {
            id: tagId,
          },
        });
  }}