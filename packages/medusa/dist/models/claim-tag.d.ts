import { SoftDeletableEntity } from "../interfaces/models/soft-deletable-entity";
export declare class ClaimTag extends SoftDeletableEntity {
    value: string;
    metadata: Record<string, unknown>;
    private beforeInsert;
}
/**
 * @schema ClaimTag
 * title: "Claim Tag"
 * description: "Claim Tags are user defined tags that can be assigned to claim items for easy filtering and grouping."
 * type: object
 * required:
 *   - created_at
 *   - deleted_at
 *   - id
 *   - metadata
 *   - updated_at
 *   - value
 * properties:
 *   id:
 *     description: The claim tag's ID
 *     type: string
 *     example: ctag_01G8ZCC5Y63B95V6B5SHBZ91S4
 *   value:
 *     description: The value that the claim tag holds
 *     type: string
 *     example: Damaged
 *   created_at:
 *     description: The date with timezone at which the resource was created.
 *     type: string
 *     format: date-time
 *   updated_at:
 *     description: The date with timezone at which the resource was updated.
 *     type: string
 *     format: date-time
 *   deleted_at:
 *     description: The date with timezone at which the resource was deleted.
 *     nullable: true
 *     type: string
 *     format: date-time
 *   metadata:
 *     description: An optional key-value map with additional details
 *     nullable: true
 *     type: object
 *     example: {car: "white"}
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
