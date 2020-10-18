import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DemoModule } from './demo/demo.module';
import { DatabaseModule } from './modules/database/database.module';
import { FileModule } from './modules/file/file.module';
import { UploadModule } from './modules/upload/upload.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MulterModule } from '@nestjs/platform-express/multer/multer.module';
import { ContentModule } from './modules/content/content.module';
import { DayLoveModule } from './modules/day_love/day_love.module';
import { GroupModule } from './modules/group/group.module';
import { GroupFileModule } from './modules/user_file/user_file.module';

@Module({
 
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../uploads'),
    }),

    DemoModule,
    DatabaseModule,
    FileModule,
    GroupModule,
    FileModule,
    UploadModule,
    GroupFileModule,
    ContentModule,
    DayLoveModule
  ],
})
export class AppModule {}
