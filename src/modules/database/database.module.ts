import { Module } from '@nestjs/common';
import { databaseProvider } from './database.providers';
import { UnitOfWork } from './UnitOfWork';

@Module({
  providers: [databaseProvider,UnitOfWork],
  exports: [databaseProvider,UnitOfWork],
})
export class DatabaseModule {}
