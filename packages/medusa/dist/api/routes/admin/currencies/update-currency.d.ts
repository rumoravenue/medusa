import { Currency } from "../../../../models";
import { ExtendedRequest } from "../../../../types/global";
/**
 * @oas [post] /admin/currencies/{code}
 * operationId: "PostCurrenciesCurrency"
 * summary: "Update a Currency"
 * description: "Update a Currency's details."
 * x-authenticated: true
 * parameters:
 *   - (path) code=* {string} The code of the Currency.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostCurrenciesCurrencyReq"
 * x-codegen:
 *   method: update
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.currencies.update(code, {
 *         includes_tax: true
 *       })
 *       .then(({ currency }) => {
 *         console.log(currency.code);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/currencies/{code}' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "includes_tax": true
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Currencies
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminCurrenciesRes"
 */
declare const _default: (req: ExtendedRequest<Currency>, res: any) => Promise<void>;
export default _default;
/**
 * @schema AdminPostCurrenciesCurrencyReq
 * type: object
 * properties:
 *   includes_tax:
 *     type: boolean
 *     x-featureFlag: "tax_inclusive_pricing"
 *     description: "Tax included in prices of currency."
 */
export declare class AdminPostCurrenciesCurrencyReq {
    includes_tax?: boolean;
}
