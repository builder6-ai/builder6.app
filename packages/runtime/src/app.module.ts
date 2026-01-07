import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoaderModule } from './loader/loader.module';
import { ObjectQLModule } from './objectql/objectql.module';

@Module({
  imports: [LoaderModule, ObjectQLModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
