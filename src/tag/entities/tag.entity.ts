import { ApiProperty } from '@nestjs/swagger';
import { Tag } from '@prisma/client';
export class TagEntity implements Tag {
    constructor(partial: Partial<TagEntity>) {
        Object.assign(this, partial);
    }
    @ApiProperty()
    id: number;
    @ApiProperty()
    createdAt: Date;
    @ApiProperty()
    updatedAt: Date;
    @ApiProperty()
    name: string;
}