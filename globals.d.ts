export {}; // Make this a module

interface Window {
    Pengu: PenguLoader.Pengu;
    CommandBar: PenguLoader.CommandBar;
    Effect: PenguLoader.Effect;
    DataStore: PenguLoader.DataStore;
    PluginFS: PenguLoader.PluginFS;

    /**@deprecated */
    __llver: string;    

    openDevTools(remote?: boolean): void;
    openAssetsFolder(): void;
    openPluginsFolder(path?: string): void;
    reloadClient(): void;
    restartClient(): void;
    getScriptPath(): string;
}

declare global {
    var Pengu: PenguLoader.Pengu;
    var CommandBar: PenguLoader.CommandBar;
    var Effect: PenguLoader.Effect;
    var DataStore: PenguLoader.DataStore;
    var PluginFS: PenguLoader.PluginFS;
    var P: PenguLoader.Toast;

    /**
     * @deprecated
     */
    var __llver: string;

    function openDevTools(remote?: boolean): void;
    function openAssetsFolder(): void;
    function openPluginsFolder(path?: string): void;
    function reloadClient(): void;
    function restartClient(): void;
    function getScriptPath(): string;
}