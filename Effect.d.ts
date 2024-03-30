declare namespace PenguLoader {
    interface Effect {
        /**
         * currently applied effect or `null`
         */
        readonly current: Effect.name;

        /**
         * apply effect to window
         * @returns `boolean` indicating whether the effect was successfully applied or not
         */
        apply(name: Effect.name, options?: Effect.applyOptions): boolean;

        /**
         * clears any currently applied effect, then the Client background will be black
         */
        clear(): void;
    }

    namespace Effect {
        type name = "mica" | "acrylic" | "unified" | "blurbehind" | null;

        interface applyOptions {
            color: string;
        }
    }
}

interface WindowEventMap {
    "effect-changed": CustomEvent<unknown>;
}