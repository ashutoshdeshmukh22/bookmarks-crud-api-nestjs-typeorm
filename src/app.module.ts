import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { User } from './user/user.entity';
import { Bookmark } from './bookmark/bookmark.entity';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    AuthModule,
    UserModule,
    BookmarkModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'postgres',
      password: 'ashutosh',
      database: 'bookmarks',
      port: 5432,
      host: 'localhost',
      entities: [User, Bookmark],
      synchronize: true,
    }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   url: process.env.DATABASE_URL,
    //   entities: [User, Bookmark],
    //   synchronize: true,
    // }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
