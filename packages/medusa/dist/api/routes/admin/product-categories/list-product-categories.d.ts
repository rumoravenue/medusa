import { Request, Response } from "express";
/**
 * @oas [get] /admin/product-categories
 * operationId: "GetProductCategories"
 * summary: "List Product Categories"
 * description: "Retrieve a list of product categories. The product categories can be filtered by fields such as `q` or `handle`. The product categories can also be paginated."
 * x-authenticated: true
 * x-featureFlag: "product_categories"
 * parameters:
 *   - (query) q {string} term to search product categories' names and handles.
 *   - (query) handle {string} Filter by handle.
 *   - (query) is_internal {boolean} Filter by whether the category is internal or not.
 *   - (query) is_active {boolean} Filter by whether the category is active or not.
 *   - (query) include_descendants_tree {boolean} If set to `true`, all nested descendants of a category are included in the response.
 *   - (query) parent_category_id {string} Filter by the ID of a parent category.
 *   - (query) offset=0 {integer} The number of product categories to skip when retrieving the product categories.
 *   - (query) limit=100 {integer} Limit the number of product categories returned.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned product categories.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned product categories.
 * x-codegen:
 *   method: list
 *   queryParams: AdminGetProductCategoriesParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.productCategories.list()
 *       .then(({ product_categories, limit, offset, count }) => {
 *         console.log(product_categories.length);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/product-categories' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Product Categories
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminProductCategoriesListRes"
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
declare const AdminGetProductCategoriesParams_base: import("../../../..").ClassConstructor<import("../../../../types/common").FindParams & import("../../../../types/common").FindPaginationParams>;
export declare class AdminGetProductCategoriesParams extends AdminGetProductCategoriesParams_base {
    q?: string;
    handle?: string;
    include_descendants_tree?: boolean;
    is_internal?: boolean;
    is_active?: boolean;
    parent_category_id?: string | null;
}
