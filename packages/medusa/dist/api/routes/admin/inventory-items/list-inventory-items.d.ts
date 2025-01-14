import { NumericalComparisonOperator, StringComparisonOperator } from "../../../../types/common";
import { Request, Response } from "express";
/**
 * @oas [get] /admin/inventory-items
 * operationId: "GetInventoryItems"
 * summary: "List Inventory Items"
 * description: "Retrieve a list of inventory items. The inventory items can be filtered by fields such as `q` or `location_id`. The inventory items can also be paginated."
 * x-authenticated: true
 * parameters:
 *   - (query) offset=0 {integer} The number of inventory items to skip when retrieving the inventory items.
 *   - (query) limit=20 {integer} Limit the number of inventory items returned.
 *   - (query) expand {string} Comma-separated relations that should be expanded in each returned inventory item.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned inventory item.
 *   - (query) q {string} term to search inventory item's sku, title, and description.
 *   - in: query
 *     name: location_id
 *     style: form
 *     explode: false
 *     description: Filter by location IDs.
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - in: query
 *     name: id
 *     style: form
 *     explode: false
 *     description: Filter by the inventory ID
 *     schema:
 *       oneOf:
 *         - type: string
 *           description: inventory ID
 *         - type: array
 *           description: an array of inventory IDs
 *           items:
 *             type: string
 *   - (query) sku {string} Filter by SKU
 *   - (query) origin_country {string} Filter by origin country
 *   - (query) mid_code {string} Filter by MID code
 *   - (query) material {string} Filter by material
 *   - (query) hs_code {string} Filter by HS Code
 *   - (query) weight {string} Filter by weight
 *   - (query) length {string} Filter by length
 *   - (query) height {string} Filter by height
 *   - (query) width {string} Filter by width
 *   - (query) requires_shipping {string} Filter by whether the item requires shipping
 * x-codegen:
 *   method: list
 *   queryParams: AdminGetInventoryItemsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.inventoryItems.list()
 *       .then(({ inventory_items, count, offset, limit }) => {
 *         console.log(inventory_items.length);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/inventory-items' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Inventory Items
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminInventoryItemsListWithVariantsAndLocationLevelsRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 */
declare const _default: (req: Request, res: Response) => Promise<void>;
export default _default;
declare const AdminGetInventoryItemsParams_base: import("../../../..").ClassConstructor<import("../../../../types/common").FindParams & import("../../../../types/common").FindPaginationParams>;
export declare class AdminGetInventoryItemsParams extends AdminGetInventoryItemsParams_base {
    id?: string | string[];
    q?: string;
    location_id?: string | string[];
    sku?: string | string[];
    origin_country?: string | string[];
    mid_code?: string | string[];
    material?: string | string[];
    hs_code?: string | string[] | StringComparisonOperator;
    weight?: number | NumericalComparisonOperator;
    length?: number | NumericalComparisonOperator;
    height?: number | NumericalComparisonOperator;
    width?: number | NumericalComparisonOperator;
    requires_shipping?: boolean;
}
