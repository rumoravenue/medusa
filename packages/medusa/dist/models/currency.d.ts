export declare class Currency {
    code: string;
    symbol: string;
    symbol_native: string;
    name: string;
    includes_tax?: boolean;
}
/**
 * @schema Currency
 * title: "Currency"
 * description: "Currency"
 * type: object
 * required:
 *   - code
 *   - name
 *   - symbol
 *   - symbol_native
 * properties:
 *  code:
 *    description: The 3 character ISO code for the currency.
 *    type: string
 *    example: usd
 *    externalDocs:
 *      url: https://en.wikipedia.org/wiki/ISO_4217#Active_codes
 *      description: See a list of codes.
 *  symbol:
 *    description: The symbol used to indicate the currency.
 *    type: string
 *    example: $
 *  symbol_native:
 *    description: The native symbol used to indicate the currency.
 *    type: string
 *    example: $
 *  name:
 *    description: The written name of the currency
 *    type: string
 *    example: US Dollar
 *  includes_tax:
 *    description: "Whether the currency prices include tax"
 *    type: boolean
 *    x-featureFlag: "tax_inclusive_pricing"
 *    default: false
 */
