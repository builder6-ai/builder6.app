import { Injectable, Logger } from '@nestjs/common';
import * as path from 'path';
import { MetadataRegistry, MetadataLoader, registerObjectQLPlugins } from '@objectql/metadata';

@Injectable()
export class LoaderService {
  private readonly logger = new Logger(LoaderService.name);
  private readonly registry = new MetadataRegistry();
  private readonly loader = new MetadataLoader(this.registry);

  constructor() {
    registerObjectQLPlugins(this.loader);
    this.loadMetadata();
  }

  getRegistry(): MetadataRegistry {
    return this.registry;
  }

  private loadMetadata() {
    // Default to 'metadata' folder in root
    const metadataPath = "@example/project-management";
    this.logger.log(`Loading metadata from: ${metadataPath}`);

    try {
      this.loader.load(metadataPath);
      
      // Log loaded counts
      const objects = this.registry.list('object');
      this.logger.log(`Metadata loaded: ${objects.length} objects`);
    } catch (e: any) {
      this.logger.error(`Failed to load metadata: ${e.message}`);
    }
  }
}
