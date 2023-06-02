import { Module } from '@nestjs/common';
import { BookmarkController } from './bookmark.controller';
import { BookmarkService } from './bookmark.service';
import { JwtGuard } from 'src/auth/guard';

@Module({
  controllers: [BookmarkController],
  providers: [BookmarkService, JwtGuard]
})
export class BookmarkModule {}
