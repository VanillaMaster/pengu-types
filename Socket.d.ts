declare namespace PenguLoader {
    interface Socket {
        /**
         * Subscribe a listener to listen when the given API endpoint get called
         * @param api a string that presents a LCU API endpoint
         * @param listener a function that gets called with one data param
         * @returns object with a prop disconnect that could be called to disconnect the observer
         */
        observe<T extends keyof League.LCU.websocket.EventMap>(api: T, listener: Socket.ApiListener<League.LCU.websocket.EventMap[T]>): { disconnect: () => void };
        observe(api: string, listener: Socket.ApiListener): { disconnect: () => void };

        /**
         * Disconnect a subscribed listener.
         * @param api a string that presents a LCU API endpoint
         * @param listener a function to disconnect to
         */
        disconnect<T extends keyof League.LCU.websocket.EventMap>(api: T, listener: Socket.ApiListener<League.LCU.websocket.EventMap[T]>): void;
        disconnect(api: string, listener: Socket.ApiListener): void;
    }

    namespace Socket {
        interface EventData {
            data: any
            uri: string
            eventType: 'Create' | 'Update' | 'Delete'
        }
    
        interface ApiListener<T = EventData> {
            (message: T): void
        }
    }
}