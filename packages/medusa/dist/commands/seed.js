"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var get_migrations_1 = __importStar(require("./utils/get-migrations"));
var isolate_pricing_domain_1 = __importDefault(require("../loaders/feature-flags/isolate-pricing-domain"));
var logger_1 = __importDefault(require("../loaders/logger"));
var fs_exists_cached_1 = require("fs-exists-cached");
var express_1 = __importDefault(require("express"));
var feature_flags_1 = __importDefault(require("../loaders/feature-flags"));
var fs_1 = __importDefault(require("fs"));
var medusa_core_utils_1 = require("medusa-core-utils");
var config_1 = require("../loaders/config");
var loaders_1 = __importDefault(require("../loaders"));
var path_1 = __importDefault(require("path"));
var medusa_telemetry_1 = require("medusa-telemetry");
var seed = function (_a) {
    var directory = _a.directory, migrate = _a.migrate, seedFile = _a.seedFile;
    return __awaiter(this, void 0, void 0, function () {
        var resolvedPath, _b, configModule, error, featureFlagRouter, coreMigrations, moduleMigrations, connectionOptions, connection, app, container, manager, storeService, userService, regionService, productService, productCategoryService, publishableApiKeyService, salesChannelService, productVariantService, shippingOptionService, shippingProfileService, pricingModuleService;
        var _this = this;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    (0, medusa_telemetry_1.track)("CLI_SEED");
                    resolvedPath = seedFile;
                    // If we are already given an absolute path we can skip resolution step
                    if (!(0, fs_exists_cached_1.sync)(resolvedPath)) {
                        resolvedPath = path_1.default.resolve(path_1.default.join(directory, seedFile));
                        if (!(0, fs_exists_cached_1.sync)(resolvedPath)) {
                            console.error("Could not find a seed file at: ".concat(seedFile));
                            console.error("Resolved path: ".concat(resolvedPath));
                            process.exit(1);
                        }
                    }
                    _b = (0, medusa_core_utils_1.getConfigFile)(directory, "medusa-config"), configModule = _b.configModule, error = _b.error;
                    if (error) {
                        (0, config_1.handleConfigError)(error);
                    }
                    featureFlagRouter = (0, feature_flags_1.default)(configModule);
                    if (!migrate) return [3 /*break*/, 4];
                    coreMigrations = (0, get_migrations_1.default)(directory, featureFlagRouter).coreMigrations;
                    moduleMigrations = (0, get_migrations_1.getModuleSharedResources)(configModule, featureFlagRouter).migrations;
                    connectionOptions = {
                        type: "postgres",
                        database: configModule.projectConfig.database_database,
                        schema: configModule.projectConfig.database_schema,
                        url: configModule.projectConfig.database_url,
                        extra: configModule.projectConfig.database_extra || {},
                        migrations: coreMigrations.concat(moduleMigrations),
                        logging: true,
                    };
                    connection = new typeorm_1.DataSource(connectionOptions);
                    return [4 /*yield*/, connection.initialize()];
                case 1:
                    _c.sent();
                    return [4 /*yield*/, connection.runMigrations()];
                case 2:
                    _c.sent();
                    return [4 /*yield*/, connection.destroy()];
                case 3:
                    _c.sent();
                    logger_1.default.info("Migrations completed.");
                    _c.label = 4;
                case 4:
                    app = (0, express_1.default)();
                    return [4 /*yield*/, (0, loaders_1.default)({
                            directory: directory,
                            expressApp: app,
                            isTest: false,
                        })];
                case 5:
                    container = (_c.sent()).container;
                    manager = container.resolve("manager");
                    storeService = container.resolve("storeService");
                    userService = container.resolve("userService");
                    regionService = container.resolve("regionService");
                    productService = container.resolve("productService");
                    productCategoryService = container.resolve("productCategoryService");
                    publishableApiKeyService = container.resolve("publishableApiKeyService");
                    salesChannelService = container.resolve("salesChannelService");
                    productVariantService = container.resolve("productVariantService");
                    shippingOptionService = container.resolve("shippingOptionService");
                    shippingProfileService = container.resolve("shippingProfileService");
                    pricingModuleService = container.resolve("pricingModuleService");
                    /* eslint-enable */
                    return [4 /*yield*/, manager.transaction(function (tx) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, seededStore, regions, products, _b, categories, shipping_options, users, _c, rule_types, _d, publishable_api_keys, gcProfile, defaultProfile, store, users_1, users_1_1, u, pass, e_1_1, regionIds, regions_1, regions_1_1, r, dummyId, reg, e_2_1, shipping_options_1, shipping_options_1_1, so, e_3_1, createProductCategory, categories_1, categories_1_1, c, e_4_1, _loop_1, products_1, products_1_1, p, e_5_1, defaultSalesChannel, e_6, publishable_api_keys_1, publishable_api_keys_1_1, pak, publishableApiKey, e_7_1, rule_types_1, rule_types_1_1, ruleType, e_8_1;
                            var e_1, _e, e_2, _f, e_3, _g, e_4, _h, e_5, _j, e_7, _k, e_8, _l;
                            var _this = this;
                            return __generator(this, function (_m) {
                                switch (_m.label) {
                                    case 0:
                                        _a = JSON.parse(fs_1.default.readFileSync(resolvedPath, "utf-8")), seededStore = _a.store, regions = _a.regions, products = _a.products, _b = _a.categories, categories = _b === void 0 ? [] : _b, shipping_options = _a.shipping_options, users = _a.users, _c = _a.rule_types, rule_types = _c === void 0 ? [] : _c, _d = _a.publishable_api_keys, publishable_api_keys = _d === void 0 ? [] : _d;
                                        return [4 /*yield*/, shippingProfileService.retrieveGiftCardDefault()];
                                    case 1:
                                        gcProfile = _m.sent();
                                        return [4 /*yield*/, shippingProfileService.retrieveDefault()];
                                    case 2:
                                        defaultProfile = _m.sent();
                                        if (!seededStore) return [3 /*break*/, 4];
                                        return [4 /*yield*/, storeService.withTransaction(tx).update(seededStore)];
                                    case 3:
                                        _m.sent();
                                        _m.label = 4;
                                    case 4: return [4 /*yield*/, storeService.retrieve()];
                                    case 5:
                                        store = _m.sent();
                                        _m.label = 6;
                                    case 6:
                                        _m.trys.push([6, 11, 12, 13]);
                                        users_1 = __values(users), users_1_1 = users_1.next();
                                        _m.label = 7;
                                    case 7:
                                        if (!!users_1_1.done) return [3 /*break*/, 10];
                                        u = users_1_1.value;
                                        pass = u.password;
                                        if (pass) {
                                            delete u.password;
                                        }
                                        return [4 /*yield*/, userService.withTransaction(tx).create(u, pass)];
                                    case 8:
                                        _m.sent();
                                        _m.label = 9;
                                    case 9:
                                        users_1_1 = users_1.next();
                                        return [3 /*break*/, 7];
                                    case 10: return [3 /*break*/, 13];
                                    case 11:
                                        e_1_1 = _m.sent();
                                        e_1 = { error: e_1_1 };
                                        return [3 /*break*/, 13];
                                    case 12:
                                        try {
                                            if (users_1_1 && !users_1_1.done && (_e = users_1.return)) _e.call(users_1);
                                        }
                                        finally { if (e_1) throw e_1.error; }
                                        return [7 /*endfinally*/];
                                    case 13:
                                        regionIds = {};
                                        _m.label = 14;
                                    case 14:
                                        _m.trys.push([14, 19, 20, 21]);
                                        regions_1 = __values(regions), regions_1_1 = regions_1.next();
                                        _m.label = 15;
                                    case 15:
                                        if (!!regions_1_1.done) return [3 /*break*/, 18];
                                        r = regions_1_1.value;
                                        dummyId = void 0;
                                        if (!r.id || !r.id.startsWith("reg_")) {
                                            dummyId = r.id;
                                            delete r.id;
                                        }
                                        return [4 /*yield*/, regionService.withTransaction(tx).create(r)];
                                    case 16:
                                        reg = _m.sent();
                                        if (dummyId) {
                                            regionIds[dummyId] = reg.id;
                                        }
                                        _m.label = 17;
                                    case 17:
                                        regions_1_1 = regions_1.next();
                                        return [3 /*break*/, 15];
                                    case 18: return [3 /*break*/, 21];
                                    case 19:
                                        e_2_1 = _m.sent();
                                        e_2 = { error: e_2_1 };
                                        return [3 /*break*/, 21];
                                    case 20:
                                        try {
                                            if (regions_1_1 && !regions_1_1.done && (_f = regions_1.return)) _f.call(regions_1);
                                        }
                                        finally { if (e_2) throw e_2.error; }
                                        return [7 /*endfinally*/];
                                    case 21:
                                        _m.trys.push([21, 26, 27, 28]);
                                        shipping_options_1 = __values(shipping_options), shipping_options_1_1 = shipping_options_1.next();
                                        _m.label = 22;
                                    case 22:
                                        if (!!shipping_options_1_1.done) return [3 /*break*/, 25];
                                        so = shipping_options_1_1.value;
                                        if (regionIds[so.region_id]) {
                                            so.region_id = regionIds[so.region_id];
                                        }
                                        so.profile_id = defaultProfile.id;
                                        if (so.is_giftcard) {
                                            so.profile_id = gcProfile.id;
                                            delete so.is_giftcard;
                                        }
                                        return [4 /*yield*/, shippingOptionService.withTransaction(tx).create(so)];
                                    case 23:
                                        _m.sent();
                                        _m.label = 24;
                                    case 24:
                                        shipping_options_1_1 = shipping_options_1.next();
                                        return [3 /*break*/, 22];
                                    case 25: return [3 /*break*/, 28];
                                    case 26:
                                        e_3_1 = _m.sent();
                                        e_3 = { error: e_3_1 };
                                        return [3 /*break*/, 28];
                                    case 27:
                                        try {
                                            if (shipping_options_1_1 && !shipping_options_1_1.done && (_g = shipping_options_1.return)) _g.call(shipping_options_1);
                                        }
                                        finally { if (e_3) throw e_3.error; }
                                        return [7 /*endfinally*/];
                                    case 28:
                                        createProductCategory = function (parameters, parentCategoryId) {
                                            if (parentCategoryId === void 0) { parentCategoryId = null; }
                                            return __awaiter(_this, void 0, void 0, function () {
                                                var categoryChildren, category, categoryChildren_1, categoryChildren_1_1, categoryChild, e_9_1;
                                                var e_9, _a;
                                                return __generator(this, function (_b) {
                                                    switch (_b.label) {
                                                        case 0:
                                                            // default to the categories being visible and public
                                                            parameters.is_active = parameters.is_active || true;
                                                            parameters.is_internal = parameters.is_internal || false;
                                                            parameters.parent_category_id = parentCategoryId;
                                                            categoryChildren = parameters.category_children || [];
                                                            delete parameters.category_children;
                                                            return [4 /*yield*/, productCategoryService
                                                                    .withTransaction(tx)
                                                                    .create(parameters)];
                                                        case 1:
                                                            category = _b.sent();
                                                            if (!categoryChildren.length) return [3 /*break*/, 9];
                                                            _b.label = 2;
                                                        case 2:
                                                            _b.trys.push([2, 7, 8, 9]);
                                                            categoryChildren_1 = __values(categoryChildren), categoryChildren_1_1 = categoryChildren_1.next();
                                                            _b.label = 3;
                                                        case 3:
                                                            if (!!categoryChildren_1_1.done) return [3 /*break*/, 6];
                                                            categoryChild = categoryChildren_1_1.value;
                                                            return [4 /*yield*/, createProductCategory(categoryChild, category.id)];
                                                        case 4:
                                                            _b.sent();
                                                            _b.label = 5;
                                                        case 5:
                                                            categoryChildren_1_1 = categoryChildren_1.next();
                                                            return [3 /*break*/, 3];
                                                        case 6: return [3 /*break*/, 9];
                                                        case 7:
                                                            e_9_1 = _b.sent();
                                                            e_9 = { error: e_9_1 };
                                                            return [3 /*break*/, 9];
                                                        case 8:
                                                            try {
                                                                if (categoryChildren_1_1 && !categoryChildren_1_1.done && (_a = categoryChildren_1.return)) _a.call(categoryChildren_1);
                                                            }
                                                            finally { if (e_9) throw e_9.error; }
                                                            return [7 /*endfinally*/];
                                                        case 9: return [2 /*return*/];
                                                    }
                                                });
                                            });
                                        };
                                        _m.label = 29;
                                    case 29:
                                        _m.trys.push([29, 34, 35, 36]);
                                        categories_1 = __values(categories), categories_1_1 = categories_1.next();
                                        _m.label = 30;
                                    case 30:
                                        if (!!categories_1_1.done) return [3 /*break*/, 33];
                                        c = categories_1_1.value;
                                        return [4 /*yield*/, createProductCategory(c)];
                                    case 31:
                                        _m.sent();
                                        _m.label = 32;
                                    case 32:
                                        categories_1_1 = categories_1.next();
                                        return [3 /*break*/, 30];
                                    case 33: return [3 /*break*/, 36];
                                    case 34:
                                        e_4_1 = _m.sent();
                                        e_4 = { error: e_4_1 };
                                        return [3 /*break*/, 36];
                                    case 35:
                                        try {
                                            if (categories_1_1 && !categories_1_1.done && (_h = categories_1.return)) _h.call(categories_1);
                                        }
                                        finally { if (e_4) throw e_4.error; }
                                        return [7 /*endfinally*/];
                                    case 36:
                                        _loop_1 = function (p) {
                                            var variants, newProd, optionIds_1, variants_1, variants_1_1, v, variant, e_10_1;
                                            var e_10, _o;
                                            return __generator(this, function (_p) {
                                                switch (_p.label) {
                                                    case 0:
                                                        variants = p.variants;
                                                        delete p.variants;
                                                        // default to the products being visible
                                                        p.status = p.status || "published";
                                                        p.sales_channels = [{ id: store.default_sales_channel_id }];
                                                        p.profile_id = defaultProfile.id;
                                                        if (p.is_giftcard) {
                                                            p.profile_id = gcProfile.id;
                                                        }
                                                        return [4 /*yield*/, productService
                                                                .withTransaction(tx)
                                                                .create(p)];
                                                    case 1:
                                                        newProd = _p.sent();
                                                        if (!(variants && variants.length)) return [3 /*break*/, 9];
                                                        optionIds_1 = p.options.map(function (o) { var _a; return (_a = newProd.options.find(function (newO) { return newO.title === o.title; })) === null || _a === void 0 ? void 0 : _a.id; });
                                                        _p.label = 2;
                                                    case 2:
                                                        _p.trys.push([2, 7, 8, 9]);
                                                        variants_1 = (e_10 = void 0, __values(variants)), variants_1_1 = variants_1.next();
                                                        _p.label = 3;
                                                    case 3:
                                                        if (!!variants_1_1.done) return [3 /*break*/, 6];
                                                        v = variants_1_1.value;
                                                        variant = __assign(__assign({}, v), { options: v.options.map(function (o, index) { return (__assign(__assign({}, o), { option_id: optionIds_1[index] })); }) });
                                                        return [4 /*yield*/, productVariantService
                                                                .withTransaction(tx)
                                                                .create(newProd.id, variant)];
                                                    case 4:
                                                        _p.sent();
                                                        _p.label = 5;
                                                    case 5:
                                                        variants_1_1 = variants_1.next();
                                                        return [3 /*break*/, 3];
                                                    case 6: return [3 /*break*/, 9];
                                                    case 7:
                                                        e_10_1 = _p.sent();
                                                        e_10 = { error: e_10_1 };
                                                        return [3 /*break*/, 9];
                                                    case 8:
                                                        try {
                                                            if (variants_1_1 && !variants_1_1.done && (_o = variants_1.return)) _o.call(variants_1);
                                                        }
                                                        finally { if (e_10) throw e_10.error; }
                                                        return [7 /*endfinally*/];
                                                    case 9: return [2 /*return*/];
                                                }
                                            });
                                        };
                                        _m.label = 37;
                                    case 37:
                                        _m.trys.push([37, 42, 43, 44]);
                                        products_1 = __values(products), products_1_1 = products_1.next();
                                        _m.label = 38;
                                    case 38:
                                        if (!!products_1_1.done) return [3 /*break*/, 41];
                                        p = products_1_1.value;
                                        return [5 /*yield**/, _loop_1(p)];
                                    case 39:
                                        _m.sent();
                                        _m.label = 40;
                                    case 40:
                                        products_1_1 = products_1.next();
                                        return [3 /*break*/, 38];
                                    case 41: return [3 /*break*/, 44];
                                    case 42:
                                        e_5_1 = _m.sent();
                                        e_5 = { error: e_5_1 };
                                        return [3 /*break*/, 44];
                                    case 43:
                                        try {
                                            if (products_1_1 && !products_1_1.done && (_j = products_1.return)) _j.call(products_1);
                                        }
                                        finally { if (e_5) throw e_5.error; }
                                        return [7 /*endfinally*/];
                                    case 44:
                                        defaultSalesChannel = null;
                                        _m.label = 45;
                                    case 45:
                                        _m.trys.push([45, 47, , 48]);
                                        return [4 /*yield*/, salesChannelService
                                                .withTransaction(tx)
                                                .retrieveDefault()];
                                    case 46:
                                        defaultSalesChannel = _m.sent();
                                        return [3 /*break*/, 48];
                                    case 47:
                                        e_6 = _m.sent();
                                        defaultSalesChannel = null;
                                        return [3 /*break*/, 48];
                                    case 48:
                                        _m.trys.push([48, 54, 55, 56]);
                                        publishable_api_keys_1 = __values(publishable_api_keys), publishable_api_keys_1_1 = publishable_api_keys_1.next();
                                        _m.label = 49;
                                    case 49:
                                        if (!!publishable_api_keys_1_1.done) return [3 /*break*/, 53];
                                        pak = publishable_api_keys_1_1.value;
                                        return [4 /*yield*/, publishableApiKeyService
                                                .withTransaction(tx)
                                                .create(pak, {
                                                loggedInUserId: "",
                                            })
                                            // attach to default sales channel if exists
                                        ];
                                    case 50:
                                        publishableApiKey = _m.sent();
                                        if (!defaultSalesChannel) return [3 /*break*/, 52];
                                        return [4 /*yield*/, publishableApiKeyService.addSalesChannels(publishableApiKey.id, [
                                                defaultSalesChannel.id,
                                            ])];
                                    case 51:
                                        _m.sent();
                                        _m.label = 52;
                                    case 52:
                                        publishable_api_keys_1_1 = publishable_api_keys_1.next();
                                        return [3 /*break*/, 49];
                                    case 53: return [3 /*break*/, 56];
                                    case 54:
                                        e_7_1 = _m.sent();
                                        e_7 = { error: e_7_1 };
                                        return [3 /*break*/, 56];
                                    case 55:
                                        try {
                                            if (publishable_api_keys_1_1 && !publishable_api_keys_1_1.done && (_k = publishable_api_keys_1.return)) _k.call(publishable_api_keys_1);
                                        }
                                        finally { if (e_7) throw e_7.error; }
                                        return [7 /*endfinally*/];
                                    case 56:
                                        if (!featureFlagRouter.isFeatureEnabled(isolate_pricing_domain_1.default.key)) return [3 /*break*/, 64];
                                        _m.label = 57;
                                    case 57:
                                        _m.trys.push([57, 62, 63, 64]);
                                        rule_types_1 = __values(rule_types), rule_types_1_1 = rule_types_1.next();
                                        _m.label = 58;
                                    case 58:
                                        if (!!rule_types_1_1.done) return [3 /*break*/, 61];
                                        ruleType = rule_types_1_1.value;
                                        return [4 /*yield*/, pricingModuleService.createRuleTypes(ruleType)];
                                    case 59:
                                        _m.sent();
                                        _m.label = 60;
                                    case 60:
                                        rule_types_1_1 = rule_types_1.next();
                                        return [3 /*break*/, 58];
                                    case 61: return [3 /*break*/, 64];
                                    case 62:
                                        e_8_1 = _m.sent();
                                        e_8 = { error: e_8_1 };
                                        return [3 /*break*/, 64];
                                    case 63:
                                        try {
                                            if (rule_types_1_1 && !rule_types_1_1.done && (_l = rule_types_1.return)) _l.call(rule_types_1);
                                        }
                                        finally { if (e_8) throw e_8.error; }
                                        return [7 /*endfinally*/];
                                    case 64: return [2 /*return*/];
                                }
                            });
                        }); })];
                case 6:
                    /* eslint-enable */
                    _c.sent();
                    (0, medusa_telemetry_1.track)("CLI_SEED_COMPLETED");
                    return [2 /*return*/];
            }
        });
    });
};
exports.default = seed;
//# sourceMappingURL=seed.js.map