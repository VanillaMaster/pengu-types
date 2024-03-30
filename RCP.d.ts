declare namespace PenguLoader {
    interface RCP {
        /**
         * Register a callback that will be triggered before the target plugin loads
         * @param name RCP name, should be prefixed with `rcp-`
         * @param callback A function will be triggered before the plugin loads
         */
        preInit<T extends keyof League.RCP.PluginMap>(name: T, callback: (context: unknown) => void): void;
        preInit(name: string, callback: (context: unknown) => void): void;

        /**
         * Register a callback that will be triggered after the target plugin is loaded. Gives you an opportunity to access the plugin API
         * @param name RCP name, should be prefixed with `rcp-`
         * @param callback A function will be triggered after the plugin is loaded
         * @param blocking A boolean value indicating whether this callback will be executed in blocking way. `false` by default
         */
        postInit<T extends keyof League.RCP.PluginMap>(name: T, callback: (api: League.RCP.PluginMap[T]) => void, blocking?: boolean): void;
        postInit(name: string, callback: (api: unknown) => void, blocking?: boolean): void;

        /**
         * works as same as `postInit` but allows you to get the target plugin asynchronously and also works even after the plugin is loaded
         * @param name RCP name, should be prefixed with `rcp-`
         */
        whenReady<T extends keyof League.RCP.PluginMap>(name: T): Promise<League.RCP.PluginMap[T]>;
        whenReady(name: string): Promise<unknown>;

        /**
         * Get a RCP plugin synchronously after it's registered in the callbacks map
         * @param name RCP name, should be prefixed with `rcp-`
         */
        get<T extends keyof League.RCP.PluginMap>(name): League.RCP.PluginMap[T];
        get(name: string): unknown;
    }
}