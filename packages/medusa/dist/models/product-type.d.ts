import { SoftDeletableEntity } from "../interfaces/models/soft-deletable-entity";
export declare class ProductType extends SoftDeletableEntity {
    value: string;
    metadata: Record<string, unknown>;
    private beforeInsert;
}
/**
 * @schema ProductType
 * title: "Product Type"
 * description: "A Product Type can be added to Products for filtering and reporting purposes."
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
 *     description: The product type's ID
 *     type: string
 *     example: ptyp_01G8X9A7ESKAJXG2H0E6F1MW7A
 *   value:
 *     description: The value that the Product Type represents.
 *     type: string
 *     example: Clothing
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
