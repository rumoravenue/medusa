"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var modules_sdk_1 = require("@medusajs/modules-sdk");
var database_1 = __importStar(require("./database"));
var plugins_1 = __importStar(require("./plugins"));
var utils_1 = require("@medusajs/utils");
var awilix_1 = require("awilix");
var medusa_core_utils_1 = require("medusa-core-utils");
var medusa_telemetry_1 = require("medusa-telemetry");
var os_1 = require("os");
var request_ip_1 = __importDefault(require("request-ip"));
var api_1 = __importDefault(require("./api"));
var config_1 = __importDefault(require("./config"));
var defaults_1 = __importDefault(require("./defaults"));
var express_1 = __importDefault(require("./express"));
var feature_flags_1 = __importDefault(require("./feature-flags"));
var isolate_pricing_domain_1 = __importDefault(require("./feature-flags/isolate-pricing-domain"));
var isolate_product_domain_1 = __importDefault(require("./feature-flags/isolate-product-domain"));
var logger_1 = __importDefault(require("./logger"));
var medusa_app_1 = __importDefault(require("./medusa-app"));
var models_1 = __importDefault(require("./models"));
var passport_1 = __importDefault(require("./passport"));
var pg_connection_1 = __importDefault(require("./pg-connection"));
var redis_1 = __importDefault(require("./redis"));
var repositories_1 = __importDefault(require("./repositories"));
var search_index_1 = __importDefault(require("./search-index"));
var services_1 = __importDefault(require("./services"));
var strategies_1 = __importDefault(require("./strategies"));
var subscribers_1 = __importDefault(require("./subscribers"));
exports.default = (function (_a) {
    var rootDirectory = _a.directory, expressApp = _a.expressApp, isTest = _a.isTest;
    return __awaiter(void 0, void 0, void 0, function () {
        var configModule, container, featureFlagRouter, modelsActivity, mAct, pmActivity, pmAct, stratActivity, stratAct, pgConnection, modulesActivity, modAct, dbActivity, dbConnection, dbAct, repoActivity, rAct, servicesActivity, servAct, expActivity, exAct, pluginsActivity, pAct, subActivity, subAct, apiActivity, apiAct, defaultsActivity, dAct, searchActivity, searchAct;
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    configModule = (0, config_1.default)(rootDirectory);
                    container = (0, medusa_core_utils_1.createMedusaContainer)();
                    container.register(utils_1.ContainerRegistrationKeys.CONFIG_MODULE, (0, awilix_1.asValue)(configModule));
                    // Add additional information to context of request
                    expressApp.use(function (req, res, next) {
                        var ipAddress = request_ip_1.default.getClientIp(req);
                        req.request_context = {
                            ip_address: ipAddress,
                        };
                        next();
                    });
                    featureFlagRouter = (0, feature_flags_1.default)(configModule, logger_1.default);
                    (0, medusa_telemetry_1.track)("FEATURE_FLAGS_LOADED");
                    container.register((_b = {},
                        _b[utils_1.ContainerRegistrationKeys.LOGGER] = (0, awilix_1.asValue)(logger_1.default),
                        _b.featureFlagRouter = (0, awilix_1.asValue)(featureFlagRouter),
                        _b));
                    return [4 /*yield*/, (0, redis_1.default)({ container: container, configModule: configModule, logger: logger_1.default })];
                case 1:
                    _d.sent();
                    modelsActivity = logger_1.default.activity("Initializing models".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("MODELS_INIT_STARTED");
                    (0, models_1.default)({ container: container, rootDirectory: rootDirectory });
                    mAct = logger_1.default.success(modelsActivity, "Models initialized") || {};
                    (0, medusa_telemetry_1.track)("MODELS_INIT_COMPLETED", { duration: mAct.duration });
                    pmActivity = logger_1.default.activity("Initializing plugin models".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("PLUGIN_MODELS_INIT_STARTED");
                    return [4 /*yield*/, (0, plugins_1.registerPluginModels)({
                            rootDirectory: rootDirectory,
                            container: container,
                            configModule: configModule,
                        })];
                case 2:
                    _d.sent();
                    pmAct = logger_1.default.success(pmActivity, "Plugin models initialized") || {};
                    (0, medusa_telemetry_1.track)("PLUGIN_MODELS_INIT_COMPLETED", { duration: pmAct.duration });
                    stratActivity = logger_1.default.activity("Initializing strategies".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("STRATEGIES_INIT_STARTED");
                    (0, strategies_1.default)({ container: container, configModule: configModule, isTest: isTest });
                    stratAct = logger_1.default.success(stratActivity, "Strategies initialized") || {};
                    (0, medusa_telemetry_1.track)("STRATEGIES_INIT_COMPLETED", { duration: stratAct.duration });
                    return [4 /*yield*/, (0, pg_connection_1.default)({ container: container, configModule: configModule })];
                case 3:
                    pgConnection = _d.sent();
                    modulesActivity = logger_1.default.activity("Initializing modules".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("MODULES_INIT_STARTED");
                    return [4 /*yield*/, (0, modules_sdk_1.moduleLoader)({
                            container: container,
                            moduleResolutions: (0, modules_sdk_1.registerModules)(configModule === null || configModule === void 0 ? void 0 : configModule.modules),
                            logger: logger_1.default,
                        })];
                case 4:
                    _d.sent();
                    modAct = logger_1.default.success(modulesActivity, "Modules initialized") || {};
                    (0, medusa_telemetry_1.track)("MODULES_INIT_COMPLETED", { duration: modAct.duration });
                    dbActivity = logger_1.default.activity("Initializing database".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("DATABASE_INIT_STARTED");
                    return [4 /*yield*/, (0, database_1.default)({
                            container: container,
                            configModule: configModule,
                        })];
                case 5:
                    dbConnection = _d.sent();
                    dbAct = logger_1.default.success(dbActivity, "Database initialized") || {};
                    (0, medusa_telemetry_1.track)("DATABASE_INIT_COMPLETED", { duration: dbAct.duration });
                    repoActivity = logger_1.default.activity("Initializing repositories".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("REPOSITORIES_INIT_STARTED");
                    (0, repositories_1.default)({ container: container });
                    rAct = logger_1.default.success(repoActivity, "Repositories initialized") || {};
                    (0, medusa_telemetry_1.track)("REPOSITORIES_INIT_COMPLETED", { duration: rAct.duration });
                    container.register((_c = {},
                        _c[utils_1.ContainerRegistrationKeys.MANAGER] = (0, awilix_1.asValue)(database_1.dataSource.manager),
                        _c));
                    container.register("remoteQuery", (0, awilix_1.asValue)(null)); // ensure remoteQuery is always registered
                    if (!(featureFlagRouter.isFeatureEnabled(isolate_product_domain_1.default.key) ||
                        featureFlagRouter.isFeatureEnabled(isolate_pricing_domain_1.default.key))) return [3 /*break*/, 7];
                    return [4 /*yield*/, (0, medusa_app_1.default)({ configModule: configModule, container: container })];
                case 6:
                    _d.sent();
                    _d.label = 7;
                case 7:
                    servicesActivity = logger_1.default.activity("Initializing services".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("SERVICES_INIT_STARTED");
                    (0, services_1.default)({ container: container, configModule: configModule, isTest: isTest });
                    servAct = logger_1.default.success(servicesActivity, "Services initialized") || {};
                    (0, medusa_telemetry_1.track)("SERVICES_INIT_COMPLETED", { duration: servAct.duration });
                    expActivity = logger_1.default.activity("Initializing express".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("EXPRESS_INIT_STARTED");
                    return [4 /*yield*/, (0, express_1.default)({ app: expressApp, configModule: configModule })];
                case 8:
                    _d.sent();
                    return [4 /*yield*/, (0, passport_1.default)({ app: expressApp, container: container, configModule: configModule })];
                case 9:
                    _d.sent();
                    exAct = logger_1.default.success(expActivity, "Express intialized") || {};
                    (0, medusa_telemetry_1.track)("EXPRESS_INIT_COMPLETED", { duration: exAct.duration });
                    // Add the registered services to the request scope
                    expressApp.use(function (req, res, next) {
                        container.register({ manager: (0, awilix_1.asValue)(database_1.dataSource.manager) });
                        req.scope = container.createScope();
                        next();
                    });
                    pluginsActivity = logger_1.default.activity("Initializing plugins".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("PLUGINS_INIT_STARTED");
                    return [4 /*yield*/, (0, plugins_1.default)({
                            container: container,
                            rootDirectory: rootDirectory,
                            configModule: configModule,
                            app: expressApp,
                            activityId: pluginsActivity,
                        })];
                case 10:
                    _d.sent();
                    pAct = logger_1.default.success(pluginsActivity, "Plugins intialized") || {};
                    (0, medusa_telemetry_1.track)("PLUGINS_INIT_COMPLETED", { duration: pAct.duration });
                    subActivity = logger_1.default.activity("Initializing subscribers".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("SUBSCRIBERS_INIT_STARTED");
                    (0, subscribers_1.default)({ container: container });
                    subAct = logger_1.default.success(subActivity, "Subscribers initialized") || {};
                    (0, medusa_telemetry_1.track)("SUBSCRIBERS_INIT_COMPLETED", { duration: subAct.duration });
                    apiActivity = logger_1.default.activity("Initializing API".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("API_INIT_STARTED");
                    return [4 /*yield*/, (0, api_1.default)({ container: container, app: expressApp, configModule: configModule })];
                case 11:
                    _d.sent();
                    apiAct = logger_1.default.success(apiActivity, "API initialized") || {};
                    (0, medusa_telemetry_1.track)("API_INIT_COMPLETED", { duration: apiAct.duration });
                    defaultsActivity = logger_1.default.activity("Initializing defaults".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("DEFAULTS_INIT_STARTED");
                    return [4 /*yield*/, (0, defaults_1.default)({ container: container })];
                case 12:
                    _d.sent();
                    dAct = logger_1.default.success(defaultsActivity, "Defaults initialized") || {};
                    (0, medusa_telemetry_1.track)("DEFAULTS_INIT_COMPLETED", { duration: dAct.duration });
                    searchActivity = logger_1.default.activity("Initializing search engine indexing".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("SEARCH_ENGINE_INDEXING_STARTED");
                    return [4 /*yield*/, (0, search_index_1.default)({ container: container })];
                case 13:
                    _d.sent();
                    searchAct = logger_1.default.success(searchActivity, "Indexing event emitted") || {};
                    (0, medusa_telemetry_1.track)("SEARCH_ENGINE_INDEXING_COMPLETED", { duration: searchAct.duration });
                    return [2 /*return*/, { container: container, dbConnection: dbConnection, app: expressApp, pgConnection: pgConnection }];
            }
        });
    });
});
//# sourceMappingURL=index.js.map