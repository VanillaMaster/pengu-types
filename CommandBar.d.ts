declare namespace PenguLoader {
    interface CommandBar {
        /**
         * Add a new action item to the Command Bar. It will automatically update even when showing.
         */
        addAction(action: CommandBar.Action): void;
        /**
         * Show the Command Bar programmatically if it was hidden.
         */
        show(): void;
        /**
         * Manually trigger the Command Bar to update its items. Only use this function if your added actions are not updating.
         */
        update(): void;
    }

    namespace CommandBar {
        
        interface Action {
            /**
             * an unique idetifier for the action
             */
            id?: string;
            /**
             * action's name
             */
            name: string;
            /**
             * action's note/legend or shortcut key
             */
            legend?: string;
            /**
             * tags or keywords to search
             */
            tags?: string[];
            /**
             * <svg> HTML tag in string
             */
            icon?: string;
            /**
             * group name
             */
            group?: string;
            /**
             * hide the action, except for search results
             */
            hidden?: boolean;
            /**
             * called when the action is executed 
             */
            perform?: (id?: string) => any;
        }
    }
}