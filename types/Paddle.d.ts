// types/paddle.d.ts
declare namespace Paddle {
    export const Environment: {
        set: (environment: "sandbox" | "production") => void;
    };

    interface EventData {
        id: string;
    }

    interface SetupOptions {
        seller: number;
        checkout: {
            settings: Checkout.CheckoutSettings | null;
        };
        eventCallback?: (event: EventData) => void | null;
    }

    export function Setup(options: SetupOptions): void;

    export namespace Spinner {
        export function show(): void;
        export function hide(): void;
    }

    export namespace Status {
        export function libraryVersion(): string;
    }
}
