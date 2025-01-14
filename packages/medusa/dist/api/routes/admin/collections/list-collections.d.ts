import { Request, Response } from "express";
import { DateComparisonOperator } from "../../../../types/common";
/**
 * @oas [get] /admin/collections
 * operationId: "GetCollections"
 * summary: "List Collections"
 * description: "Retrieve a list of Product Collection. The product collections can be filtered by fields such as `handle` or `title`. The collections can also be sorted or paginated."
 * x-authenticated: true
 * parameters:
 *   - (query) limit=10 {integer} The number of collections to return.
 *   - (query) offset=0 {integer} The number of collections to skip when retrieving the collections.
 *   - (query) title {string} Filter collections by their title.
 *   - (query) handle {string} Filter collections by their handle.
 *   - (query) q {string} a term to search collections by their title or handle.
 *   - (query) discount_condition_id {string} Filter collections by a discount condition ID associated with them.
 *   - in: query
 *     name: created_at
 *     description: Filter by a creation date range.
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *            type: string
 *            description: filter by dates less than this date
 *            format: date
 *         gt:
 *            type: string
 *            description: filter by dates greater than this date
 *            format: date
 *         lte:
 *            type: string
 *            description: filter by dates less than or equal to this date
 *            format: date
 *         gte:
 *            type: string
 *            description: filter by dates greater than or equal to this date
 *            format: date
 *   - in: query
 *     name: updated_at
 *     description: Filter by an update date range.
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *            type: string
 *            description: filter by dates less than this date
 *            format: date
 *         gt:
 *            type: string
 *            description: filter by dates greater than this date
 *            format: date
 *         lte:
 *            type: string
 *            description: filter by dates less than or equal to this date
 *            format: date
 *         gte:
 *            type: string
 *            description: filter by dates greater than or equal to this date
 *            format: date
 *   - in: query
 *     name: deleted_at
 *     description: Filter by a deletion date range.
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *            type: string
 *            description: filter by dates less than this date
 *            format: date
 *         gt:
 *            type: string
 *            description: filter by dates greater than this date
 *            format: date
 *         lte:
 *            type: string
 *            description: filter by dates less than or equal to this date
 *            format: date
 *         gte:
 *            type: string
 *            description: filter by dates greater than or equal to this date
 *            format: date
 * x-codegen:
 *   method: list
 *   queryParams: AdminGetCollectionsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.collections.list()
 *       .then(({ collections, limit, offset, count }) => {
 *         console.log(collections.length);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/collections' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Product Collections
 * responses:
 *  "200":
 *    description: OK
 *    content:
 *      application/json:
 *        schema:
 *          $ref: "#/components/schemas/AdminCollectionsListRes"
 *  "400":
 *    $ref: "#/components/responses/400_error"
 *  "401":
 *    $ref: "#/components/responses/unauthorized"
 *  "404":
 *    $ref: "#/components/responses/not_found_error"
 *  "409":
 *    $ref: "#/components/responses/invalid_state_error"
 *  "422":
 *    $ref: "#/components/responses/invalid_request_error"
 *  "500":
 *    $ref: "#/components/responses/500_error"
 */
declare const _default: (req: Request, res: Response) => Promise<void>;
export default _default;
export declare class AdminGetCollectionsPaginationParams {
    limit: number;
    offset: number;
}
export declare class AdminGetCollectionsParams extends AdminGetCollectionsPaginationParams {
    title?: string;
    handle?: string;
    created_at?: DateComparisonOperator;
    updated_at?: DateComparisonOperator;
    deleted_at?: DateComparisonOperator;
    q?: string;
    discount_condition_id?: string;
}
