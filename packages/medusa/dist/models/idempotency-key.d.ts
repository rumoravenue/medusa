export declare class IdempotencyKey {
    id: string;
    idempotency_key: string;
    created_at: Date;
    locked_at: Date;
    request_method: string;
    request_params: Record<string, unknown>;
    request_path: string;
    response_code: number;
    response_body: Record<string, unknown>;
    recovery_point: string;
    private beforeInsert;
}
/**
 * @schema IdempotencyKey
 * title: "Idempotency Key"
 * description: "Idempotency Key is used to continue a process in case of any failure that might occur."
 * type: object
 * required:
 *   - created_at
 *   - id
 *   - idempotency_key
 *   - locked_at
 *   - recovery_point
 *   - response_code
 *   - response_body
 *   - request_method
 *   - request_params
 *   - request_path
 * properties:
 *   id:
 *     description: The idempotency key's ID
 *     type: string
 *     example: ikey_01G8X9A7ESKAJXG2H0E6F1MW7A
 *   idempotency_key:
 *     description: The unique randomly generated key used to determine the state of a process.
 *     type: string
 *     externalDocs:
 *       url: https://docs.medusajs.com/development/idempotency-key/overview.md
 *       description: Learn more how to use the idempotency key.
 *   created_at:
 *     description: Date which the idempotency key was locked.
 *     type: string
 *     format: date-time
 *   locked_at:
 *     description: Date which the idempotency key was locked.
 *     nullable: true
 *     type: string
 *     format: date-time
 *   request_method:
 *     description: The method of the request
 *     nullable: true
 *     type: string
 *     example: POST
 *   request_params:
 *     description: The parameters passed to the request
 *     nullable: true
 *     type: object
 *     example:
 *       id: cart_01G8ZH853Y6TFXWPG5EYE81X63
 *   request_path:
 *     description: The request's path
 *     nullable: true
 *     type: string
 *     example: /store/carts/cart_01G8ZH853Y6TFXWPG5EYE81X63/complete
 *   response_code:
 *     description: The response's code.
 *     nullable: true
 *     type: string
 *     example: 200
 *   response_body:
 *     description: The response's body
 *     nullable: true
 *     type: object
 *     example:
 *       id: cart_01G8ZH853Y6TFXWPG5EYE81X63
 *   recovery_point:
 *     description: Where to continue from.
 *     type: string
 *     default: started
 */
