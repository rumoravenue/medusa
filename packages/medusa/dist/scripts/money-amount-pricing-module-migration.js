"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@medusajs/utils");
var isolate_pricing_domain_1 = __importDefault(require("../loaders/feature-flags/isolate-pricing-domain"));
var modules_sdk_1 = require("@medusajs/modules-sdk");
var create_default_rule_types_1 = require("./create-default-rule-types");
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var medusa_app_1 = __importDefault(require("../loaders/medusa-app"));
var loaders_1 = __importDefault(require("../loaders"));
dotenv_1.default.config();
var BATCH_SIZE = 100;
var migrateProductVariant = function (variant, _a) {
    var container = _a.container;
    return __awaiter(void 0, void 0, void 0, function () {
        var pricingService, configModule, link, priceSet;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    pricingService = container.resolve("pricingModuleService");
                    return [4 /*yield*/, container.resolve("configModule")];
                case 1:
                    configModule = _b.sent();
                    return [4 /*yield*/, (0, medusa_app_1.default)({ configModule: configModule, container: container }, { registerInContainer: false })];
                case 2:
                    link = (_b.sent()).link;
                    if (!link) {
                        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Can't migrate money_amounts: Pricing module is not configured correctly");
                    }
                    return [4 /*yield*/, pricingService.create({
                            rules: [{ rule_attribute: "region_id" }],
                            prices: variant.prices.map(function (price) { return ({
                                rules: {
                                    region_id: price.region_id,
                                },
                                currency_code: price.currency_code,
                                min_quantity: price.min_quantity,
                                max_quantity: price.max_quantity,
                                amount: price.amount,
                            }); }),
                        })];
                case 3:
                    priceSet = _b.sent();
                    return [4 /*yield*/, link.create({
                            productService: {
                                variant_id: variant.id,
                            },
                            pricingService: {
                                price_set_id: priceSet.id,
                            },
                        })];
                case 4:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
};
var processBatch = function (variants, container) { return __awaiter(void 0, void 0, void 0, function () {
    var manager;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                manager = container.resolve("manager");
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, Promise.all(variants.map(function (variant) { return __awaiter(void 0, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, migrateProductVariant(variant, {
                                                        container: container,
                                                        transactionManager: transactionManager,
                                                    })];
                                                case 1:
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }))];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var migrate = function (_a) {
    var directory = _a.directory;
    return __awaiter(this, void 0, void 0, function () {
        var app, container, variantService, featureFlagRouter, _b, variants, totalCount, processedCount, nextBatch;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    app = (0, express_1.default)();
                    return [4 /*yield*/, (0, loaders_1.default)({
                            directory: directory,
                            expressApp: app,
                            isTest: false,
                        })];
                case 1:
                    container = (_c.sent()).container;
                    return [4 /*yield*/, container.resolve("productVariantService")];
                case 2:
                    variantService = _c.sent();
                    return [4 /*yield*/, container.resolve("featureFlagRouter")];
                case 3:
                    featureFlagRouter = _c.sent();
                    if (!featureFlagRouter.isFeatureEnabled(isolate_pricing_domain_1.default.key) &&
                        !featureFlagRouter.isFeatureEnabled(modules_sdk_1.Modules.PRICING)) {
                        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Pricing module not enabled");
                    }
                    return [4 /*yield*/, (0, create_default_rule_types_1.createDefaultRuleTypes)(container)];
                case 4:
                    _c.sent();
                    return [4 /*yield*/, variantService.listAndCount({}, { take: BATCH_SIZE, order: { id: "ASC" }, relations: ["prices"] })];
                case 5:
                    _b = __read.apply(void 0, [_c.sent(), 2]), variants = _b[0], totalCount = _b[1];
                    return [4 /*yield*/, processBatch(variants, container)];
                case 6:
                    _c.sent();
                    processedCount = variants.length;
                    console.log("Processed ".concat(processedCount, " of ").concat(totalCount));
                    _c.label = 7;
                case 7:
                    if (!(processedCount < totalCount)) return [3 /*break*/, 10];
                    return [4 /*yield*/, variantService.list({}, {
                            skip: processedCount,
                            take: BATCH_SIZE,
                            order: { id: "ASC" },
                            relations: ["prices"],
                        })];
                case 8:
                    nextBatch = _c.sent();
                    return [4 /*yield*/, processBatch(nextBatch, container)];
                case 9:
                    _c.sent();
                    processedCount += nextBatch.length;
                    console.log("Processed ".concat(processedCount, " of ").concat(totalCount));
                    return [3 /*break*/, 7];
                case 10:
                    console.log("Done");
                    process.exit(0);
                    return [2 /*return*/];
            }
        });
    });
};
migrate({ directory: process.cwd() });
//# sourceMappingURL=money-amount-pricing-module-migration.js.map