import { FindParams } from "../../../../types/common";
/**
 * @oas [get] /store/orders
 * operationId: "GetOrders"
 * summary: "Look Up an Order"
 * description: "Look up an order using filters. If the filters don't narrow down the results to a single order, a 404 response is returned with no orders."
 * parameters:
 *   - (query) display_id=* {number} Filter by ID.
 *   - (query) fields {string} Comma-separated fields that should be expanded in the returned order.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned order.
 *   - in: query
 *     name: email
 *     style: form
 *     explode: false
 *     description: Filter by email.
 *     required: true
 *     schema:
 *       type: string
 *       format: email
 *   - in: query
 *     name: shipping_address
 *     style: form
 *     explode: false
 *     description: Filter by the shipping address's postal code.
 *     schema:
 *       type: object
 *       properties:
 *         postal_code:
 *           type: string
 *           description: The postal code of the shipping address
 * x-codegen:
 *   method: lookupOrder
 *   queryParams: StoreGetOrdersParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.orders.lookupOrder({
 *         display_id: 1,
 *         email: "user@example.com"
 *       })
 *       .then(({ order }) => {
 *         console.log(order.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/store/orders?display_id=1&email=user@example.com'
 * tags:
 *   - Orders
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreOrdersRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 */
declare const _default: (req: any, res: any) => Promise<void>;
export default _default;
export declare class ShippingAddressPayload {
    postal_code?: string;
}
export declare class StoreGetOrdersParams extends FindParams {
    display_id: number;
    email: string;
    shipping_address?: ShippingAddressPayload;
}
