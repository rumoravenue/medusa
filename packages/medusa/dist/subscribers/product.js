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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@medusajs/utils");
var medusa_core_utils_1 = require("medusa-core-utils");
var plugins_1 = require("../loaders/plugins");
var product_1 = __importDefault(require("../services/product"));
var product_variant_1 = __importDefault(require("../services/product-variant"));
var ProductSearchSubscriber = /** @class */ (function () {
    function ProductSearchSubscriber(container) {
        var _this = this;
        this.handleProductCreation = function (data) { return __awaiter(_this, void 0, void 0, function () {
            var product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.productService_.retrieve(data.id, {
                            relations: utils_1.defaultSearchIndexingProductRelations,
                        })];
                    case 1:
                        product = _a.sent();
                        return [4 /*yield*/, this.searchService_.addDocuments(product_1.default.IndexName, [product], medusa_core_utils_1.indexTypes.products)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.handleProductUpdate = function (data) { return __awaiter(_this, void 0, void 0, function () {
            var product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.productService_.retrieve(data.id, {
                            relations: utils_1.defaultSearchIndexingProductRelations,
                        })];
                    case 1:
                        product = _a.sent();
                        return [4 /*yield*/, this.searchService_.addDocuments(product_1.default.IndexName, [product], medusa_core_utils_1.indexTypes.products)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.handleProductDeletion = function (data) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.searchService_.deleteDocument(product_1.default.IndexName, data.id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.handleProductVariantChange = function (data) { return __awaiter(_this, void 0, void 0, function () {
            var product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.productService_.retrieve(data.product_id, {
                            relations: utils_1.defaultSearchIndexingProductRelations,
                        })];
                    case 1:
                        product = _a.sent();
                        return [4 /*yield*/, this.searchService_.addDocuments(product_1.default.IndexName, [product], medusa_core_utils_1.indexTypes.products)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.eventBusService_ = container.eventBusService;
        this.searchService_ = container.searchService;
        this.productService_ = container.productService;
        /**
         * Do not subscribe to any event in case no search engine have been installed.
         * If some events need to be subscribed out of the search engine reason, they can be subscribed above this comment
         */
        try {
            container[plugins_1.isSearchEngineInstalledResolutionKey];
        }
        catch (e) {
            return this;
        }
        this.eventBusService_
            .subscribe(product_1.default.Events.CREATED, this.handleProductCreation)
            .subscribe(product_1.default.Events.UPDATED, this.handleProductUpdate)
            .subscribe(product_1.default.Events.DELETED, this.handleProductDeletion)
            .subscribe(product_variant_1.default.Events.CREATED, this.handleProductVariantChange)
            .subscribe(product_variant_1.default.Events.UPDATED, this.handleProductVariantChange)
            .subscribe(product_variant_1.default.Events.DELETED, this.handleProductVariantChange);
    }
    return ProductSearchSubscriber;
}());
exports.default = ProductSearchSubscriber;
//# sourceMappingURL=product.js.map