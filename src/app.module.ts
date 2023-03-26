import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModule } from './pokemon/pokemon.module';
// import { config } from 'dotenv';
import { UsersModule } from './users/users.module';
import { PublicationsModule } from './publications/publications.module';
import { MusicsModule } from './musics/musics.module';
import { VideosModule } from './videos/videos.module';
import { BooksModule } from './books/books.module';
import { MessagesModule } from './messages/messages.module';
import { FollowsModule } from './follows/follows.module';
import { LikesModule } from './likes/likes.module';
import { NotificationsModule } from './notifications/notifications.module';
import { CardsModule } from './cards/cards.module';

// config();
@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    ),
    PokemonModule,
    UsersModule,
    PublicationsModule,
    MusicsModule,
    VideosModule,
    BooksModule,
    MessagesModule,
    FollowsModule,
    LikesModule,
    NotificationsModule,
    CardsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
