import { Request, Response } from "express";
/**
 * @oas [get] /admin/customer-groups/{id}/customers
 * operationId: "GetCustomerGroupsGroupCustomers"
 * summary: "List Customers"
 * description: "Retrieve a list of customers in a customer group. The customers can be filtered by the `q` field. The customers can also be paginated."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the customer group.
 *   - (query) limit=50 {integer} The number of customers to return.
 *   - (query) offset=0 {integer} The number of customers to skip when retrieving the customers.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned customers.
 *   - (query) q {string} a term to search customers by email, first_name, and last_name.
 * x-codegen:
 *   method: listCustomers
 *   queryParams: AdminGetGroupsGroupCustomersParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.customerGroups.listCustomers(customerGroupId)
 *       .then(({ customers }) => {
 *         console.log(customers.length);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/customer-groups/{id}/customers' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Customer Groups
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminCustomersListRes"
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
export declare class AdminGetGroupsGroupCustomersParams {
    q?: string;
    limit: number;
    offset: number;
    expand?: string;
}
