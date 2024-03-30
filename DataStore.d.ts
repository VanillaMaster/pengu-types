declare namespace PenguLoader {
    interface DataStore {
        /**
         * store your data with a given key
         * @param value Value may be string, number, boolean, null or collection like array and object.Actually, it will be stored as JSON format, so any value like function and runtime object are ignored
         * @returns `boolean` value that indicates your key is valid and the data is stored successfully
         */
        set(key: string | number, value: any): boolean;

        /**
         * Retrieve stored data with a given key. If the key does not exist, it will return `undefined`
         * @param fallback default value for non-existent keys
         */
        get(key: string | number, fallback?: any): any;

        /**
         * @returns a `boolean` indicating whether data with the specified key exists or not
         */
        has(key: string | number): boolean;

        /**
         * removes the specified data from storage by key
         * @returns `true` if the existing key-value pair has been removed, `false` otherview
         */
        remove(key: string | number): boolean;
    }

    
}