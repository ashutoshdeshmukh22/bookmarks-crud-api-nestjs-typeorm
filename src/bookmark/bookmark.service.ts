import { Injectable } from '@nestjs/common';
import { BookmarkDto } from './dto';
import { Bookmark } from './bookmark.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';

@Injectable()
export class BookmarkService {
  constructor(@InjectRepository(Bookmark) private repo: Repository<Bookmark>) {}

  async addBookmark(dto: BookmarkDto, user: User) {
    const bookmark = await this.repo.create(dto);
    bookmark.user = user;
    await this.repo.save(bookmark);
    return {
      msg: 'Bookmark Saved',
      data: bookmark,
    };
  }

  async deleteBookmarkByid(id: number) {
    const bookmark = await this.repo.findOne({ where: { id: id } });
    if (!bookmark) {
      return {
        msg: 'Bookmark Not Found',
      };
    }
    await this.repo.delete(id);
    return {
      msg: 'Bookmark Deleted',
    };
  }

  async getBookmarks() {
    const bookmarks = await this.repo.find();
    return {
      msg: 'Bookmarks Fetched',
      data: bookmarks,
    };
  }

  async getBookmarkById(id: number) {
    const bookmark = await this.repo.findOne({ where: { id: id } });
    if (!bookmark) {
      return {
        msg: 'Bookmark Not Found',
      };
    }
    return {
      msg: 'Bookmarks Found',
      data: bookmark,
    };
  }
  async updateBookmark(id: number, dto: BookmarkDto) {
    const bookmark = await this.repo.findOne({ where: { id: id } });
    if (!bookmark) {
      return {
        msg: 'Bookmark Not Found',
      };
    }
    await this.repo.update(id, dto);
    return {
      msg: 'Bookmark Updated',
    };
  }
}
