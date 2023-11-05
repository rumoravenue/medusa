/**
 * @oas [get] /admin/notes
 * operationId: "GetNotes"
 * summary: "List Notes"
 * x-authenticated: true
 * description: "Retrieve a list of notes. The notes can be filtered by fields such as `resource_id`. The notes can also be paginated."
 * parameters:
 *   - (query) limit=50 {number} Limit the number of notes returned.
 *   - (query) offset=0 {number} The number of notes to skip when retrieving the notes.
 *   - (query) resource_id {string} Filter by resource ID
 * x-codegen:
 *   method: list
 *   queryParams: AdminGetNotesParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.notes.list()
 *       .then(({ notes, limit, offset, count }) => {
 *         console.log(notes.length);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/notes' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Notes
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminNotesListRes"
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
export declare class AdminGetNotesParams {
    resource_id?: string;
    limit: number;
    offset: number;
}
