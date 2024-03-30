declare namespace PenguLoader {
    interface Toast {
        /**
         * Push a simple notification with a success checkmark
         * @param message a string to be shown on the notification
         */
        success(message: string): void;

        /**
         * Push a simple notification with a failure icon.
         * @param message a string to be shown on the notification
         */
        error(message: string): void;

        /**
         * Push a progress notification and wait for the given promise to complete. This function returns the given promise that is helpful for then/catch chain
         * @param promise a promise that the progress waits for
         */
        promise<T>(promise: Promise<T>, msg: Toast.msg): Promise<T>;
    }

    namespace Toast {
        interface msg {
            /**
             * a string message to be shown when the progress starts loading
             */
            loading: string;
            /**
             * a string to be shown when the promise is resolved
             */
            success: string;
            /**
             * a string to be shown when the promise is rejected
             */
            error: string;
        }
    }
}