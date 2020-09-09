import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DemoModule } from './demo/demo.module';
import { DatabaseModule } from './modules/database/database.module';
import { FileModule } from './modules/file/file.module';
import { UploadModule } from './modules/upload/upload.module';
import { UserModule } from './modules/user/user.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MulterModule } from '@nestjs/platform-express/multer/multer.module';
import { UserFileModule } from './modules/user_file/user_file.module';
import { ContentModule } from './modules/content/content.module';
import { DayLoveModule } from './modules/day_love/day_love.module';

@Module({
 
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../uploads'),
    }),

    DemoModule,
    DatabaseModule,
    FileModule,
    UserModule,
    FileModule,
    UploadModule,
    UserFileModule,
    ContentModule,
    DayLoveModule
  ],
})
export class AppModule {}
