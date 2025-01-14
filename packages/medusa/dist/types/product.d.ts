import { DateComparisonOperator, FindConfig, Selector } from "./common";
import { PriceList, Product, ProductCategory, ProductOptionValue, ProductStatus, SalesChannel } from "../models";
import { FindOperator } from "typeorm";
import { PriceListLoadConfig } from "./price-list";
/**
 * API Level DTOs + Validation rules
 */
export declare class FilterableProductProps {
    id?: string | string[];
    q?: string;
    status?: ProductStatus[];
    price_list_id?: string[];
    collection_id?: string[];
    tags?: string[];
    title?: string;
    description?: string;
    handle?: string;
    is_giftcard?: boolean;
    type_id?: string[];
    sales_channel_id?: string[];
    discount_condition_id?: string;
    category_id?: string[];
    include_category_children?: boolean;
    created_at?: DateComparisonOperator;
    updated_at?: DateComparisonOperator;
    deleted_at?: DateComparisonOperator;
}
export type ProductSelector = FilterableProductProps | (Selector<Product> & {
    q?: string;
    discount_condition_id?: string;
    price_list_id?: string[] | FindOperator<PriceList>;
    sales_channel_id?: string[] | FindOperator<SalesChannel>;
    category_id?: string[] | FindOperator<ProductCategory>;
});
/**
 * Service Level DTOs
 */
export type CreateProductInput = {
    title: string;
    subtitle?: string;
    profile_id?: string;
    description?: string;
    is_giftcard?: boolean;
    discountable?: boolean;
    images?: string[];
    thumbnail?: string;
    handle?: string;
    status?: ProductStatus;
    type?: CreateProductProductTypeInput;
    collection_id?: string;
    tags?: CreateProductProductTagInput[];
    options?: CreateProductProductOption[];
    variants?: CreateProductProductVariantInput[];
    sales_channels?: CreateProductProductSalesChannelInput[] | null;
    categories?: CreateProductProductCategoryInput[] | null;
    weight?: number;
    length?: number;
    height?: number;
    width?: number;
    hs_code?: string;
    origin_country?: string;
    mid_code?: string;
    material?: string;
    metadata?: Record<string, unknown>;
    external_id?: string | null;
};
export type CreateProductProductTagInput = {
    id?: string;
    value: string;
};
export type CreateProductProductSalesChannelInput = {
    id: string;
};
export type CreateProductProductCategoryInput = {
    id: string;
};
export type CreateProductProductTypeInput = {
    id?: string;
    value: string;
};
export type CreateProductProductVariantInput = {
    title: string;
    sku?: string;
    ean?: string;
    upc?: string;
    barcode?: string;
    hs_code?: string;
    inventory_quantity?: number;
    allow_backorder?: boolean;
    manage_inventory?: boolean;
    weight?: number;
    length?: number;
    height?: number;
    width?: number;
    origin_country?: string;
    mid_code?: string;
    material?: string;
    metadata?: Record<string, unknown>;
    prices?: CreateProductProductVariantPriceInput[];
    options?: {
        value: string;
    }[];
};
export type UpdateProductProductVariantDTO = {
    id?: string;
    title?: string;
    sku?: string;
    ean?: string;
    upc?: string;
    barcode?: string;
    hs_code?: string;
    inventory_quantity?: number;
    allow_backorder?: boolean;
    manage_inventory?: boolean;
    weight?: number;
    length?: number;
    height?: number;
    width?: number;
    origin_country?: string;
    mid_code?: string;
    material?: string;
    metadata?: Record<string, unknown>;
    prices?: CreateProductProductVariantPriceInput[];
    options?: {
        value: string;
        option_id: string;
    }[];
};
export type CreateProductProductOption = {
    title: string;
};
export type CreateProductProductVariantPriceInput = {
    region_id?: string;
    currency_code?: string;
    amount: number;
    min_quantity?: number;
    max_quantity?: number;
};
export type UpdateProductInput = Omit<Partial<CreateProductInput>, "variants"> & {
    variants?: UpdateProductProductVariantDTO[];
};
export type ProductOptionInput = {
    title: string;
    values?: ProductOptionValue[];
};
export type FindProductConfig = FindConfig<Product> & PriceListLoadConfig;
export declare class ProductSalesChannelReq {
    id: string;
}
export declare class ProductProductCategoryReq {
    id: string;
}
export declare class ProductTagReq {
    id?: string;
    value: string;
}
export declare class ProductTypeReq {
    id?: string;
    value: string;
}
export type ProductFilterOptions = {
    price_list_id?: FindOperator<PriceList>;
    sales_channel_id?: FindOperator<SalesChannel>;
    category_id?: FindOperator<ProductCategory>;
    include_category_children?: boolean;
    discount_condition_id?: string;
};
