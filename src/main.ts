import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //protection

  const options = new DocumentBuilder()
  .setTitle('Lover-App')
  .setDescription('the cats API description')
  .setVersion('1.0')
  .addTag('LOVERS')
  .build();

  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('api',app,document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
