import { IsNotEmpty, IsString } from 'class-validator';

export class BookmarkDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  link: string;
}
