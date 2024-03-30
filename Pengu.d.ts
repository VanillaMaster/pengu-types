declare namespace PenguLoader {
    interface Pengu {
        /**
         * version of Pengu Loader
         */
        readonly version: string;
        /**
         * A boolean value that indicates the **Super Low Spec Mode** is enabled or not
         */
        readonly superPotato: boolean;
        /**
         * An array of plugin entries
         */
        readonly plugins: string[];
    }
}