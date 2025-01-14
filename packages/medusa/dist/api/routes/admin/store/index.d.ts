import { PaymentProvider, Store, TaxProvider } from "./../../../../";
import { ExtendedStoreDTO } from "../../../../types/store";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultRelationsExtended: string[];
/**
 * @schema AdminExtendedStoresRes
 * type: object
 * x-expanded-relations:
 *   field: store
 *   relations:
 *     - currencies
 *     - default_currency
 * required:
 *   - store
 * properties:
 *   store:
 *     description: Store details.
 *     $ref: "#/components/schemas/ExtendedStoreDTO"
 */
export type AdminExtendedStoresRes = {
    store: ExtendedStoreDTO;
};
/**
 * @schema AdminStoresRes
 * type: object
 * required:
 *   - store
 * properties:
 *   store:
 *     description: Store details.
 *     $ref: "#/components/schemas/Store"
 */
export type AdminStoresRes = {
    store: Store;
};
/**
 * @schema AdminTaxProvidersList
 * type: object
 * required:
 *   - tax_providers
 * properties:
 *   tax_providers:
 *     type: array
 *     description: An array of tax providers details.
 *     items:
 *       $ref: "#/components/schemas/TaxProvider"
 */
export type AdminTaxProvidersList = {
    tax_providers: TaxProvider[];
};
/**
 * @schema AdminPaymentProvidersList
 * type: object
 * required:
 *   - payment_providers
 * properties:
 *   payment_providers:
 *     type: array
 *     description: An array of payment providers details.
 *     items:
 *       $ref: "#/components/schemas/PaymentProvider"
 */
export type AdminPaymentProvidersList = {
    payment_providers: PaymentProvider[];
};
export * from "./update-store";
