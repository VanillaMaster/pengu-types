declare namespace PenguLoader {
    interface PluginFS {
        /**
         * Read a file in text mode
         * @param path The path of the file you want to access with respect to the plugin root directory
         * @returns `Promise` of the content string on success or Promise of `undefined` on failure
         */
        read(path: string): Promise<string | undefined>;

        /**
         * Write to a file in text mode
         * @param path The path of the file you want to access with respect to the plugin root directory
         * @param content The content string you want to write into
         * @param enableAppendMode Append to file if set to `true` or overwrite file if `false`. `false` by default
         * @returns A `Promise` of a boolean result indicating success or failure
         */
        write(path: string, content: string, enableAppendMode?: boolean): Promise<boolean>;

        /**
         * Create directories recursively
         * @param path The directory path you want to create with respect to the plugin root directory
         * @returns A `Promise` of a `boolean` result indicating success or failure
         */
        mkdir(path: string): Promise<Boolean>;

        /**
         * Get the status of a file
         * @param path The file path with respect to the plugin root directory
         * @returns A `Promise` of `FileOrDirStat` or `undefined` depending on success or failure
         */
        stat(path: string): Promise<PluginFS.FileOrDirStat>;

        /**
         * List files and directories under given path
         * @param path The directory path with respect to the plugin root directory
         * @returns A `Promise` of `Array` of file name strings on success or `Promise` of `undefined` on failure.
         */
        ls(path: string): Promise<string[] | undefined>;

        /**
         * Remove file/directories
         * 
         * You can only delete a non-empty directory with recursively set to true
         * 
         * @param path The file/directory path with respect to the plugin root directory
         * @param recursively Delete all files/directories under the give path recursively. `false` by default
         * @returns A `Promise` of a `number` showing how many files and directories is deleted. When deleting with `recursively` set to `true`, the number value is sum of deleted `directories` and `files`
         */
        rm(path: string, recursively?: boolean): Promise<number>;
    }

    namespace PluginFS {
        interface FileStat {
            fileName: string
            length: number
            isDir: false
        }
        
        interface DirStat {
            fileName: string;
            length: 0;
            isDir: true;
        }

        type FileOrDirStat = FileStat | DirStat;
    }
}