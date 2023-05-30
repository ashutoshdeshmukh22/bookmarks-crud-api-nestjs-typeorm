import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { BookmarkDto } from './dto';
import { GetUser } from 'src/auth/decorater';
import { User } from 'src/user/user.entity';
import { JwtGuard } from 'src/auth/guard';

@Controller('bookmarks')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}

  //   Add bookmark
  @UseGuards(JwtGuard)
  @Post('add')
  addBookmark(@Body() dto: BookmarkDto, @GetUser() user: User) {
    return this.bookmarkService.addBookmark(dto, user);
  }

  //   Delete Bookmark
  @UseGuards(JwtGuard)
  @Delete('delete/:id')
  deleteBookmarkByid(@Param('id') id: string) {
    return this.bookmarkService.deleteBookmarkByid(parseInt(id));
  }

  //   Get Bookmarks
  @UseGuards(JwtGuard)
  @Get()
  getBookmarks() {
    return this.bookmarkService.getBookmarks();
  }

  //   Get Bookmark By Id
  @UseGuards(JwtGuard)
  @Get('/:id')
  getBookmarkById(@Param('id') id: string) {
    return this.bookmarkService.getBookmarkById(parseInt(id));
  }

  //   Update Bookmark By Id
  @UseGuards(JwtGuard)
  @Patch('update/:id')
  updateBookmark(@Param('id') id: string, @Body() dto: BookmarkDto) {
    return this.bookmarkService.updateBookmark(parseInt(id), dto);
  }
}
