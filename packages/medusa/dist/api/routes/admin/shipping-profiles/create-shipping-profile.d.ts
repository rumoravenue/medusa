import { ShippingProfileType } from "../../../../models";
/**
 * @oas [post] /admin/shipping-profiles
 * operationId: "PostShippingProfiles"
 * summary: "Create a Shipping Profile"
 * description: "Create a Shipping Profile."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostShippingProfilesReq"
 * x-codegen:
 *   method: create
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.shippingProfiles.create({
 *         name: "Large Products"
 *       })
 *       .then(({ shipping_profile }) => {
 *         console.log(shipping_profile.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/shipping-profiles' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "name": "Large Products"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Shipping Profiles
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminShippingProfilesRes"
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
/**
 * @schema AdminPostShippingProfilesReq
 * type: object
 * required:
 *   - name
 *   - type
 * properties:
 *   name:
 *     description: The name of the Shipping Profile
 *     type: string
 *   type:
 *     description: The type of the Shipping Profile
 *     type: string
 *     enum: [default, gift_card, custom]
 */
export declare class AdminPostShippingProfilesReq {
    name: string;
    type: ShippingProfileType;
    metadata?: Record<string, unknown>;
}
