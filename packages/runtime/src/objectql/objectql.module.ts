import { Module, MiddlewareConsumer, RequestMethod, OnModuleInit } from '@nestjs/common';
import { createObjectQLRouter } from '@objectql/api';
import { objectql } from './objectql.instance';
import { LoaderService } from '../loader/loader.service';

@Module({
    exports: []
})
export class ObjectQLModule implements OnModuleInit {
    constructor(private loaderService: LoaderService) {}

    async onModuleInit() {
        await objectql.init();
        console.log('ObjectQL Initialized');
    }

    configure(consumer: MiddlewareConsumer) {
        // Register objects from loader before creating router
        const registry = this.loaderService.getRegistry();
        const objects = registry.list('object');
        
        console.log(`Registering ${objects.length} objects to ObjectQL`);
        
        const router = createObjectQLRouter({
            objectql,
            swagger: {
                enabled: true,
                path: '/docs'
            },
            getContext: (req) => {
                // simple auth simulation
                const userId = req.headers['x-user-id'] as string;
                if (userId === 'admin') {
                     return objectql.createContext({ isSystem: true });
                }
                return objectql.createContext({
                    userId: userId
                });
            }
        });

        consumer
            .apply(router)
            .forRoutes({ path: 'api', method: RequestMethod.ALL });
    }
}
