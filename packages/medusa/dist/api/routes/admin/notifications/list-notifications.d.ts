/**
 * @oas [get] /admin/notifications
 * operationId: "GetNotifications"
 * summary: "List Notifications"
 * description: "Retrieve a list of notifications. The notifications can be filtered by fields such as `event_name` or `resource_type`. The notifications can also be paginated."
 * x-authenticated: true
 * parameters:
 *   - (query) offset=0 {integer} The number of inventory items to skip when retrieving the inventory items.
 *   - (query) limit=50 {integer} Limit the number of notifications returned.
 *   - (query) fields {string} Comma-separated fields that should be included in each returned notification.
 *   - (query) expand {string} Comma-separated relations that should be expanded in each returned notification.
 *   - (query) event_name {string} Filter by the name of the event that triggered sending this notification.
 *   - (query) resource_type {string} Filter by the resource type.
 *   - (query) resource_id {string} Filter by the resource ID.
 *   - (query) to {string} Filter by the address that the Notification was sent to. This will usually be an email address, but it can also represent other addresses such as a chat bot user id.
 *   - (query) include_resends {string} A boolean indicating whether the result set should include resent notifications or not
 * x-codegen:
 *   method: list
 *   queryParams: AdminGetNotificationsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.notifications.list()
 *       .then(({ notifications }) => {
 *         console.log(notifications.length);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/notifications' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Notifications
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminNotificationsListRes"
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
export declare class AdminGetNotificationsParams {
    limit?: number;
    offset?: number;
    fields?: string;
    expand?: string;
    event_name?: string;
    resource_type?: string;
    resource_id?: string;
    to?: string;
    include_resends?: string;
}
