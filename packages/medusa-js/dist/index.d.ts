import { AxiosError, AxiosRequestHeaders, AxiosInstance } from 'axios';
import { AdminCreateUserRequest, AdminUpdateUserRequest, AdminPostInvitesReq, StorePostCustomersCustomerAddressesReq, StoreCustomersRes, StorePostCustomersCustomerAddressesAddressReq, StorePostAuthReq, StoreAuthRes, StoreGetAuthEmailRes, StoreBearerAuthRes, StorePostCartsCartLineItemsReq, StoreCartsRes, StorePostCartsCartLineItemsItemReq, StorePostCartsCartShippingMethodReq, StoreCompleteCartRes, StorePostCartReq, StorePostCartsCartPaymentSessionReq, StorePostCartsCartReq, StorePostCartsCartPaymentSessionUpdateReq, StoreCollectionsRes, StoreGetCollectionsParams, StoreCollectionsListRes, StoreCustomersListPaymentMethodsRes, StorePostCustomersReq, StorePostCustomersCustomerReq, StoreGetCustomersCustomerOrdersParams, StoreCustomersListOrdersRes, StorePostCustomersResetPasswordReq, StorePostCustomersCustomerPasswordTokenReq, StoreGiftCardsRes, StoreOrderEditsRes, StorePostOrderEditsOrderEditDecline, StoreOrdersRes, StoreGetOrdersParams, StorePostCustomersCustomerOrderClaimReq, StorePostCustomersCustomerAcceptClaimReq, StoreGetPaymentCollectionsParams, StorePaymentCollectionsRes, StorePostPaymentCollectionsBatchSessionsAuthorizeReq, StorePostPaymentCollectionsBatchSessionsReq, StorePaymentCollectionSessionsReq, StorePaymentCollectionsSessionRes, StoreGetProductCategoriesCategoryParams, StoreGetProductCategoriesCategoryRes, StoreGetProductCategoriesParams, StoreGetProductCategoriesRes, StoreGetProductTagsParams, StoreProductTagsListRes, StoreGetProductTypesParams, StoreProductTypesListRes, StoreVariantsRes, StoreGetVariantsParams, StoreVariantsListRes, StoreProductsRes, StorePostSearchReq, StorePostSearchRes, StoreGetProductsParams, StoreProductsListRes, StoreRegionsListRes, StoreRegionsRes, StoreReturnReasonsRes, StoreReturnReasonsListRes, StorePostReturnsReq, StoreReturnsRes, StoreShippingOptionsListRes, StoreGetShippingOptionsParams, StorePostSwapsReq, StoreSwapsRes, AdminAuthRes, AdminPostAuthReq, AdminBearerAuthRes, AdminPostBatchesReq, AdminBatchJobRes, AdminGetBatchParams, AdminBatchJobListRes, AdminPostCollectionsReq, AdminCollectionsRes, AdminPostCollectionsCollectionReq, AdminCollectionsDeleteRes, AdminGetCollectionsParams, AdminCollectionsListRes, AdminPostProductsToCollectionReq, AdminDeleteProductsFromCollectionReq, AdminDeleteProductsFromCollectionRes, AdminGetCurrenciesParams, AdminCurrenciesListRes, AdminPostCurrenciesCurrencyReq, AdminCurrenciesRes, AdminPostCustomerGroupsReq, AdminCustomerGroupsRes, AdminGetCustomerGroupsGroupParams, AdminPostCustomerGroupsGroupReq, AdminCustomerGroupsDeleteRes, AdminGetCustomerGroupsParams, AdminCustomerGroupsListRes, AdminPostCustomerGroupsGroupCustomersBatchReq, AdminDeleteCustomerGroupsGroupCustomerBatchReq, AdminGetCustomersParams, AdminCustomersListRes, AdminPostCustomersReq, AdminCustomersRes, AdminPostCustomersCustomerReq, AdminDiscountsRes, AdminPostDiscountsReq, AdminPostDiscountsDiscountReq, AdminPostDiscountsDiscountDynamicCodesReq, AdminDiscountsDeleteRes, AdminGetDiscountsParams, AdminDiscountsListRes, AdminPostDiscountsDiscountConditions, AdminPostDiscountsDiscountConditionsParams, AdminPostDiscountsDiscountConditionsCondition, AdminPostDiscountsDiscountConditionsConditionParams, AdminGetDiscountsDiscountConditionsConditionParams, AdminDiscountConditionsRes, AdminPostDiscountsDiscountConditionsConditionBatchReq, AdminPostDiscountsDiscountConditionsConditionBatchParams, AdminDeleteDiscountsDiscountConditionsConditionBatchReq, AdminPostDraftOrdersReq, AdminDraftOrdersRes, AdminPostDraftOrdersDraftOrderLineItemsReq, AdminDraftOrdersDeleteRes, AdminGetDraftOrdersParams, AdminDraftOrdersListRes, AdminPostDraftOrdersDraftOrderRegisterPaymentRes, AdminPostDraftOrdersDraftOrderReq, AdminPostDraftOrdersDraftOrderLineItemsItemReq, AdminPostGiftCardsReq, AdminGiftCardsRes, AdminPostGiftCardsGiftCardReq, AdminGiftCardsDeleteRes, AdminGetGiftCardsParams, AdminGiftCardsListRes, AdminGetInventoryItemsItemParams, AdminInventoryItemsRes, AdminPostInventoryItemsInventoryItemReq, AdminInventoryItemsDeleteRes, AdminPostInventoryItemsReq, AdminPostInventoryItemsParams, AdminGetInventoryItemsParams, AdminInventoryItemsListWithVariantsAndLocationLevelsRes, AdminPostInventoryItemsItemLocationLevelsLevelReq, AdminPostInventoryItemsItemLocationLevelsReq, AdminGetInventoryItemsItemLocationLevelsParams, AdminInventoryItemsLocationLevelsRes, AdminPostInvitesInviteAcceptReq, AdminInviteDeleteRes, AdminListInvitesRes, AdminPostNotesReq, AdminNotesRes, AdminPostNotesNoteReq, AdminNotesDeleteRes, AdminGetNotesParams, AdminNotesListRes, AdminGetNotificationsParams, AdminNotificationsListRes, AdminPostNotificationsNotificationResendReq, AdminNotificationsRes, GetOrderEditsOrderEditParams, AdminOrderEditsRes, GetOrderEditsParams, AdminOrderEditsListRes, AdminPostOrderEditsReq, AdminPostOrderEditsOrderEditReq, AdminOrderEditDeleteRes, AdminPostOrderEditsEditLineItemsReq, AdminOrderEditItemChangeDeleteRes, AdminPostOrderEditsEditLineItemsLineItemReq, AdminPostOrdersOrderReq, AdminOrdersRes, AdminGetOrdersParams, AdminOrdersListRes, AdminPostOrdersOrderRefundsReq, AdminPostOrdersOrderFulfillmentsReq, AdminPostOrdersOrderShipmentReq, AdminPostOrdersOrderReturnsReq, AdminPostOrdersOrderShippingMethodsReq, AdminPostOrdersOrderSwapsReq, AdminPostOrdersOrderSwapsSwapFulfillmentsReq, AdminPostOrdersOrderSwapsSwapShipmentsReq, AdminPostOrdersOrderClaimsReq, AdminPostOrdersOrderClaimsClaimReq, AdminPostOrdersOrderClaimsClaimFulfillmentsReq, AdminPostOrdersOrderClaimsClaimShipmentsReq, AdminGetPaymentCollectionsParams, AdminPaymentCollectionsRes, AdminUpdatePaymentCollectionsReq, AdminPaymentCollectionDeleteRes, GetPaymentsParams, AdminPaymentRes, AdminPostPaymentRefundsReq, AdminRefundRes, AdminPostPriceListsPriceListReq, AdminPriceListRes, AdminPostPriceListsPriceListPriceListReq, AdminPriceListDeleteRes, AdminGetPriceListPaginationParams, AdminPriceListsListRes, AdminGetPriceListsPriceListProductsParams, AdminPostPriceListPricesPricesReq, AdminDeletePriceListPricesPricesReq, AdminPriceListDeleteBatchRes, AdminDeletePriceListsPriceListProductsPricesBatchReq, AdminGetProductCategoryParams, AdminProductCategoriesCategoryRes, AdminPostProductCategoriesReq, AdminPostProductCategoriesCategoryReq, AdminGetProductCategoriesParams, AdminProductCategoriesListRes, AdminProductCategoriesCategoryDeleteRes, AdminDeleteProductCategoriesCategoryProductsBatchReq, AdminPostProductCategoriesCategoryProductsBatchReq, AdminGetProductTagsParams, AdminProductTagsListRes, AdminGetProductTypesParams, AdminProductTypesListRes, AdminPostProductsReq, AdminProductsRes, AdminPostProductsProductReq, AdminProductsDeleteRes, AdminGetProductsParams, AdminProductsListRes, AdminProductsListTypesRes, AdminProductsListTagsRes, AdminPostProductsProductMetadataReq, AdminPostProductsProductVariantsReq, AdminPostProductsProductVariantsVariantReq, AdminProductsDeleteVariantRes, AdminPostProductsProductOptionsReq, AdminPostProductsProductOptionsOption, AdminProductsDeleteOptionRes, AdminPublishableApiKeysRes, GetPublishableApiKeysParams, AdminPublishableApiKeysListRes, AdminPostPublishableApiKeysReq, AdminPostPublishableApiKeysPublishableApiKeyReq, AdminPublishableApiKeyDeleteRes, AdminPostPublishableApiKeySalesChannelsBatchReq, AdminDeletePublishableApiKeySalesChannelsBatchReq, GetPublishableApiKeySalesChannelsParams, AdminSalesChannelsListRes, AdminPostRegionsReq, AdminRegionsRes, AdminPostRegionsRegionReq, AdminRegionsDeleteRes, AdminGetRegionsParams, AdminRegionsListRes, AdminPostRegionsRegionCountriesReq, AdminPostRegionsRegionFulfillmentProvidersReq, AdminGetRegionsRegionFulfillmentOptionsRes, AdminPostRegionsRegionPaymentProvidersReq, AdminReservationsRes, AdminGetReservationsParams, AdminReservationsListRes, AdminPostReservationsReq, AdminPostReservationsReservationReq, AdminReservationsDeleteRes, AdminPostReturnReasonsReq, AdminReturnReasonsRes, AdminPostReturnReasonsReasonReq, AdminReturnReasonsDeleteRes, AdminReturnReasonsListRes, AdminReturnsCancelRes, AdminPostReturnsReturnReceiveReq, AdminReturnsRes, AdminGetReturnsParams, AdminReturnsListRes, AdminSalesChannelsRes, AdminPostSalesChannelsReq, AdminPostSalesChannelsSalesChannelReq, AdminGetSalesChannelsParams, AdminSalesChannelsDeleteRes, AdminDeleteSalesChannelsChannelProductsBatchReq, AdminPostSalesChannelsChannelProductsBatchReq, AdminPostSalesChannelsChannelStockLocationsReq, AdminDeleteSalesChannelsChannelStockLocationsReq, AdminPostShippingOptionsReq, AdminShippingOptionsRes, AdminPostShippingOptionsOptionReq, AdminShippingOptionsDeleteRes, AdminGetShippingOptionsParams, AdminShippingOptionsListRes, AdminPostShippingProfilesReq, AdminShippingProfilesRes, AdminPostShippingProfilesProfileReq, AdminDeleteShippingProfileRes, AdminShippingProfilesListRes, AdminPostStockLocationsReq, AdminStockLocationsRes, AdminPostStockLocationsLocationReq, AdminStockLocationsDeleteRes, AdminGetStockLocationsParams, AdminStockLocationsListRes, AdminPostStoreReq, AdminStoresRes, AdminExtendedStoresRes, AdminPaymentProvidersList, AdminTaxProvidersList, AdminSwapsRes, AdminGetSwapsParams, AdminSwapsListRes, AdminGetTaxRatesTaxRateParams, AdminTaxRatesRes, AdminGetTaxRatesParams, AdminTaxRatesListRes, AdminPostTaxRatesReq, AdminPostTaxRatesTaxRateReq, AdminPostTaxRatesTaxRateProductsReq, AdminPostTaxRatesTaxRateProductTypesReq, AdminPostTaxRatesTaxRateShippingOptionsReq, AdminDeleteTaxRatesTaxRateProductsReq, AdminDeleteTaxRatesTaxRateProductsParams, AdminDeleteTaxRatesTaxRateProductTypesReq, AdminDeleteTaxRatesTaxRateProductTypesParams, AdminDeleteTaxRatesTaxRateShippingOptionsReq, AdminDeleteTaxRatesTaxRateShippingOptionsParams, AdminTaxRatesDeleteRes, AdminUploadsRes, AdminDeleteUploadsReq, AdminDeleteUploadsRes, AdminPostUploadsDownloadUrlReq, AdminUploadsDownloadUrlRes, AdminResetPasswordTokenRequest, AdminResetPasswordRequest, AdminUserRes, AdminDeleteUserRes, AdminUsersListRes, AdminGetVariantsParams, AdminVariantsListRes, AdminGetVariantParams, AdminVariantsRes, AdminGetVariantsVariantInventoryRes } from '@medusajs/medusa';
import { FindParams } from '@medusajs/medusa/dist/types/common';

/**
 * MedusaError is the base error for every other MedusaError
 */
declare class MedusaError extends Error {
    constructor();
    static factory(type: ErrorType): MedusaError;
}
declare enum ErrorType {
    "INVALID_REQUEST" = 0,
    "API" = 1,
    "AUTHENTICATION" = 2,
    "PERMISSION" = 3,
    "CONNECTION" = 4
}

/**
 * `KeyManager` holds API keys in state.
 */
declare class KeyManager {
    private publishableApiKey;
    /**
     * Set a publishable api key to be sent with each request.
     */
    registerPublishableApiKey(key: string): void;
    /**
     * Retrieve the publishable api key.
     */
    getPublishableApiKey(): string | null;
}
/**
 * Export singleton instance.
 */
declare const _default: KeyManager;

interface Config {
    baseUrl: string;
    maxRetries: number;
    apiKey?: string;
    publishableApiKey?: string;
    customHeaders?: Record<string, any>;
}
interface RequestOptions {
    timeout?: number;
    numberOfRetries?: number;
}
type RequestMethod = "DELETE" | "POST" | "GET";
declare class Client {
    private axiosClient;
    private config;
    constructor(config: Config);
    shouldRetryCondition(err: AxiosError, numRetries: number, maxRetries: number): boolean;
    normalizeHeaders(obj: object): Record<string, any>;
    normalizeHeader(header: string): string;
    requiresAuthentication(path: any, method: any): boolean;
    /**
     * Creates all the initial headers.
     * We add the idempotency key, if the request is configured to retry.
     * @param {object} userHeaders user supplied headers
     * @param {Types.RequestMethod} method request method
     * @param {string} path request path
     * @param {object} customHeaders user supplied headers
     * @return {object}
     */
    setHeaders(userHeaders: RequestOptions, method: RequestMethod, path: string, customHeaders?: Record<string, any>): AxiosRequestHeaders;
    /**
     * Creates the axios client used for requests
     * As part of the creation, we configure the retry conditions
     * and the exponential backoff approach.
     * @param {Config} config user supplied configurations
     * @return {AxiosInstance}
     */
    createClient(config: Config): AxiosInstance;
    /**
     * Axios request
     * @param method request method
     * @param path request path
     * @param payload request payload
     * @param options axios configuration
     * @param customHeaders custom request headers
     * @return
     */
    request(method: RequestMethod, path: string, payload?: Record<string, any>, options?: RequestOptions, customHeaders?: Record<string, any>): Promise<any>;
}

interface HTTPResponse {
    status: number;
    statusText: string;
    headers: Record<string, string> & {
        "set-cookie"?: string[];
    };
    config: any;
    request?: any;
}
type Response<T> = T & {
    response: HTTPResponse;
};
type ResponsePromise<T = any> = Promise<Response<T>>;
type NoUndefined<T> = T extends undefined ? never : T;
type CreateUserRolesEnum = NoUndefined<AdminCreateUserRequest["role"]>;
type CreateUserRoles = `${CreateUserRolesEnum}`;
type AdminCreateUserPayload = Omit<AdminCreateUserRequest, "role"> | {
    role?: CreateUserRoles;
};
type UpdateUserRolesEnum = NoUndefined<AdminUpdateUserRequest["role"]>;
type UpdateUserRoles = `${UpdateUserRolesEnum}`;
type AdminUpdateUserPayload = Omit<AdminUpdateUserRequest, "role"> & {
    role?: UpdateUserRoles;
};
type InviteUserRolesEnum = `${AdminPostInvitesReq["role"]}`;
type AdminPostInvitesPayload = Omit<AdminPostInvitesReq, "role"> & {
    role: InviteUserRolesEnum;
};
type AdminCreateUploadPayload = File | File[];

declare class BaseResource {
    client: Client;
    constructor(client: Client);
}

declare class AddressesResource extends BaseResource {
    /**
     * Adds an address to a customers saved addresses
     * @param {StorePostCustomersCustomerAddressesReq} payload contains information to create an address
     * @param customHeaders
     * @return {ResponsePromise<StoreCustomersRes>}
     */
    addAddress(payload: StorePostCustomersCustomerAddressesReq, customHeaders?: Record<string, any>): ResponsePromise<StoreCustomersRes>;
    /**
     * Deletes an address of a customer
     * @param {string} address_id id of the address to delete
     * @param customHeaders
     * @return {ResponsePromise<StoreCustomersRes>}
     */
    deleteAddress(address_id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreCustomersRes>;
    /**
     * Update an address of a customer
     * @param {string} address_id id of customer
     * @param {StorePostCustomersCustomerAddressesAddressReq} payload address update
     * @param customHeaders
     * @return {StoreCustomersRes}
     */
    updateAddress(address_id: string, payload: StorePostCustomersCustomerAddressesAddressReq, customHeaders?: Record<string, any>): ResponsePromise<StoreCustomersRes>;
}

declare class AuthResource extends BaseResource {
    /**
     * @description Authenticates a customer using email and password combination
     * @param {StorePostAuthReq} payload authentication payload
     * @param customHeaders
     * @return {ResponsePromise<StoreAuthRes>}
     */
    authenticate(payload: StorePostAuthReq, customHeaders?: Record<string, any>): ResponsePromise<StoreAuthRes>;
    /**
     * @description Removes authentication session
     * @return {ResponsePromise<void>}
     */
    deleteSession(customHeaders?: Record<string, any>): ResponsePromise<void>;
    /**
     * @description Retrieves an authenticated session
     * Usually used to check if authenticated session is alive.
     * @param customHeaders
     * @return {ResponsePromise<StoreAuthRes>}
     */
    getSession(customHeaders?: Record<string, any>): ResponsePromise<StoreAuthRes>;
    /**
     * @description Check if email exists
     * @param {string} email is required
     * @param customHeaders
     * @return {ResponsePromise<StoreGetAuthEmailRes>}
     */
    exists(email: string, customHeaders?: Record<string, any>): ResponsePromise<StoreGetAuthEmailRes>;
    /**
     * @description Retrieves a new JWT access token
     * @param {AdminPostAuthReq} payload
     * @param customHeaders
     * @return {ResponsePromise<AdminBearerAuthRes>}
     */
    getToken(payload: StorePostAuthReq, customHeaders?: Record<string, any>): ResponsePromise<StoreBearerAuthRes>;
}

declare class LineItemsResource extends BaseResource {
    /**
     * Creates a line-item for a cart
     * @param {string} cart_id id of cart
     * @param {StorePostCartsCartLineItemsReq} payload details needed to create a line-item
     * @param customHeaders
     * @return {ResponsePromise<StoreCartsRes>}
     */
    create(cart_id: string, payload: StorePostCartsCartLineItemsReq, customHeaders?: Record<string, any>): ResponsePromise<StoreCartsRes>;
    /**
     * Updates a line-item.
     * Only quantity updates are allowed
     * @param {string} cart_id id of cart
     * @param {string} line_id id of item to update
     * @param {StorePostCartsCartLineItemsItemReq} payload details needed to update a line-item
     * @param customHeaders
     * @return {ResponsePromise<StoreCartsRes>}
     */
    update(cart_id: string, line_id: string, payload: StorePostCartsCartLineItemsItemReq, customHeaders?: Record<string, any>): ResponsePromise<StoreCartsRes>;
    /**
     * Remove a line-item from a cart
     * @param {string} cart_id id of cart
     * @param {string} line_id id of item to remove
     * @param customHeaders
     * @return {ResponsePromise<StoreCartsRes>}
     */
    delete(cart_id: string, line_id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreCartsRes>;
}

declare class CartsResource extends BaseResource {
    lineItems: LineItemsResource;
    /**
     * Adds a shipping method to cart
     * @param {string} cart_id Id of cart
     * @param {StorePostCartsCartShippingMethodReq} payload Contains id of shipping option and optional data
     * @param customHeaders
     * @return {ResponsePromise<StoreCartsRes>}
     */
    addShippingMethod(cart_id: string, payload: StorePostCartsCartShippingMethodReq, customHeaders?: Record<string, any>): ResponsePromise<StoreCartsRes>;
    /**
     * Completes a cart.
     * Payment authorization is attempted and if more work is required, we simply return the cart for further updates.
     * If payment is authorized and order is not yet created, we make sure to do so.
     * The completion of a cart can be performed idempotently with a provided header Idempotency-Key.
     * If not provided, we will generate one for the request.
     * @param {string} cart_id is required
     * @param customHeaders
     * @return {ResponsePromise<StoreCompleteCartRes>}
     */
    complete(cart_id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreCompleteCartRes>;
    /**
     * Creates a cart
     * @param {StorePostCartReq} payload is optional and can contain a region_id and items.
     * The cart will contain the payload, if provided. Otherwise it will be empty
     * @param customHeaders
     * @return {ResponsePromise<StoreCartsRes>}
     */
    create(payload?: StorePostCartReq, customHeaders?: Record<string, any>): ResponsePromise<StoreCartsRes>;
    /**
     * Creates payment sessions.
     * Initializes the payment sessions that can be used to pay for the items of the cart.
     * This is usually called when a customer proceeds to checkout.
     * @param {string} cart_id is required
     * @param customHeaders
     * @return {ResponsePromise<StoreCartsRes>}
     */
    createPaymentSessions(cart_id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreCartsRes>;
    /**
     * Removes a discount from cart.
     * @param {string} cart_id is required
     * @param {string} code discount code to remove
     * @param customHeaders
     * @return {ResponsePromise<StoreCartsRes>}
     */
    deleteDiscount(cart_id: string, code: string, customHeaders?: Record<string, any>): ResponsePromise<StoreCartsRes>;
    /**
     * Removes a payment session from a cart.
     * Can be useful in case a payment has failed
     * @param {string} cart_id is required
     * @param {string} provider_id the provider id of the session e.g. "stripe"
     * @param customHeaders
     * @return {ResponsePromise<StoreCartsRes>}
     */
    deletePaymentSession(cart_id: string, provider_id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreCartsRes>;
    /**
     * Refreshes a payment session.
     * @param {string} cart_id is required
     * @param {string} provider_id the provider id of the session e.g. "stripe"
     * @param customHeaders
     * @return {ResponsePromise<StoreCartsRes>}
     */
    refreshPaymentSession(cart_id: string, provider_id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreCartsRes>;
    /**
     * Retrieves a cart
     * @param {string} cart_id is required
     * @param customHeaders
     * @return {ResponsePromise<StoreCartsRes>}
     */
    retrieve(cart_id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreCartsRes>;
    /**
     * Refreshes a payment session.
     * @param {string} cart_id is required
     * @param {StorePostCartsCartPaymentSessionReq} payload the provider id of the session e.g. "stripe"
     * @param customHeaders
     * @return {ResponsePromise<StoreCartsRes>}
     */
    setPaymentSession(cart_id: string, payload: StorePostCartsCartPaymentSessionReq, customHeaders?: Record<string, any>): ResponsePromise<StoreCartsRes>;
    /**
     * Updates a cart
     * @param {string} cart_id is required
     * @param {StorePostCartsCartReq} payload is required and can contain region_id, email, billing and shipping address
     * @param customHeaders
     * @return {ResponsePromise<StoreCartsRes>}
     */
    update(cart_id: string, payload: StorePostCartsCartReq, customHeaders?: Record<string, any>): ResponsePromise<StoreCartsRes>;
    /**
     * Updates the payment method
     * @param {string} cart_id is required
     * @param {string} provider_id is required
     * @param {StorePostCartsCartPaymentSessionUpdateReq} payload is required
     * @param customHeaders
     * @return {ResponsePromise<StoreCartsRes>}
     */
    updatePaymentSession(cart_id: string, provider_id: string, payload: StorePostCartsCartPaymentSessionUpdateReq, customHeaders?: Record<string, any>): ResponsePromise<StoreCartsRes>;
}

declare class CollectionsResource extends BaseResource {
    /**
     * @description Retrieves a single collection
     * @param {string} id id of the collection
     * @param customHeaders
     * @return {ResponsePromise<StoreCollectionsRes>}
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreCollectionsRes>;
    /**
     * @description Retrieves a list of collections
     * @param {string} query is optional. Can contain a limit and offset for the returned list
     * @param customHeaders
     * @return {ResponsePromise<StoreCollectionsListRes>}
     */
    list(query?: StoreGetCollectionsParams, customHeaders?: Record<string, any>): ResponsePromise<StoreCollectionsListRes>;
}

declare class PaymentMethodsResource extends BaseResource {
    /**
     * Lists customer payment methods
     * @param {string} id id of cart
     * @param customHeaders
     * @return {StoreCustomersListPaymentMethodsRes}
     */
    list(customHeaders?: Record<string, any>): ResponsePromise<StoreCustomersListPaymentMethodsRes>;
}

declare class CustomerResource extends BaseResource {
    paymentMethods: PaymentMethodsResource;
    addresses: AddressesResource;
    /**
     * Creates a customer
     * @param {StorePostCustomersReq} payload information of customer
     * @param customHeaders
     * @return { ResponsePromise<StoreCustomersRes>}
     */
    create(payload: StorePostCustomersReq, customHeaders?: Record<string, any>): ResponsePromise<StoreCustomersRes>;
    /**
     * Retrieves the customer that is currently logged
     * @param customHeaders
     * @return {ResponsePromise<StoreCustomersRes>}
     */
    retrieve(customHeaders?: Record<string, any>): ResponsePromise<StoreCustomersRes>;
    /**
     * Updates a customer
     * @param {StorePostCustomersCustomerReq} payload information to update customer with
     * @param customHeaders
     * @return {ResponsePromise<StoreCustomersRes>}
     */
    update(payload: StorePostCustomersCustomerReq, customHeaders?: Record<string, any>): ResponsePromise<StoreCustomersRes>;
    /**
     * Retrieve customer orders
     * @param {StoreGetCustomersCustomerOrdersParams} params optional params to retrieve orders
     * @param customHeaders
     * @return {ResponsePromise<StoreCustomersListOrdersRes>}
     */
    listOrders(params?: StoreGetCustomersCustomerOrdersParams, customHeaders?: Record<string, any>): ResponsePromise<StoreCustomersListOrdersRes>;
    /**
     * Resets customer password
     * @param {StorePostCustomersCustomerPasswordTokenReq} payload info used to reset customer password
     * @param customHeaders
     * @return {ResponsePromise<StoreCustomersRes>}
     */
    resetPassword(payload: StorePostCustomersResetPasswordReq, customHeaders?: Record<string, any>): ResponsePromise<StoreCustomersRes>;
    /**
     * Generates a reset password token, which can be used to reset the password.
     * The token is not returned but should be sent out to the customer in an email.
     * @param {StorePostCustomersCustomerPasswordTokenReq} payload info used to generate token
     * @param customHeaders
     * @return {ResponsePromise}
     */
    generatePasswordToken(payload: StorePostCustomersCustomerPasswordTokenReq, customHeaders?: Record<string, any>): ResponsePromise;
}

declare class GiftCardsResource extends BaseResource {
    /**
     * @description Retrieves a single GiftCard
     * @param {string} code code of the gift card
     * @param customHeaders
     * @return {ResponsePromise<StoreGiftCardsRes>}
     */
    retrieve(code: string, customHeaders?: Record<string, any>): ResponsePromise<StoreGiftCardsRes>;
}

declare class OrderEditsResource extends BaseResource {
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreOrderEditsRes>;
    decline(id: string, payload: StorePostOrderEditsOrderEditDecline, customHeaders?: Record<string, any>): Promise<any>;
    complete(id: string, customHeaders?: Record<string, any>): Promise<any>;
}

declare class OrdersResource extends BaseResource {
    /**
     * @description Retrieves an order
     * @param {string} id is required
     * @param customHeaders
     * @return {ResponsePromise<StoreOrdersRes>}
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreOrdersRes>;
    /**
     * @description Retrieves an order by cart id
     * @param {string} cart_id is required
     * @param customHeaders
     * @return {ResponsePromise<StoreOrdersRes>}
     */
    retrieveByCartId(cart_id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreOrdersRes>;
    /**
     * @description Look up an order using order details
     * @param {StoreGetOrdersParams} payload details used to look up the order
     * @param customHeaders
     * @return {ResponsePromise<StoreOrdersRes>}
     */
    lookupOrder(payload: StoreGetOrdersParams, customHeaders?: Record<string, any>): ResponsePromise<StoreOrdersRes>;
    /**
     * @description Request access to a list of orders
     * @param {string[]} payload display ids of orders to request
     * @param customHeaders
     * @return {ResponsePromise}
     */
    requestCustomerOrders(payload: StorePostCustomersCustomerOrderClaimReq, customHeaders?: Record<string, any>): ResponsePromise;
    /**
     * @description Grant access to a list of orders
     * @param {string} payload signed token to grant access
     * @param customHeaders
     * @return {ResponsePromise}
     */
    confirmRequest(payload: StorePostCustomersCustomerAcceptClaimReq, customHeaders?: Record<string, any>): ResponsePromise;
}

declare class PaymentCollectionsResource extends BaseResource {
    retrieve(id: string, query?: StoreGetPaymentCollectionsParams, customHeaders?: Record<string, any>): ResponsePromise<StorePaymentCollectionsRes>;
    authorizePaymentSession(id: string, session_id: string, customHeaders?: Record<string, any>): ResponsePromise<StorePaymentCollectionsRes>;
    authorizePaymentSessionsBatch(id: string, payload: StorePostPaymentCollectionsBatchSessionsAuthorizeReq, customHeaders?: Record<string, any>): ResponsePromise<StorePaymentCollectionsRes>;
    managePaymentSessionsBatch(id: string, payload: StorePostPaymentCollectionsBatchSessionsReq, customHeaders?: Record<string, any>): ResponsePromise<StorePaymentCollectionsRes>;
    managePaymentSession(id: string, payload: StorePaymentCollectionSessionsReq, customHeaders?: Record<string, any>): ResponsePromise<StorePaymentCollectionsRes>;
    refreshPaymentSession(id: string, session_id: string, customHeaders?: Record<string, any>): ResponsePromise<StorePaymentCollectionsSessionRes>;
}

declare class ProductCategoriesResource extends BaseResource {
    /**
     * @description Retrieves a single product category
     * @param {string} id - id of the product category
     * @param {string} query is optional. Can contain a fields or relations for the returned list
     * @param customHeaders
     * @return {ResponsePromise<StoreGetProductCategoriesCategoryRes>}
     */
    retrieve(id: string, query?: StoreGetProductCategoriesCategoryParams, customHeaders?: Record<string, any>): ResponsePromise<StoreGetProductCategoriesCategoryRes>;
    /**
     * @description Retrieves a list of product categories
     * @param {string} query is optional. Can contain a limit and offset for the returned list
     * @param customHeaders
     * @return {ResponsePromise<StoreGetProductCategoriesRes>}
     */
    list(query?: StoreGetProductCategoriesParams, customHeaders?: Record<string, any>): ResponsePromise<StoreGetProductCategoriesRes>;
}

declare class ProductTagsResource extends BaseResource {
    /**
     * @description Retrieves a list of product tags
     * @param {StoreGetProductTagsParams} query is optional. Can contain a limit and offset for the returned list
     * @param customHeaders
     * @return {ResponsePromise<StoreProductTagsListRes>}
     */
    list(query?: StoreGetProductTagsParams, customHeaders?: Record<string, any>): ResponsePromise<StoreProductTagsListRes>;
}

declare class ProductTypesResource extends BaseResource {
    /**
     * @description Retrieves a list of product types
     * @param {StoreGetProductTypesParams} query is optional. Can contain a limit and offset for the returned list
     * @param customHeaders
     * @return {ResponsePromise<StoreProductTypesListRes>}
     */
    list(query?: StoreGetProductTypesParams, customHeaders?: Record<string, any>): ResponsePromise<StoreProductTypesListRes>;
}

declare class ProductVariantsResource extends BaseResource {
    /**
     * @description Retrieves a single product variant
     * @param {string} id is required
     * @param customHeaders
     * @return {ResponsePromise<StoreVariantsRes>}
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreVariantsRes>;
    /**
     * @description Retrieves a list of of Product Variants
     * @param {StoreGetVariantsParams} query
     * @param customHeaders
     * @return {ResponsePromise<StoreVariantsListRes>}
     */
    list(query?: StoreGetVariantsParams, customHeaders?: Record<string, any>): ResponsePromise<StoreVariantsListRes>;
}

declare class ProductsResource extends BaseResource {
    variants: ProductVariantsResource;
    /**
     * @description Retrieves a single Product
     * @param {string} id is required
     * @param customHeaders
     * @return {ResponsePromise<StoreProductsRes>}
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreProductsRes>;
    /**
     * @description Searches for products
     * @param {StorePostSearchReq} searchOptions is required
     * @param customHeaders
     * @return {ResponsePromise<StorePostSearchRes>}
     */
    search(searchOptions: StorePostSearchReq, customHeaders?: Record<string, any>): ResponsePromise<StorePostSearchRes>;
    /**
     * @description Retrieves a list of products
     * @param {StoreGetProductsParams} query is optional. Can contain a limit and offset for the returned list
     * @param customHeaders
     * @return {ResponsePromise<StoreProductsListRes>}
     */
    list(query?: StoreGetProductsParams, customHeaders?: Record<string, any>): ResponsePromise<StoreProductsListRes>;
}

declare class RegionsResource extends BaseResource {
    /**
     * @description Retrieves a list of regions
     * @param customHeaders
     * @return {ResponsePromise<StoreRegionsListRes>}
     */
    list(customHeaders?: Record<string, any>): ResponsePromise<StoreRegionsListRes>;
    /**
     * @description Retrieves a region
     * @param {string} id is required
     * @param customHeaders
     * @return {ResponsePromise<StoreRegionsRes>}
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreRegionsRes>;
}

declare class ReturnReasonsResource extends BaseResource {
    /**
     * @description Retrieves a single Return Reason
     * @param {string} id is required
     * @param customHeaders
     * @return {ResponsePromise<StoreReturnReasonsRes>}
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreReturnReasonsRes>;
    /**
     * Lists return reasons defined in Medusa Admin
     * @param customHeaders
     * @return {ResponsePromise<StoreReturnReasonsListRes>}
     */
    list(customHeaders?: Record<string, any>): ResponsePromise<StoreReturnReasonsListRes>;
}

declare class ReturnsResource extends BaseResource {
    /**
     * Creates a return request
     * @param {StorePostReturnsReq} payload details needed to create a return
     * @param customHeaders
     * @return {ResponsePromise<StoreReturnsRes>}
     */
    create(payload: StorePostReturnsReq, customHeaders?: Record<string, any>): ResponsePromise<StoreReturnsRes>;
}

declare class ShippingOptionsResource extends BaseResource {
    /**
     * @description Lists shipping options available for a cart
     * @param {string} cart_id
     * @param customHeaders
     * @return {ResponsePromise<StoreShippingOptionsListRes>}
     */
    listCartOptions(cart_id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreShippingOptionsListRes>;
    /**
     * @description Lists shipping options available
     * @param {StoreGetShippingOptionsParams} query
     * @param customHeaders
     * @return {ResponsePromise<StoreShippingOptionsListRes>}
     */
    list(query?: StoreGetShippingOptionsParams, customHeaders?: Record<string, any>): ResponsePromise<StoreShippingOptionsListRes>;
}

declare class SwapsResource extends BaseResource {
    /**
     * @description Creates a swap from a cart
     * @param {StorePostSwapsReq} payload
     * @param customHeaders
     * @return {ResponsePromise<StoreSwapsRes>}
     */
    create(payload: StorePostSwapsReq, customHeaders?: Record<string, any>): ResponsePromise<StoreSwapsRes>;
    /**
     * @description Retrieves a swap by cart id
     * @param {string} cart_id id of cart
     * @param customHeaders
     * @return {ResponsePromise<StoreSwapsRes>}
     */
    retrieveByCartId(cart_id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreSwapsRes>;
}

declare class AdminAuthResource extends BaseResource {
    /**
     * @description Retrieves an authenticated session
     * Usually used to check if authenticated session is alive.
     * @param customHeaders
     * @return {ResponsePromise<AdminAuthRes>}
     */
    getSession(customHeaders?: Record<string, any>): ResponsePromise<AdminAuthRes>;
    /**
     * @description destroys an authenticated session
     * @param customHeaders
     * @return {ResponsePromise<void>}
     */
    deleteSession(customHeaders?: Record<string, any>): ResponsePromise<void>;
    /**
     * @description Creates an authenticated session
     * @param {AdminPostAuthReq} payload
     * @param customHeaders
     * @return {ResponsePromise<AdminAuthRes>}
     */
    createSession(payload: AdminPostAuthReq, customHeaders?: Record<string, any>): ResponsePromise<AdminAuthRes>;
    /**
     * @description Retrieves a new JWT access token
     * @param {AdminPostAuthReq} payload
     * @param customHeaders
     * @return {ResponsePromise<AdminBearerAuthRes>}
     */
    getToken(payload: AdminPostAuthReq, customHeaders?: Record<string, any>): ResponsePromise<AdminBearerAuthRes>;
}

declare class AdminBatchJobsResource extends BaseResource {
    create(payload: AdminPostBatchesReq, customHeaders?: Record<string, any>): ResponsePromise<AdminBatchJobRes>;
    list(query?: AdminGetBatchParams, customHeaders?: Record<string, any>): ResponsePromise<AdminBatchJobListRes>;
    cancel(batchJobId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminBatchJobRes>;
    confirm(batchJobId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminBatchJobRes>;
    retrieve(batchJobId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminBatchJobRes>;
}

declare class AdminCollectionsResource extends BaseResource {
    /**
     * @description Creates a collection.
     * @param payload
     * @param customHeaders
     * @returns Created collection.
     */
    create(payload: AdminPostCollectionsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminCollectionsRes>;
    /**
     * @description Updates a collection
     * @param id id of the collection to update.
     * @param payload update to apply to collection.
     * @param customHeaders
     * @returns the updated collection.
     */
    update(id: string, payload: AdminPostCollectionsCollectionReq, customHeaders?: Record<string, any>): ResponsePromise<AdminCollectionsRes>;
    /**
     * @description deletes a collection
     * @param id id of collection to delete.
     * @param customHeaders
     * @returns Deleted response
     */
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminCollectionsDeleteRes>;
    /**
     * @description get a collection
     * @param id id of the collection to retrieve.
     * @param customHeaders
     * @returns the collection with the given id
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminCollectionsRes>;
    /**
     * @description Lists collections matching a query
     * @param query Query for searching collections
     * @param customHeaders
     * @returns a list of collections matching the query.
     */
    list(query?: AdminGetCollectionsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminCollectionsListRes>;
    /**
     * @description Updates products associated with a Product Collection
     * @param id the id of the Collection
     * @param payload - an object which contains an array of Product IDs to add to the Product Collection
     * @param customHeaders
     */
    addProducts(id: string, payload: AdminPostProductsToCollectionReq, customHeaders?: Record<string, any>): ResponsePromise<AdminCollectionsRes>;
    /**
     * @description Removes products associated with a Product Collection
     * @param id - the id of the Collection
     * @param payload - an object which contains an array of Product IDs to add to the Product Collection
     * @param customHeaders
     */
    removeProducts(id: string, payload: AdminDeleteProductsFromCollectionReq, customHeaders?: Record<string, any>): ResponsePromise<AdminDeleteProductsFromCollectionRes>;
}

declare class AdminCurrenciesResource extends BaseResource {
    /**
     * @description Lists currencies.
     * @experimental This feature is under development and may change in the future.
     * To use this feature please enable featureflag `tax_inclusive_pricing` in your medusa backend project.
     * @param payload optional
     * @param customHeaders
     * @returns the list of currencies as well as the pagination properties.
     */
    list(query?: AdminGetCurrenciesParams, customHeaders?: Record<string, any>): ResponsePromise<AdminCurrenciesListRes>;
    /**
     * @description Updates a currency
     * @experimental This feature is under development and may change in the future.
     * To use this feature please enable featureflag `tax_inclusive_pricing` in your medusa backend project.
     * @param code code of the currency to update.
     * @param payload update to apply to currency.
     * @param customHeaders
     * @returns the updated currency.
     */
    update(code: string, payload: AdminPostCurrenciesCurrencyReq, customHeaders?: Record<string, any>): ResponsePromise<AdminCurrenciesRes>;
}

declare class AdminCustomResource extends BaseResource {
    get<TQuery extends Record<string, any>, TResponse = any>(path: string, query?: TQuery, options?: RequestOptions, customHeaders?: Record<string, any>): ResponsePromise<TResponse>;
    post<TPayload extends Record<string, any>, TResponse = any>(path: string, payload?: TPayload, options?: RequestOptions, customHeaders?: Record<string, any>): ResponsePromise<TResponse>;
    delete<TResponse = any>(path: string, options?: RequestOptions, customHeaders?: Record<string, any>): ResponsePromise<TResponse>;
}

declare class AdminCustomerGroupsResource extends BaseResource {
    /**
     * Create a customer group.
     *
     * @param payload - customer group info
     * @param customHeaders
     */
    create(payload: AdminPostCustomerGroupsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminCustomerGroupsRes>;
    /**
     * Retrieves a customer group.
     *
     * @param id - customer group id
     * @param query - pass query options such as "expand", "fields" etc.
     * @param customHeaders
     */
    retrieve(id: string, query?: AdminGetCustomerGroupsGroupParams, customHeaders?: Record<string, any>): ResponsePromise<AdminCustomerGroupsRes>;
    /**
     * Updates a customer group
     *
     * @param id - customer group id
     * @param payload - data to update customer group with
     * @param customHeaders
     */
    update(id: string, payload: AdminPostCustomerGroupsGroupReq, customHeaders?: Record<string, any>): ResponsePromise<AdminCustomerGroupsRes>;
    /**
     * Deletes a customer group.
     *
     * @param id - id of the customer group
     * @param customHeaders
     */
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminCustomerGroupsDeleteRes>;
    /**
     * Lists customer groups.
     *
     * @param query optional
     * @param customHeaders
     */
    list(query?: AdminGetCustomerGroupsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminCustomerGroupsListRes>;
    /**
     * Add multiple customers to a customer group.
     *
     * @param id - customer group id
     * @param payload - an object which contains an array of customer ids which will be added to the group
     * @param customHeaders
     */
    addCustomers(id: string, payload: AdminPostCustomerGroupsGroupCustomersBatchReq, customHeaders?: Record<string, any>): ResponsePromise<AdminCustomerGroupsRes>;
    /**
     * Remove multiple customers from a customer group.
     *
     * @param id - customer group id
     * @param payload - an object which contains an array of customers ids which will be removed from the group
     * @param customHeaders
     */
    removeCustomers(id: string, payload: AdminDeleteCustomerGroupsGroupCustomerBatchReq, customHeaders?: Record<string, any>): ResponsePromise<AdminCustomerGroupsRes>;
    /**
     * List and count customers that belong to provided customer groups.
     *
     * @param id - customer group id
     * @param query - params for filtering customers
     * @param customHeaders
     */
    listCustomers(id: string, query?: AdminGetCustomersParams, customHeaders?: Record<string, any>): ResponsePromise<AdminCustomersListRes>;
}

declare class AdminCustomersResource extends BaseResource {
    /**
     * Creates a customer
     * @param payload information of customer
     * @param customHeaders
     */
    create(payload: AdminPostCustomersReq, customHeaders?: Record<string, any>): ResponsePromise<AdminCustomersRes>;
    /**
     * Updates a customer
     * @param id customer id
     * @param payload data to update customer with
     * @param customHeaders
     */
    update(id: string, payload: AdminPostCustomersCustomerReq, customHeaders?: Record<string, any>): ResponsePromise<AdminCustomersRes>;
    /**
     * Retrieves a customer
     * @param id customer id
     * @param customHeaders
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminCustomersRes>;
    /**
     * Lists customers
     * @param query optional
     * @param customHeaders
     */
    list(query?: AdminGetCustomersParams, customHeaders?: Record<string, any>): ResponsePromise<AdminCustomersListRes>;
}

declare class AdminDiscountsResource extends BaseResource {
    /**
     * @description Adds region to discount
     */
    addRegion(id: string, regionId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsRes>;
    /**
     * @description Creates discounts
     */
    create(payload: AdminPostDiscountsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsRes>;
    /**
     * @description Updates discount
     */
    update(id: string, payload: AdminPostDiscountsDiscountReq, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsRes>;
    /**
     * @description Creates a dynamic discount code
     */
    createDynamicCode(id: string, payload: AdminPostDiscountsDiscountDynamicCodesReq, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsRes>;
    /**
     * @description Deletes a discount
     */
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsDeleteRes>;
    /**
     * @description Deletes a dynamic discount
     */
    deleteDynamicCode(id: string, code: string, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsRes>;
    /**
     * @description Retrieves a discount
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsRes>;
    /**
     * @description Retrieves a discount by code
     */
    retrieveByCode(code: string, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsRes>;
    /**
     * @description Lists discounts
     */
    list(query?: AdminGetDiscountsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsListRes>;
    /**
     * @description Removes a region from a discount
     */
    removeRegion(id: string, regionId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsRes>;
    /**
     * @description creates a discount condition
     */
    createCondition(discountId: string, payload: AdminPostDiscountsDiscountConditions, query?: AdminPostDiscountsDiscountConditionsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsRes>;
    /**
     * @description Updates a discount condition
     */
    updateCondition(discountId: string, conditionId: string, payload: AdminPostDiscountsDiscountConditionsCondition, query?: AdminPostDiscountsDiscountConditionsConditionParams, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsRes>;
    /**
     * @description Removes a condition from a discount
     */
    deleteCondition(discountId: string, conditionId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsDeleteRes>;
    /**
     * @description Gets a condition from a discount
     */
    getCondition(discountId: string, conditionId: string, query?: AdminGetDiscountsDiscountConditionsConditionParams, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountConditionsRes>;
    /**
     * @description Add a batch of items to a discount condition
     */
    addConditionResourceBatch(discountId: string, conditionId: string, payload: AdminPostDiscountsDiscountConditionsConditionBatchReq, query?: AdminPostDiscountsDiscountConditionsConditionBatchParams, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsRes>;
    /**
     * @description Delete a batch of items from a discount condition
     */
    deleteConditionResourceBatch(discountId: string, conditionId: string, payload: AdminDeleteDiscountsDiscountConditionsConditionBatchReq, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsRes>;
}

declare class AdminDraftOrdersResource extends BaseResource {
    /**
     * @description Creates a draft order
     */
    create(payload: AdminPostDraftOrdersReq, customHeaders?: Record<string, any>): ResponsePromise<AdminDraftOrdersRes>;
    /**
     * @description Add line item to draft order
     */
    addLineItem(id: string, payload: AdminPostDraftOrdersDraftOrderLineItemsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminDraftOrdersRes>;
    /**
     * @description Delete draft order
     */
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminDraftOrdersDeleteRes>;
    /**
     * @description Remove line item
     */
    removeLineItem(id: string, itemId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminDraftOrdersRes>;
    /**
     * @description Retrieves a draft order
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminDraftOrdersRes>;
    /**
     * @description Lists draft orders
     */
    list(query?: AdminGetDraftOrdersParams, customHeaders?: Record<string, any>): ResponsePromise<AdminDraftOrdersListRes>;
    /**
     * @description Mark a draft order as paid
     */
    markPaid(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminPostDraftOrdersDraftOrderRegisterPaymentRes>;
    /**
     * @description Update draft order
     */
    update(id: string, payload: AdminPostDraftOrdersDraftOrderReq, customHeaders?: Record<string, any>): ResponsePromise<AdminDraftOrdersRes>;
    /**
     * @description Update draft order line item
     */
    updateLineItem(id: string, itemId: string, payload: AdminPostDraftOrdersDraftOrderLineItemsItemReq, customHeaders?: Record<string, any>): ResponsePromise<AdminDraftOrdersRes>;
}

declare class AdminGiftCardsResource extends BaseResource {
    /**
     * @description Creates a gift card
     */
    create(payload: AdminPostGiftCardsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminGiftCardsRes>;
    /**
     * @description Updates a gift card
     */
    update(id: string, payload: AdminPostGiftCardsGiftCardReq, customHeaders?: Record<string, any>): ResponsePromise<AdminGiftCardsRes>;
    /**
     * @description Deletes a gift card
     */
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminGiftCardsDeleteRes>;
    /**
     * @description Deletes a gift card
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminGiftCardsRes>;
    /**
     * @description Lists gift cards
     */
    list(query?: AdminGetGiftCardsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminGiftCardsListRes>;
}

declare class AdminInventoryItemsResource extends BaseResource {
    /**
     * Retrieve an Inventory Item
     * @experimental This feature is under development and may change in the future.
     * To use this feature please install @medusajs/inventory
     * @description gets an Inventory Item
     * @returns an Inventory Item
     */
    retrieve(inventoryItemId: string, query?: AdminGetInventoryItemsItemParams, customHeaders?: Record<string, any>): ResponsePromise<AdminInventoryItemsRes>;
    /**
     * Update an Inventory Item
     * @experimental This feature is under development and may change in the future.
     * To use this feature please install @medusajs/inventory
     * @description updates an Inventory Item
     * @returns the updated Inventory Item
     */
    update(inventoryItemId: string, payload: AdminPostInventoryItemsInventoryItemReq, query?: AdminGetInventoryItemsItemParams, customHeaders?: Record<string, any>): ResponsePromise<AdminInventoryItemsRes>;
    /**
     * Delete an Inventory Item
     * @experimental This feature is under development and may change in the future.
     * To use this feature please install @medusajs/inventory
     * @description deletes an Inventory Item
     * @returns the deleted Inventory Item
     */
    delete(inventoryItemId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminInventoryItemsDeleteRes>;
    /**
     * Create an Inventory Item
     * @experimental This feature is under development and may change in the future.
     * To use this feature please install @medusajs/inventory
     * @description creates an Inventory Item
     * @returns the created Inventory Item
     */
    create(payload: AdminPostInventoryItemsReq, query?: AdminPostInventoryItemsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminInventoryItemsRes>;
    /**
     * Retrieve a list of Inventory Items
     * @experimental This feature is under development and may change in the future.
     * To use this feature please install @medusajs/inventory
     * @description Retrieve a list of Inventory Items
     * @returns the list of Inventory Items as well as the pagination properties
     */
    list(query?: AdminGetInventoryItemsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminInventoryItemsListWithVariantsAndLocationLevelsRes>;
    /**
     * Update an Inventory Item's stock level at a Stock Location
     * @experimental This feature is under development and may change in the future.
     * To use this feature please install @medusajs/inventory
     * @description updates an Inventory Item
     * @returns the updated Inventory Item
     */
    updateLocationLevel(inventoryItemId: string, locationId: string, payload: AdminPostInventoryItemsItemLocationLevelsLevelReq, query?: AdminGetInventoryItemsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminInventoryItemsRes>;
    /**
     * Create stock for an Inventory Item at a Stock Location
     * @experimental This feature is under development and may change in the future.
     * To use this feature please install @medusajs/inventory
     * @description creates stock levle for an Inventory Item
     * @returns the Inventory Item
     */
    createLocationLevel(inventoryItemId: string, payload: AdminPostInventoryItemsItemLocationLevelsReq, query?: AdminGetInventoryItemsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminInventoryItemsRes>;
    /**
     * Removes an Inventory Item from a Stock Location. This erases trace of any quantity currently at the location.
     * @experimental This feature is under development and may change in the future.
     * To use this feature please install @medusajs/inventory
     * @description deletes a location level of an Inventory Item
     * @returns the Inventory Item
     */
    deleteLocationLevel(inventoryItemId: string, locationId: string, query?: AdminGetInventoryItemsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminInventoryItemsRes>;
    /**
     * Retrieve a list of Inventory Levels related to an Inventory Item across Stock Locations
     * @experimental This feature is under development and may change in the future.
     * To use this feature please install @medusajs/inventory
     * @description Retrieve a list of location levels related to an Inventory Item
     * @returns the list of inventory levels related to an Inventory Item as well as the pagination properties
     */
    listLocationLevels(inventoryItemId: string, query?: AdminGetInventoryItemsItemLocationLevelsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminInventoryItemsLocationLevelsRes>;
}

declare class AdminInvitesResource extends BaseResource {
    accept(payload: AdminPostInvitesInviteAcceptReq, customHeaders?: Record<string, any>): ResponsePromise;
    create(payload: AdminPostInvitesPayload, customHeaders?: Record<string, any>): ResponsePromise;
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminInviteDeleteRes>;
    list(customHeaders?: Record<string, any>): ResponsePromise<AdminListInvitesRes>;
    resend(id: string, customHeaders?: Record<string, any>): ResponsePromise;
}

declare class AdminNotesResource extends BaseResource {
    create(payload: AdminPostNotesReq, customHeaders?: Record<string, any>): ResponsePromise<AdminNotesRes>;
    update(id: string, payload: AdminPostNotesNoteReq, customHeaders?: Record<string, any>): ResponsePromise<AdminNotesRes>;
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminNotesDeleteRes>;
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminNotesRes>;
    list(query?: AdminGetNotesParams, customHeaders?: Record<string, any>): ResponsePromise<AdminNotesListRes>;
}

declare class AdminNotificationsResource extends BaseResource {
    list(query?: AdminGetNotificationsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminNotificationsListRes>;
    resend(id: string, payload: AdminPostNotificationsNotificationResendReq, customHeaders?: Record<string, any>): ResponsePromise<AdminNotificationsRes>;
}

declare class AdminOrderEditsResource extends BaseResource {
    retrieve(id: string, query?: GetOrderEditsOrderEditParams, customHeaders?: Record<string, any>): ResponsePromise<AdminOrderEditsRes>;
    list(query?: GetOrderEditsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminOrderEditsListRes>;
    create(payload: AdminPostOrderEditsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrderEditsRes>;
    update(id: string, payload: AdminPostOrderEditsOrderEditReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrderEditsRes>;
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrderEditDeleteRes>;
    addLineItem(id: string, payload: AdminPostOrderEditsEditLineItemsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrderEditsRes>;
    deleteItemChange(orderEditId: string, itemChangeId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrderEditItemChangeDeleteRes>;
    requestConfirmation(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrderEditsRes>;
    cancel(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrderEditsRes>;
    confirm(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrderEditsRes>;
    updateLineItem(orderEditId: string, itemId: string, payload: AdminPostOrderEditsEditLineItemsLineItemReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrderEditsRes>;
    removeLineItem(orderEditId: string, itemId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrderEditsRes>;
}

declare class AdminOrdersResource extends BaseResource {
    update(id: string, payload: AdminPostOrdersOrderReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    retrieve(id: string, query?: FindParams, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    list(query?: AdminGetOrdersParams, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersListRes>;
    complete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    capturePayment(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    refundPayment(id: string, payload: AdminPostOrdersOrderRefundsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    createFulfillment(id: string, payload: AdminPostOrdersOrderFulfillmentsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    cancelFulfillment(id: string, fulfillmentId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    cancelSwapFulfillment(id: string, swapId: string, fulfillmentId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    cancelClaimFulfillment(id: string, claimId: string, fulfillmentId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    createShipment(id: string, payload: AdminPostOrdersOrderShipmentReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    requestReturn(id: string, payload: AdminPostOrdersOrderReturnsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    cancel(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    addShippingMethod(id: string, payload: AdminPostOrdersOrderShippingMethodsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    archive(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    createSwap(id: string, payload: AdminPostOrdersOrderSwapsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    cancelSwap(id: string, swapId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    fulfillSwap(id: string, swapId: string, payload: AdminPostOrdersOrderSwapsSwapFulfillmentsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    createSwapShipment(id: string, swapId: string, payload: AdminPostOrdersOrderSwapsSwapShipmentsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    processSwapPayment(id: string, swapId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    createClaim(id: string, payload: AdminPostOrdersOrderClaimsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    cancelClaim(id: string, claimId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    updateClaim(id: string, claimId: string, payload: AdminPostOrdersOrderClaimsClaimReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    fulfillClaim(id: string, claimId: string, payload: AdminPostOrdersOrderClaimsClaimFulfillmentsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    createClaimShipment(id: string, claimId: string, payload: AdminPostOrdersOrderClaimsClaimShipmentsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
}

declare class AdminPaymentCollectionsResource extends BaseResource {
    retrieve(id: string, query?: AdminGetPaymentCollectionsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminPaymentCollectionsRes>;
    update(id: string, payload: AdminUpdatePaymentCollectionsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminPaymentCollectionsRes>;
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminPaymentCollectionDeleteRes>;
    markAsAuthorized(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminPaymentCollectionsRes>;
}

declare class AdminPaymentsResource extends BaseResource {
    retrieve(id: string, query?: GetPaymentsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminPaymentRes>;
    capturePayment(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminPaymentRes>;
    refundPayment(id: string, payload: AdminPostPaymentRefundsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminRefundRes>;
}

declare class AdminPriceListResource extends BaseResource {
    create(payload: AdminPostPriceListsPriceListReq, customHeaders?: Record<string, any>): ResponsePromise<AdminPriceListRes>;
    update(id: string, payload: AdminPostPriceListsPriceListPriceListReq, customHeaders?: Record<string, any>): ResponsePromise<AdminPriceListRes>;
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminPriceListDeleteRes>;
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminPriceListRes>;
    list(query?: AdminGetPriceListPaginationParams, customHeaders?: Record<string, any>): ResponsePromise<AdminPriceListsListRes>;
    listProducts(id: string, query?: AdminGetPriceListsPriceListProductsParams, customHeaders?: Record<string, any>): ResponsePromise<any>;
    addPrices(id: string, payload: AdminPostPriceListPricesPricesReq, customHeaders?: Record<string, any>): ResponsePromise<AdminPriceListRes>;
    deletePrices(id: string, payload: AdminDeletePriceListPricesPricesReq, customHeaders?: Record<string, any>): ResponsePromise<AdminPriceListDeleteBatchRes>;
    deleteProductPrices(priceListId: string, productId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminPriceListDeleteBatchRes>;
    deleteVariantPrices(priceListId: string, variantId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminPriceListDeleteBatchRes>;
    deleteProductsPrices(priceListId: string, payload: AdminDeletePriceListsPriceListProductsPricesBatchReq, customHeaders?: Record<string, any>): ResponsePromise<AdminPriceListDeleteBatchRes>;
}

declare class AdminProductCategoriesResource extends BaseResource {
    /** retrieve a product category
     * @experimental This feature is under development and may change in the future.
     * To use this feature please enable featureflag `product_categories` in your medusa backend project.
     * @description gets a product category
     * @returns a medusa product category
     */
    retrieve(productCategoryId: string, query?: AdminGetProductCategoryParams, customHeaders?: Record<string, any>): ResponsePromise<AdminProductCategoriesCategoryRes>;
    create(payload: AdminPostProductCategoriesReq, customHeaders?: Record<string, any>): ResponsePromise<AdminProductCategoriesCategoryRes>;
    /** update a product category
     * @experimental This feature is under development and may change in the future.
     * To use this feature please enable featureflag `product_categories` in your medusa backend project.
     * @description updates a product category
     * @returns the updated medusa product category
     */
    update(productCategoryId: string, payload: AdminPostProductCategoriesCategoryReq, customHeaders?: Record<string, any>): ResponsePromise<AdminProductCategoriesCategoryRes>;
    /**
     * Retrieve a list of product categories
     * @experimental This feature is under development and may change in the future.
     * To use this feature please enable featureflag `product_categories` in your medusa backend project.
     * @description Retrieve a list of product categories
     * @returns the list of product category as well as the pagination properties
     */
    list(query?: AdminGetProductCategoriesParams, customHeaders?: Record<string, any>): ResponsePromise<AdminProductCategoriesListRes>;
    /**
     * Delete a product category
     * @experimental This feature is under development and may change in the future.
     * To use this feature please enable featureflag `product_categories` in your medusa backend project.
     * @description gets a product category
     * @returns an deletion result
     */
    delete(productCategoryId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminProductCategoriesCategoryDeleteRes>;
    /**
     * Remove products from a product category
     * @experimental This feature is under development and may change in the future.
     * To use this feature please enable featureflag `product_categories` in your medusa backend project.
     * @description Remove products from a product category
     * @returns a medusa product category
     */
    removeProducts(productCategoryId: string, payload: AdminDeleteProductCategoriesCategoryProductsBatchReq, customHeaders?: Record<string, any>): ResponsePromise<AdminProductCategoriesCategoryRes>;
    /**
     * Add products to a product category
     * @experimental This feature is under development and may change in the future.
     * To use this feature please enable featureflag `product_categories` in your medusa backend project.
     * @description Add products to a product category
     * @returns a medusa product category
     */
    addProducts(productCategoryId: string, payload: AdminPostProductCategoriesCategoryProductsBatchReq, customHeaders?: Record<string, any>): ResponsePromise<AdminProductCategoriesCategoryRes>;
}

declare class AdminProductTagsResource extends BaseResource {
    list(query?: AdminGetProductTagsParams): ResponsePromise<AdminProductTagsListRes>;
}

declare class AdminProductTypesResource extends BaseResource {
    list(query?: AdminGetProductTypesParams, customHeaders?: Record<string, any>): ResponsePromise<AdminProductTypesListRes>;
}

declare class AdminProductsResource extends BaseResource {
    create(payload: AdminPostProductsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminProductsRes>;
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminProductsRes>;
    update(id: string, payload: AdminPostProductsProductReq, customHeaders?: Record<string, any>): ResponsePromise<AdminProductsRes>;
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminProductsDeleteRes>;
    list(query?: AdminGetProductsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminProductsListRes>;
    /**
     * @deprecated Use {@link AdminProductTypesResource.list} instead.
     */
    listTypes(customHeaders?: Record<string, any>): ResponsePromise<AdminProductsListTypesRes>;
    listTags(customHeaders?: Record<string, any>): ResponsePromise<AdminProductsListTagsRes>;
    setMetadata(id: string, payload: AdminPostProductsProductMetadataReq, customHeaders?: Record<string, any>): ResponsePromise<AdminProductsRes>;
    createVariant(id: string, payload: AdminPostProductsProductVariantsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminProductsRes>;
    updateVariant(id: string, variantId: string, payload: AdminPostProductsProductVariantsVariantReq, customHeaders?: Record<string, any>): ResponsePromise<AdminProductsRes>;
    deleteVariant(id: string, variantId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminProductsDeleteVariantRes>;
    addOption(id: string, payload: AdminPostProductsProductOptionsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminProductsRes>;
    updateOption(id: string, optionId: string, payload: AdminPostProductsProductOptionsOption, customHeaders?: Record<string, any>): ResponsePromise<AdminProductsRes>;
    deleteOption(id: string, optionId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminProductsDeleteOptionRes>;
}

declare class AdminPublishableApiKeyResource extends BaseResource {
    retrieve(id: string, query?: {}, customHeaders?: Record<string, any>): ResponsePromise<AdminPublishableApiKeysRes>;
    list(query?: GetPublishableApiKeysParams, customHeaders?: Record<string, any>): ResponsePromise<AdminPublishableApiKeysListRes>;
    create(payload: AdminPostPublishableApiKeysReq, customHeaders?: Record<string, any>): ResponsePromise<AdminPublishableApiKeysRes>;
    update(id: string, payload: AdminPostPublishableApiKeysPublishableApiKeyReq, customHeaders?: Record<string, any>): Promise<any>;
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminPublishableApiKeyDeleteRes>;
    revoke(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminPublishableApiKeysRes>;
    addSalesChannelsBatch(id: string, payload: AdminPostPublishableApiKeySalesChannelsBatchReq, customHeaders?: Record<string, any>): ResponsePromise<AdminPublishableApiKeysRes>;
    deleteSalesChannelsBatch(id: string, payload: AdminDeletePublishableApiKeySalesChannelsBatchReq, customHeaders?: Record<string, any>): ResponsePromise<AdminPublishableApiKeysRes>;
    listSalesChannels(id: string, query?: GetPublishableApiKeySalesChannelsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminSalesChannelsListRes>;
}

declare class AdminRegionsResource extends BaseResource {
    /**
     * @description creates a region.
     * @param payload
     * @param customHeaders
     * @returns created region.
     */
    create(payload: AdminPostRegionsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminRegionsRes>;
    /**
     * @description updates a region
     * @param id id of the region to update.
     * @param payload update to apply to region.
     * @param customHeaders
     * @returns the updated region.
     */
    update(id: string, payload: AdminPostRegionsRegionReq, customHeaders?: Record<string, any>): ResponsePromise<AdminRegionsRes>;
    /**
     * @description deletes a region
     * @param id id of region to delete.
     * @param customHeaders
     * @returns Deleted response
     */
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminRegionsDeleteRes>;
    /**
     * @description get a region
     * @param id id of the region to retrieve.
     * @param customHeaders
     * @returns the region with the given id
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminRegionsRes>;
    /**
     * @description lists regions matching a query
     * @param query query for searching regions
     * @param customHeaders
     * @returns a list of regions matching the query.
     */
    list(query?: AdminGetRegionsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminRegionsListRes>;
    /**
     * @description adds a country to the list of countries in a region
     * @param id region id
     * @param payload country data
     * @param customHeaders
     * @returns updated region
     */
    addCountry(id: string, payload: AdminPostRegionsRegionCountriesReq, customHeaders?: Record<string, any>): ResponsePromise<AdminRegionsRes>;
    /**
     * @description remove a country from a region's list of coutnries
     * @param id region id
     * @param country_code the 2 character ISO code for the Country.
     * @param customHeaders
     * @returns updated region
     */
    deleteCountry(id: string, country_code: string, customHeaders?: Record<string, any>): ResponsePromise<AdminRegionsRes>;
    /**
     * @description adds a fulfillment provider to a region
     * @param id region id
     * @param payload fulfillment provider data
     * @param customHeaders
     * @returns updated region
     */
    addFulfillmentProvider(id: string, payload: AdminPostRegionsRegionFulfillmentProvidersReq, customHeaders?: Record<string, any>): ResponsePromise<AdminRegionsRes>;
    /**
     * @description remove a fulfillment provider from a region
     * @param id region id
     * @param provider_id the if of the fulfillment provider
     * @param customHeaders
     * @returns updated region
     */
    deleteFulfillmentProvider(id: string, provider_id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminRegionsRes>;
    /**
     * @description retrieves the list of fulfillment options available in a region
     * @param id region id
     * @param customHeaders
     * @returns list of fulfillment options
     */
    retrieveFulfillmentOptions(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminGetRegionsRegionFulfillmentOptionsRes>;
    /**
     * @description adds a payment provider to a region
     * @param id region id
     * @param payload payment provider data
     * @param customHeaders
     * @returns updated region
     */
    addPaymentProvider(id: string, payload: AdminPostRegionsRegionPaymentProvidersReq, customHeaders?: Record<string, any>): ResponsePromise<AdminRegionsRes>;
    /**
     * @description removes a payment provider from a region
     * @param id region id
     * @param provider_id the id of the payment provider
     * @param customHeaders
     * @returns updated region
     */
    deletePaymentProvider(id: string, provider_id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminRegionsRes>;
}

declare class AdminReservationsResource extends BaseResource {
    /**
     * Get a reservation
     * @experimental This feature is under development and may change in the future.
     * To use this feature please install @medusajs/inventory
     * @description gets a reservation
     * @returns The reservation with the provided id
     */
    retrieve(id: string, customHeaders?: Record<string, unknown>): ResponsePromise<AdminReservationsRes>;
    /**
     * List reservations
     * @experimental This feature is under development and may change in the future.
     * To use this feature please install @medusajs/inventory
     * @description Lists reservations
     * @returns A list of reservations matching the provided query
     */
    list(query?: AdminGetReservationsParams, customHeaders?: Record<string, unknown>): ResponsePromise<AdminReservationsListRes>;
    /**
     * create a reservation
     * @description create a reservation
     * @experimental This feature is under development and may change in the future.
     * To use this feature please install @medusajs/inventory
     * @returns the created reservation
     */
    create(payload: AdminPostReservationsReq, customHeaders?: Record<string, unknown>): ResponsePromise<AdminReservationsRes>;
    /**
     * update a reservation
     * @description update a reservation
     * @experimental This feature is under development and may change in the future.
     * To use this feature please install @medusajs/inventory
     * @returns The updated reservation
     */
    update(id: string, payload: AdminPostReservationsReservationReq, customHeaders?: Record<string, unknown>): ResponsePromise<AdminReservationsRes>;
    /**
     * remove a reservation
     * @description remove a reservation
     * @experimental This feature is under development and may change in the future.
     * To use this feature please install @medusajs/inventory
     * @returns reservation removal confirmation
     */
    delete(id: string, customHeaders?: Record<string, unknown>): ResponsePromise<AdminReservationsDeleteRes>;
}

declare class AdminReturnReasonsResource extends BaseResource {
    /**
     * @description Creates a return reason.
     * @param payload
     * @param customHeaders
     * @returns Created return reason.
     */
    create(payload: AdminPostReturnReasonsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminReturnReasonsRes>;
    /**
     * @description Updates a return reason
     * @param id id of the return reason to update.
     * @param payload update to apply to return reason.
     * @param customHeaders
     * @returns the updated return reason.
     */
    update(id: string, payload: AdminPostReturnReasonsReasonReq, customHeaders?: Record<string, any>): ResponsePromise<AdminReturnReasonsRes>;
    /**
     * @description deletes a return reason
     * @param id id of return reason to delete.
     * @param customHeaders
     * @returns Deleted response
     */
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminReturnReasonsDeleteRes>;
    /**
     * @description retrieves a return reason
     * @param id id of the return reason to retrieve.
     * @param customHeaders
     * @returns the return reason with the given id
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminReturnReasonsRes>;
    /**
     * @description Lists return reasons matching a query
     * @returns a list of return reasons matching the query.
     * @param customHeaders
     */
    list(customHeaders?: Record<string, any>): ResponsePromise<AdminReturnReasonsListRes>;
}

declare class AdminReturnsResource extends BaseResource {
    /**
     * @description cancels a return
     * @param id id of return to cancel
     * @param customHeaders
     * @returns the order for which the return was canceled
     */
    cancel(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminReturnsCancelRes>;
    /**
     * @description receive a return
     * @param id id of the return to receive.
     * @param payload items to receive and an optional refund amount
     * @param customHeaders
     * @returns the return
     */
    receive(id: string, payload: AdminPostReturnsReturnReceiveReq, customHeaders?: Record<string, any>): ResponsePromise<AdminReturnsRes>;
    /**
     * @description lists returns matching a query
     * @param query query for searching returns
     * @param customHeaders
     * @returns a list of returns matching the query
     */
    list(query?: AdminGetReturnsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminReturnsListRes>;
}

declare class AdminSalesChannelsResource extends BaseResource {
    /** retrieve a sales channel
     * @experimental This feature is under development and may change in the future.
     * To use this feature please enable featureflag `sales_channels` in your medusa backend project.
     * @description gets a sales channel
     * @returns a medusa sales channel
     */
    retrieve(salesChannelId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminSalesChannelsRes>;
    create(payload: AdminPostSalesChannelsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminSalesChannelsRes>;
    /** update a sales channel
     * @experimental This feature is under development and may change in the future.
     * To use this feature please enable featureflag `sales_channels` in your medusa backend project.
     * @description updates a sales channel
     * @returns the updated medusa sales channel
     */
    update(salesChannelId: string, payload: AdminPostSalesChannelsSalesChannelReq, customHeaders?: Record<string, any>): ResponsePromise<AdminSalesChannelsRes>;
    /**
     * Retrieve a list of sales channels
     * @experimental This feature is under development and may change in the future.
     * To use this feature please enable featureflag `sales_channels` in your medusa backend project.
     * @description Retrieve a list of sales channels
     * @returns the list of sales channel as well as the pagination properties
     */
    list(query?: AdminGetSalesChannelsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminSalesChannelsListRes>;
    /**
     * Delete a sales channel
     * @experimental This feature is under development and may change in the future.
     * To use this feature please enable featureflag `sales_channels` in your medusa backend project.
     * @description gets a sales channel
     * @returns an deletion result
     */
    delete(salesChannelId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminSalesChannelsDeleteRes>;
    /**
     * Remove products from a sales channel
     * @experimental This feature is under development and may change in the future.
     * To use this feature please enable featureflag `sales_channels` in your medusa backend project.
     * @description Remove products from a sales channel
     * @returns a medusa sales channel
     */
    removeProducts(salesChannelId: string, payload: AdminDeleteSalesChannelsChannelProductsBatchReq, customHeaders?: Record<string, any>): ResponsePromise<AdminSalesChannelsRes>;
    /**
     * Add products to a sales channel
     * @experimental This feature is under development and may change in the future.
     * To use this feature please enable featureflag `sales_channels` in your medusa backend project.
     * @description Add products to a sales channel
     * @returns a medusa sales channel
     */
    addProducts(salesChannelId: string, payload: AdminPostSalesChannelsChannelProductsBatchReq, customHeaders?: Record<string, any>): ResponsePromise<AdminSalesChannelsRes>;
    /**
     * Add a location to a sales channel
     * @experimental This feature is under development and may change in the future.
     * To use this feature please enable featureflag `sales_channels` in your medusa backend project.
     * @description Add a stock location to a SalesChannel
     * @returns the Medusa SalesChannel
     */
    addLocation(salesChannelId: string, payload: AdminPostSalesChannelsChannelStockLocationsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminSalesChannelsRes>;
    /**
     * remove a location from a sales channel
     * @experimental This feature is under development and may change in the future.
     * To use this feature please enable featureflag `sales_channels` in your medusa backend project.
     * @description Remove a stock location from a SalesChannel
     * @returns an deletion result
     */
    removeLocation(salesChannelId: string, payload: AdminDeleteSalesChannelsChannelStockLocationsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminSalesChannelsRes>;
}

declare class AdminShippingOptionsResource extends BaseResource {
    /**
     * @description creates a shipping option.
     * @param payload
     * @param customHeaders
     * @returns created shipping option.
     */
    create(payload: AdminPostShippingOptionsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminShippingOptionsRes>;
    /**
     * @description updates a shipping option
     * @param id id of the shipping option to update.
     * @param payload update to apply to shipping option.
     * @param customHeaders
     * @returns the updated shipping option.
     */
    update(id: string, payload: AdminPostShippingOptionsOptionReq, customHeaders?: Record<string, any>): ResponsePromise<AdminShippingOptionsRes>;
    /**
     * @description deletes a shipping option
     * @param id id of shipping option to delete.
     * @param customHeaders
     * @returns deleted response
     */
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminShippingOptionsDeleteRes>;
    /**
     * @description get a shipping option
     * @param id id of the shipping option to retrieve.
     * @param customHeaders
     * @returns the shipping option with the given id
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminShippingOptionsRes>;
    /**
     * @description lists shipping options matching a query
     * @param query query for searching shipping options
     * @param customHeaders
     * @returns a list of shipping options matching the query.
     */
    list(query?: AdminGetShippingOptionsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminShippingOptionsListRes>;
}

declare class AdminShippingProfilesResource extends BaseResource {
    create(payload: AdminPostShippingProfilesReq, customHeaders?: Record<string, any>): ResponsePromise<AdminShippingProfilesRes>;
    update(id: string, payload: AdminPostShippingProfilesProfileReq, customHeaders?: Record<string, any>): ResponsePromise<AdminShippingProfilesRes>;
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminDeleteShippingProfileRes>;
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminShippingProfilesRes>;
    list(customHeaders?: Record<string, any>): ResponsePromise<AdminShippingProfilesListRes>;
}

declare class AdminStockLocationsResource extends BaseResource {
    /**
     * Create a Stock Location
     * @experimental This feature is under development and may change in the future.
     * To use this feature please install @medusajs/stock-location
     * @description gets a medusa Stock Location
     * @returns a medusa Stock Location
     */
    create(payload: AdminPostStockLocationsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminStockLocationsRes>;
    /**
     * Retrieve a Stock Location
     * @experimental This feature is under development and may change in the future.
     * To use this feature please install @medusajs/stock-location
     * @description gets a medusa Stock Location
     * @returns a medusa Stock Location
     */
    retrieve(itemId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminStockLocationsRes>;
    /**
     * Update a Stock Location
     * @experimental This feature is under development and may change in the future.
     * To use this feature please install @medusajs/stock-location
     * @description updates a Stock Location
     * @returns the updated medusa Stock Location
     */
    update(stockLocationId: string, payload: AdminPostStockLocationsLocationReq, customHeaders?: Record<string, any>): ResponsePromise<AdminStockLocationsRes>;
    /**
     * Delete a Stock Location
     * @experimental This feature is under development and may change in the future.
     * To use this feature please install @medusajs/stock-location
     * @description deletes a Stock Location
     */
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminStockLocationsDeleteRes>;
    /**
     * Retrieve a list of Stock Locations
     * @experimental This feature is under development and may change in the future.
     * To use this feature please install @medusajs/stock-location
     * @description Retrieve a list of Stock Locations
     * @returns the list of Stock Locations as well as the pagination properties
     */
    list(query?: AdminGetStockLocationsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminStockLocationsListRes>;
}

declare class AdminStoresResource extends BaseResource {
    /**
     * @description Updates the store
     * @param payload update to apply to the store.
     * @param customHeaders
     * @returns the updated store.
     */
    update(payload: AdminPostStoreReq, customHeaders?: Record<string, any>): ResponsePromise<AdminStoresRes>;
    /**
     * @description adds a currency to the store.
     * @param currency_code code of the currency to add
     * @param customHeaders
     * @returns updated store.
     */
    addCurrency(currency_code: string, customHeaders?: Record<string, any>): ResponsePromise<AdminStoresRes>;
    /**
     * @description deletes a currency from the available store currencies
     * @param currency_code currency code of the currency to delete from the store.
     * @param customHeaders
     * @returns updated store
     */
    deleteCurrency(currency_code: string, customHeaders?: Record<string, any>): ResponsePromise<AdminStoresRes>;
    /**
     * @description gets a medusa store
     * @returns a medusa store
     */
    retrieve(customHeaders?: Record<string, any>): ResponsePromise<AdminExtendedStoresRes>;
    /**
     * @description Lists the store's payment providers
     * @returns a list of payment providers configured on the store
     */
    listPaymentProviders(customHeaders?: Record<string, any>): ResponsePromise<AdminPaymentProvidersList>;
    /**
     * @description Lists the store's payment providers
     * @returns a list of payment providers configured on the store
     */
    listTaxProviders(customHeaders?: Record<string, any>): ResponsePromise<AdminTaxProvidersList>;
}

declare class AdminSwapsResource extends BaseResource {
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminSwapsRes>;
    list(query?: AdminGetSwapsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminSwapsListRes>;
}

declare class AdminTaxRatesResource extends BaseResource {
    retrieve(id: string, query?: AdminGetTaxRatesTaxRateParams, customHeaders?: Record<string, any>): ResponsePromise<AdminTaxRatesRes>;
    list(query?: AdminGetTaxRatesParams, customHeaders?: Record<string, any>): ResponsePromise<AdminTaxRatesListRes>;
    create(payload: AdminPostTaxRatesReq, query?: AdminGetTaxRatesTaxRateParams, customHeaders?: Record<string, any>): ResponsePromise<AdminTaxRatesRes>;
    update(id: string, payload: AdminPostTaxRatesTaxRateReq, query?: AdminGetTaxRatesTaxRateParams, customHeaders?: Record<string, any>): ResponsePromise<AdminTaxRatesRes>;
    addProducts(id: string, payload: AdminPostTaxRatesTaxRateProductsReq, query?: AdminGetTaxRatesTaxRateParams, customHeaders?: Record<string, any>): ResponsePromise<AdminTaxRatesRes>;
    addProductTypes(id: string, payload: AdminPostTaxRatesTaxRateProductTypesReq, query?: AdminGetTaxRatesTaxRateParams, customHeaders?: Record<string, any>): ResponsePromise<AdminTaxRatesRes>;
    addShippingOptions(id: string, payload: AdminPostTaxRatesTaxRateShippingOptionsReq, query?: AdminGetTaxRatesTaxRateParams, customHeaders?: Record<string, any>): ResponsePromise<AdminTaxRatesRes>;
    removeProducts(id: string, payload: AdminDeleteTaxRatesTaxRateProductsReq, query?: AdminDeleteTaxRatesTaxRateProductsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminTaxRatesRes>;
    removeProductTypes(id: string, payload: AdminDeleteTaxRatesTaxRateProductTypesReq, query?: AdminDeleteTaxRatesTaxRateProductTypesParams, customHeaders?: Record<string, any>): ResponsePromise<AdminTaxRatesRes>;
    removeShippingOptions(id: string, payload: AdminDeleteTaxRatesTaxRateShippingOptionsReq, query?: AdminDeleteTaxRatesTaxRateShippingOptionsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminTaxRatesRes>;
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminTaxRatesDeleteRes>;
}

declare class AdminUploadsResource extends BaseResource {
    private headers;
    /**
     * @description Uploads at least one file to the specific fileservice that is installed in Medusa.
     * @param file File or array of files to upload.
     * @returns Uploaded file or files.
     */
    create(file: AdminCreateUploadPayload): ResponsePromise<AdminUploadsRes>;
    /**
     * @description Uploads at least one file with ACL or a non-public bucket to the specific fileservice that is installed in Medusa.
     * @param file File or array of files to upload.
     * @returns Uploaded file or files.
     */
    createProtected(file: AdminCreateUploadPayload): ResponsePromise<AdminUploadsRes>;
    delete(payload: AdminDeleteUploadsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminDeleteUploadsRes>;
    getPresignedDownloadUrl(payload: AdminPostUploadsDownloadUrlReq, customHeaders?: Record<string, any>): ResponsePromise<AdminUploadsDownloadUrlRes>;
    private _createPayload;
}

declare class AdminUsersResource extends BaseResource {
    /**
     * @description resets password by re-sending password token.
     * @param payload payload for generating reset-password token.
     * @param customHeaders
     * @returns
     */
    sendResetPasswordToken(payload: AdminResetPasswordTokenRequest, customHeaders?: Record<string, any>): ResponsePromise<void>;
    /**
     * @description resets the users password given the correct token.
     * @param payload reset password information.
     * @param customHeaders
     * @returns
     */
    resetPassword(payload: AdminResetPasswordRequest, customHeaders?: Record<string, any>): ResponsePromise<AdminUserRes>;
    /**
     * Retrieves a given user
     * @param id id of the user
     * @param customHeaders
     * @returns the user
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminUserRes>;
    /**
     * @description creates a user with the provided information
     * @param payload user creation request body
     * @param customHeaders
     * @returns created user
     */
    create(payload: AdminCreateUserPayload, customHeaders?: Record<string, any>): ResponsePromise<AdminUserRes>;
    /**
     * @description updates a given user
     * @param id id of the user to update
     * @param payload user update request body
     * @param customHeaders
     * @returns the updated user
     */
    update(id: string, payload: AdminUpdateUserPayload, customHeaders?: Record<string, any>): ResponsePromise<AdminUserRes>;
    /**
     * @description deletes a user
     * @param id id of the user to be deleted
     * @param customHeaders
     * @returns delete response
     */
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminDeleteUserRes>;
    /**
     * @description lists all users
     * @returns a list of all users
     */
    list(customHeaders?: Record<string, any>): ResponsePromise<AdminUsersListRes>;
}

declare class AdminVariantsResource extends BaseResource {
    /**
     * List product variants
     * @param query Query to filter variants by
     * @param customHeaders custom headers
     * @returns A list of variants satisfying the criteria of the query
     */
    list(query?: AdminGetVariantsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminVariantsListRes>;
    /**
     * Get a product variant
     * @param id Query to filter variants by
     * @param customHeaders custom headers
     * @returns A list of variants satisfying the criteria of the query
     */
    retrieve(id: string, query?: AdminGetVariantParams, customHeaders?: Record<string, any>): ResponsePromise<AdminVariantsRes>;
    /**
     *
     * @param variantId id of the variant to fetch inventory for
     * @param customHeaders custom headers
     * @returns
     */
    getInventory(variantId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminGetVariantsVariantInventoryRes>;
}

declare class Admin extends BaseResource {
    auth: AdminAuthResource;
    batchJobs: AdminBatchJobsResource;
    customers: AdminCustomersResource;
    customerGroups: AdminCustomerGroupsResource;
    discounts: AdminDiscountsResource;
    currencies: AdminCurrenciesResource;
    collections: AdminCollectionsResource;
    draftOrders: AdminDraftOrdersResource;
    giftCards: AdminGiftCardsResource;
    invites: AdminInvitesResource;
    inventoryItems: AdminInventoryItemsResource;
    notes: AdminNotesResource;
    priceLists: AdminPriceListResource;
    products: AdminProductsResource;
    productTags: AdminProductTagsResource;
    productTypes: AdminProductTypesResource;
    users: AdminUsersResource;
    returns: AdminReturnsResource;
    orders: AdminOrdersResource;
    orderEdits: AdminOrderEditsResource;
    publishableApiKeys: AdminPublishableApiKeyResource;
    returnReasons: AdminReturnReasonsResource;
    variants: AdminVariantsResource;
    salesChannels: AdminSalesChannelsResource;
    swaps: AdminSwapsResource;
    shippingProfiles: AdminShippingProfilesResource;
    stockLocations: AdminStockLocationsResource;
    store: AdminStoresResource;
    shippingOptions: AdminShippingOptionsResource;
    regions: AdminRegionsResource;
    reservations: AdminReservationsResource;
    notifications: AdminNotificationsResource;
    taxRates: AdminTaxRatesResource;
    uploads: AdminUploadsResource;
    paymentCollections: AdminPaymentCollectionsResource;
    payments: AdminPaymentsResource;
    productCategories: AdminProductCategoriesResource;
    custom: AdminCustomResource;
}

declare class Medusa {
    client: Client;
    admin: Admin;
    auth: AuthResource;
    carts: CartsResource;
    customers: CustomerResource;
    errors: MedusaError;
    orders: OrdersResource;
    orderEdits: OrderEditsResource;
    products: ProductsResource;
    productTypes: ProductTypesResource;
    regions: RegionsResource;
    returnReasons: ReturnReasonsResource;
    returns: ReturnsResource;
    shippingOptions: ShippingOptionsResource;
    swaps: SwapsResource;
    collections: CollectionsResource;
    giftCards: GiftCardsResource;
    paymentMethods: PaymentMethodsResource;
    paymentCollections: PaymentCollectionsResource;
    productTags: ProductTagsResource;
    productCategories: ProductCategoriesResource;
    constructor(config: Config);
    /**
     * Set a PublishableApiKey that will be sent with each request
     * to define the scope of available resources.
     *
     * @param key - PublishableApiKey identifier
     */
    setPublishableKey(key: string): void;
}

export { AddressesResource, Admin, AdminAuthResource, AdminBatchJobsResource, AdminCollectionsResource, AdminCreateUploadPayload, AdminCreateUserPayload, AdminCurrenciesResource, AdminCustomResource, AdminCustomerGroupsResource, AdminCustomersResource, AdminDiscountsResource, AdminDraftOrdersResource, AdminGiftCardsResource, AdminInvitesResource, AdminNotesResource, AdminNotificationsResource, AdminOrderEditsResource, AdminOrdersResource, AdminPaymentCollectionsResource, AdminPaymentsResource, AdminPostInvitesPayload, AdminPriceListResource, AdminProductCategoriesResource, AdminProductTagsResource, AdminProductTypesResource, AdminProductsResource, AdminPublishableApiKeyResource, AdminRegionsResource, AdminReturnReasonsResource, AdminReturnsResource, AdminSalesChannelsResource, AdminShippingOptionsResource, AdminShippingProfilesResource, AdminStockLocationsResource, AdminStoresResource, AdminSwapsResource, AdminTaxRatesResource, AdminUpdateUserPayload, AdminUploadsResource, AdminUsersResource, AdminVariantsResource, AuthResource, BaseResource, CartsResource, Client, CollectionsResource, Config, CreateUserRoles, CustomerResource as CustomersResource, GiftCardsResource, HTTPResponse, InviteUserRolesEnum, _default as KeyManager, LineItemsResource, MedusaError, OrderEditsResource, OrdersResource, PaymentCollectionsResource, PaymentMethodsResource, ProductCategoriesResource, ProductTagsResource, ProductTypesResource, ProductVariantsResource, ProductsResource, RegionsResource, RequestOptions, Response, ResponsePromise, ReturnReasonsResource, ReturnsResource, ShippingOptionsResource, SwapsResource, UpdateUserRoles, Medusa as default };
