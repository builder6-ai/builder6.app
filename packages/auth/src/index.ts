import { betterAuth, BetterAuthOptions, Auth } from "better-auth";
import { ObjectQL } from "@objectql/core";
import { MongoDriver } from "@objectql/driver-mongo";
import { objectQLAdapter } from "./adapter";

export * from "./adapter";

export const createAuth = (config: {
    mongoUri: string;
    authConfig?: Partial<BetterAuthOptions>;
}): Auth => {
    const driver = new MongoDriver({ url: config.mongoUri });
    const objectql = new ObjectQL({ datasources: { "default": driver } });

    return betterAuth({
        database: objectQLAdapter({ objectql }),
        ...config.authConfig
    });
}
