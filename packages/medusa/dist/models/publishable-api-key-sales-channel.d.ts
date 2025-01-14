export declare class PublishableApiKeySalesChannel {
    sales_channel_id: string;
    publishable_key_id: string;
}
/**
 * @schema PublishableApiKeySalesChannel
 * title: "Publishable API Key Sales Channel"
 * description: "This represents the association between the Publishable API keys and Sales Channels"
 * type: object
 * required:
 *   - publishable_key_id
 *   - sales_channel_id
 * properties:
 *   sales_channel_id:
 *     description: The sales channel's ID
 *     type: string
 *     example: sc_01G1G5V21KADXNGH29BJMAJ4B4
 *   publishable_key_id:
 *     description: The publishable API key's ID
 *     type: string
 *     example: pak_01G1G5V21KADXNGH29BJMAJ4B4
 */
