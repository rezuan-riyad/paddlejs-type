// types/checkout.d.ts
declare namespace Paddle.Checkout {
    interface CheckoutSettings {
        displayMode?: "inline" | "overlay";
        theme?: "light" | "dark";
        locale?: string;
        allowLogout?: boolean;
        frameTarget?: string;
        frameStyle?: string;
        frameInitialHeight?: string;
        successUrl?: string;
    }

    interface CheckoutItem {
        priceId: string;
        quantity: number;
    }

    interface Address {
        id?: string;
        countryCode?: string;
        postalCode?: string;
        region?: string;
        city?: string;
        firstLine?: string;
    }

    interface Business {
        id?: string;
        name?: string;
        taxIdentifier?: string;
    }

    interface Customer {
        id?: string;
        email?: string;
        address?: Address;
        business?: Business;
    }

    export function open(options: {
        settings?: CheckoutSettings;
        items: Array<CheckoutItem>;
        customer?: Customer;
        transactionId?: string;
        discountCode?: string;
        discountId?: string;
        customData?: object | null;
    }): void;

    export function updateItems(items: Array<CheckoutItem>): void;

    export function close(): void
}
