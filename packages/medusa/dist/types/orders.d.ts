import { Order, Payment } from "../models";
import { AddressPayload, DateComparisonOperator } from "./common";
export declare function isOrder(object: any): object is Order;
export type TotalsContext = {
    force_taxes?: boolean;
    includes?: {
        returnable_items?: boolean;
    };
};
declare enum OrderStatus {
    pending = "pending",
    completed = "completed",
    archived = "archived",
    canceled = "canceled",
    requires_action = "requires_action"
}
declare enum FulfillmentStatus {
    not_fulfilled = "not_fulfilled",
    fulfilled = "fulfilled",
    partially_fulfilled = "partially_fulfilled",
    shipped = "shipped",
    partially_shipped = "partially_shipped",
    canceled = "canceled",
    returned = "returned",
    partially_returned = "partially_returned",
    requires_action = "requires_action"
}
declare enum PaymentStatus {
    captured = "captured",
    awaiting = "awaiting",
    not_paid = "not_paid",
    refunded = "refunded",
    partially_refunded = "partially_refunded",
    canceled = "canceled",
    requires_action = "requires_action"
}
export type CreateOrderInput = {
    status?: OrderStatus;
    email: string;
    billing_address: AddressPayload;
    shipping_address: AddressPayload;
    items: Record<string, unknown>[];
    region: string;
    discounts?: Record<string, unknown>[];
    customer_id: string;
    payment_method: {
        provider_id: string;
        ata?: Record<string, unknown>;
    };
    shipping_method?: {
        provider_id: string;
        profile_id: string;
        price: number;
        data?: Record<string, unknown>;
        items?: Record<string, unknown>[];
    }[];
    no_notification?: boolean;
};
export type UpdateOrderInput = {
    email?: string;
    billing_address?: AddressPayload;
    shipping_address?: AddressPayload;
    items?: object[];
    region?: string;
    discounts?: object[];
    customer_id?: string;
    payment_method?: {
        provider_id?: string;
        data?: Record<string, unknown>;
    };
    shipping_method?: {
        provider_id?: string;
        profile_id?: string;
        price?: number;
        data?: Record<string, unknown>;
        items?: Record<string, unknown>[];
    }[];
    no_notification?: boolean;
    payment?: Payment;
    status?: OrderStatus;
    fulfillment_status?: FulfillmentStatus;
    payment_status?: PaymentStatus;
    metadata?: Record<string, unknown>;
};
export declare const defaultAdminOrdersRelations: string[];
export declare const defaultAdminOrdersFields: (keyof Order)[];
export declare class AdminListOrdersSelector {
    q?: string;
    id?: string;
    status?: string[];
    fulfillment_status?: string[];
    payment_status?: string[];
    display_id?: string;
    cart_id?: string;
    customer_id?: string;
    email?: string;
    region_id?: string | string[];
    currency_code?: string;
    tax_rate?: string;
    sales_channel_id?: string[];
    canceled_at?: DateComparisonOperator;
    created_at?: DateComparisonOperator;
    updated_at?: DateComparisonOperator;
}
export declare class OrdersReturnItem {
    item_id: string;
    quantity: number;
    reason_id?: string;
    note?: string;
}
export {};
