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
    UploadModule
  ],
})
export class AppModule {}
