import {
  BeforeCreate,
  Entity,
  Index,
  PrimaryKey,
  Property,
} from "@mikro-orm/core"
import { generateEntityId } from "@medusajs/utils"

@Entity({ tableName: "product_variant" })
class ProductVariant {
  @PrimaryKey({ columnType: "text" })
  id!: string

  @Property({ columnType: "text" })
  title: string

  @Property({ columnType: "text", nullable: true })
  @Index({
    name: "IDX_product_variant_sku_unique",
    properties: ["sku"],
    expression:
      "CREATE UNIQUE INDEX IF NOT EXISTS IDX_product_variant_sku_unique ON product_variant (sku) WHERE deleted_at IS NULL",
  })
  sku?: string | null

  @Property({ columnType: "text", nullable: true })
  @Index({
    name: "IDX_product_variant_sku_unique",
    properties: ["barcode"],
    expression:
      "CREATE UNIQUE INDEX IF NOT EXISTS IDX_product_variant_barcode_unique ON product_variant (barcode) WHERE deleted_at IS NULL",
  })
  barcode?: string | null

  @Property({ columnType: "text", nullable: true })
  @Index({
    name: "IDX_product_variant_sku_unique",
    properties: ["ean"],
    expression:
      "CREATE UNIQUE INDEX IF NOT EXISTS IDX_product_variant_ean_unique ON product_variant (ean) WHERE deleted_at IS NULL",
  })
  ean?: string | null

  @Property({ columnType: "text", nullable: true })
  @Index({
    name: "IDX_product_variant_sku_unique",
    properties: ["upc"],
    expression:
      "CREATE UNIQUE INDEX IF NOT EXISTS IDX_product_variant_upc_unique ON product_variant (upc) WHERE deleted_at IS NULL",
  })
  upc?: string | null

  @Property({ columnType: "numeric" })
  inventory_quantity: number

  @Property({ columnType: "boolean", default: false })
  allow_backorder: boolean

  @Property({ columnType: "boolean", default: true })
  manage_inventory: boolean

  @Property({ columnType: "text", nullable: true })
  hs_code?: string | null

  @Property({ columnType: "text", nullable: true })
  origin_country?: string | null

  @Property({ columnType: "text", nullable: true })
  mid_code?: string | null

  @Property({ columnType: "text", nullable: true })
  material?: string | null

  @Property({ columnType: "numeric", nullable: true })
  weight?: number | null

  @Property({ columnType: "numeric", nullable: true })
  length?: number | null

  @Property({ columnType: "numeric", nullable: true })
  height?: number | null

  @Property({ columnType: "numeric", nullable: true })
  width?: number | null

  @Property({ columnType: "jsonb", nullable: true })
  metadata?: Record<string, unknown> | null

  @Property({ columnType: "numeric", nullable: true })
  variant_rank?: number | null

  @Property({ onCreate: () => new Date(), columnType: "timestamptz" })
  created_at: Date

  @Property({
    onCreate: () => new Date(),
    onUpdate: () => new Date(),
    columnType: "timestamptz",
  })
  updated_at: Date

  /**
   * Soft deleted will be an update of the record which set the deleted_at to new Date()
   */
  @Property({ columnType: "timestamptz", nullable: true })
  deleted_at: Date

  // TODO: Bring relations back slowly one by one
  // @ManyToOne(() => Product, { onDelete: "cascade" })
  // product!: Product

  // @OneToMany(() => MoneyAmount, (ma) => ma.variant, {
  //   cascade: [ "persist", "remove" ],
  // })
  // prices = new Collection<MoneyAmount>(this)

  // @OneToMany(() => ProductOptionValue, (optionValue) => optionValue.variant, {
  //   cascade: [ "persist", "remove" ],
  // })
  // options = new Collection<ProductOptionValue>(this)

  // @OneToMany(
  //   () => ProductVariantInventoryItem,
  //   (inventoryItem) => inventoryItem.variant,
  //   {
  //     cascade: ["soft-remove", "remove"],
  //   }
  // )
  // inventory_items = new Collection<ProductVariantInventoryItem>(this)

  @BeforeCreate()
  onCreate() {
    this.id = generateEntityId(this.id, "variant")
  }
}

export default ProductVariant