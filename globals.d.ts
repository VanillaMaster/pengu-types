export {}; // Make this a module

interface Window {
    Pengu: PenguLoader.Pengu;
    CommandBar: PenguLoader.CommandBar;
    DataStore: PenguLoader.DataStore;
    Effect: PenguLoader.Effect;
    PluginFS: PenguLoader.PluginFS;
    Toast: PenguLoader.Toast
    rcp: PenguLoader.RCP;

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
    var DataStore: PenguLoader.DataStore;
    var Effect: PenguLoader.Effect;
    var PluginFS: PenguLoader.PluginFS;
    var Toast: PenguLoader.Toast;
    var rcp: PenguLoader.RCP;

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