import { DateComparisonOperator } from "../../../../types/common";
/**
 * @oas [get] /admin/regions
 * operationId: "GetRegions"
 * summary: "List Regions"
 * description: "Retrieve a list of Regions. The regions can be filtered by fields such as `created_at`. The regions can also be paginated"
 * x-authenticated: true
 * parameters:
 *  - in: query
 *    name: limit
 *    schema:
 *      type: integer
 *      default: 50
 *    required: false
 *    description: Limit the number of regions returned.
 *  - in: query
 *    name: offset
 *    schema:
 *      type: integer
 *      default: 0
 *    required: false
 *    description: The number of regions to skip when retrieving the regions.
 *  - in: query
 *    name: created_at
 *    required: false
 *    description: Filter by a creation date range.
 *    schema:
 *      type: object
 *      properties:
 *        lt:
 *          type: string
 *          description: filter by dates less than this date
 *          format: date
 *        gt:
 *          type: string
 *          description: filter by dates greater than this date
 *          format: date
 *        lte:
 *          type: string
 *          description: filter by dates less than or equal to this date
 *          format: date
 *        gte:
 *          type: string
 *          description: filter by dates greater than or equal to this date
 *          format: date
 *  - in: query
 *    name: updated_at
 *    required: false
 *    description: Filter by an update date range.
 *    schema:
 *      type: object
 *      properties:
 *        lt:
 *          type: string
 *          description: filter by dates less than this date
 *          format: date
 *        gt:
 *          type: string
 *          description: filter by dates greater than this date
 *          format: date
 *        lte:
 *          type: string
 *          description: filter by dates less than or equal to this date
 *          format: date
 *        gte:
 *          type: string
 *          description: filter by dates greater than or equal to this date
 *          format: date
 *  - in: query
 *    name: deleted_at
 *    required: false
 *    description: Filter by a deletion date range.
 *    schema:
 *      type: object
 *      properties:
 *        lt:
 *          type: string
 *          description: filter by dates less than this date
 *          format: date
 *        gt:
 *          type: string
 *          description: filter by dates greater than this date
 *          format: date
 *        lte:
 *          type: string
 *          description: filter by dates less than or equal to this date
 *          format: date
 *        gte:
 *          type: string
 *          description: filter by dates greater than or equal to this date
 *          format: date
 * x-codegen:
 *   method: list
 *   queryParams: AdminGetRegionsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.regions.list()
 *       .then(({ regions, limit, offset, count }) => {
 *         console.log(regions.length);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/regions' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Regions
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminRegionsListRes"
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
declare const _default: (req: any, res: any) => Promise<void>;
export default _default;
export declare class AdminGetRegionsPaginationParams {
    limit?: number;
    offset?: number;
}
export declare class AdminGetRegionsParams extends AdminGetRegionsPaginationParams {
    created_at?: DateComparisonOperator;
    updated_at?: DateComparisonOperator;
    deleted_at?: DateComparisonOperator;
}