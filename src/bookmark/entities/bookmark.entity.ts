import { ApiProperty } from '@nestjs/swagger';
import { Bookmark } from '@prisma/client';
export class BookmarkEntity implements Bookmark {
    constructor(partial: Partial<BookmarkEntity>) {
        Object.assign(this, partial);
    }
    @ApiProperty()
    id: number;
    @ApiProperty({required: false, nullable: true})
    userId: number | null;
    @ApiProperty()
    createdAt: Date;
    @ApiProperty()
    updatedAt: Date;
    @ApiProperty()
    title: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    link: string;
    @ApiProperty({required: false, nullable: true})
    tagId: number | null;
}