import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import * as path from 'path';
import { MetadataRegistry, MetadataLoader, registerObjectQLPlugins } from '@objectql/metadata';

@Injectable()
export class LoaderService implements OnModuleInit {
  private readonly logger = new Logger(LoaderService.name);
  private readonly registry = new MetadataRegistry();
  private readonly loader = new MetadataLoader(this.registry);

  constructor() {
    registerObjectQLPlugins(this.loader);
  }

  async onModuleInit() {
    await this.loadMetadata();
  }

  getRegistry(): MetadataRegistry {
    return this.registry;
  }

  private async loadMetadata() {
    const metadataPath = "@example/project-management";
    this.logger.log(`Loading metadata from: ${metadataPath}`);

    try {
      // Create metadata dir if it doesn't exist to prevent errors? 
      // Or just let loader handle it? Loader logs warning if dir missing.
      this.loader.load(metadataPath);
      this.logger.log('Metadata loaded successfully');
    } catch (e: any) {
      this.logger.error(`Failed to load metadata: ${e.message}`);
    }
  }
}
