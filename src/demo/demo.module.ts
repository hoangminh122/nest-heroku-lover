
import { Module } from '@nestjs/common';
import { DemoController } from './demo.controller';
import { DemoServer } from './demo.service';

@Module({
  imports: [],
  controllers: [DemoController],
  providers: [DemoServer],
})
export class DemoModule {}
