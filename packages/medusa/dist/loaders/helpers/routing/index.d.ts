import { Express } from "express";
import { ConfigModule } from "../../../types/global";
import { GlobalMiddlewareDescriptor, MiddlewaresConfig, RouteDescriptor } from "./types";
export declare class RoutesLoader {
    protected routesMap: Map<string, RouteDescriptor>;
    protected globalMiddlewaresDescriptor: GlobalMiddlewareDescriptor | undefined;
    protected app: Express;
    protected activityId?: string;
    protected rootDir: string;
    protected configModule: ConfigModule;
    protected excludes: RegExp[];
    constructor({ app, activityId, rootDir, configModule, excludes, }: {
        app: Express;
        activityId?: string;
        rootDir: string;
        configModule: ConfigModule;
        excludes?: RegExp[];
    });
    /**
     * Validate the route config and display a log info if
     * it should be ignored or skipped.
     *
     * @param {GlobalMiddlewareDescriptor} descriptor
     * @param {MiddlewaresConfig} config
     *
     * @return {void}
     */
    protected validateMiddlewaresConfig({ config, }: {
        config?: MiddlewaresConfig;
    }): void;
    /**
     * Take care of replacing the special path segments
     * to an express specific path segment
     *
     * @param route - The route to parse
     *
     * @example
     * "/admin/orders/[id]/route.ts => "/admin/orders/:id/route.ts"
     */
    protected parseRoute(route: string): string;
    /**
     * Load the file content from a descriptor and retrieve the verbs and handlers
     * to be assigned to the descriptor
     *
     * @return {Promise<void>}
     */
    protected createRoutesConfig(): Promise<void>;
    protected createRoutesDescriptor({ childPath, parentPath, }: {
        childPath: string;
        parentPath?: string;
    }): void;
    protected createMiddlewaresDescriptor({ dirPath, }: {
        dirPath: string;
    }): Promise<void>;
    protected createRoutesMap({ dirPath, parentPath, }: {
        dirPath: string;
        parentPath?: string;
    }): Promise<void>;
    protected registerRoutes(): Promise<void>;
    protected registerMiddlewares(): Promise<void>;
    applyGlobalMiddlewares(): void;
    load(): Promise<void>;
}
export default RoutesLoader;
