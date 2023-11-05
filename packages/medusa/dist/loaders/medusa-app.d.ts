import { CommonTypes, MedusaContainer } from "@medusajs/types";
import { MedusaAppOutput } from "@medusajs/modules-sdk";
export declare const loadMedusaApp: ({ configModule, container, }: {
    configModule: CommonTypes.ConfigModule;
    container: MedusaContainer;
}, config?: {
    registerInContainer: boolean;
}) => Promise<MedusaAppOutput>;
export default loadMedusaApp;
