import { Module, Global } from '@nestjs/common';
import { LoaderService } from './loader.service';

@Global()
@Module({
  providers: [LoaderService],
  exports: [LoaderService],
})
export class LoaderModule {}
