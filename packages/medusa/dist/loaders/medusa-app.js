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
exports.loadMedusaApp = void 0;
var modules_sdk_1 = require("@medusajs/modules-sdk");
var utils_1 = require("@medusajs/utils");
var awilix_1 = require("awilix");
var joiner_config_1 = require("../joiner-config");
var merge_modules_config_1 = require("../utils/merge-modules-config");
var modules_config_1 = __importDefault(require("../modules-config"));
var __1 = require("..");
var loadMedusaApp = function (_a, config) {
    var configModule = _a.configModule, container = _a.container;
    if (config === void 0) { config = { registerInContainer: true }; }
    return __awaiter(void 0, void 0, void 0, function () {
        var injectedDependencies, sharedResourcesConfig, medusaApp, query, modules, _b, _c, _d, serviceKey, moduleService;
        var _e, e_1, _f;
        var _g;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    (0, merge_modules_config_1.mergeModulesConfig)((_g = configModule.modules) !== null && _g !== void 0 ? _g : {}, modules_config_1.default);
                    injectedDependencies = (_e = {},
                        _e[utils_1.ContainerRegistrationKeys.PG_CONNECTION] = container.resolve(utils_1.ContainerRegistrationKeys.PG_CONNECTION),
                        _e);
                    sharedResourcesConfig = {
                        database: {
                            clientUrl: configModule.projectConfig.database_url,
                            driverOptions: configModule.projectConfig.database_extra,
                        },
                    };
                    return [4 /*yield*/, (0, modules_sdk_1.MedusaApp)({
                            modulesConfig: modules_config_1.default,
                            servicesConfig: joiner_config_1.joinerConfig,
                            remoteFetchData: (0, __1.remoteQueryFetchData)(container),
                            sharedContainer: container,
                            sharedResourcesConfig: sharedResourcesConfig,
                            injectedDependencies: injectedDependencies,
                        })];
                case 1:
                    medusaApp = _h.sent();
                    if (!config.registerInContainer) {
                        return [2 /*return*/, medusaApp];
                    }
                    container.register("remoteLink", (0, awilix_1.asValue)(medusaApp.link));
                    query = medusaApp.query, modules = medusaApp.modules;
                    try {
                        // Medusa app load all non legacy modules, so we need to register them in the container since they are into their own container
                        // We might decide to do it elsewhere but for now I think it is fine
                        for (_b = __values(Object.entries(modules)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            _d = __read(_c.value, 2), serviceKey = _d[0], moduleService = _d[1];
                            container.register(modules_sdk_1.ModulesDefinition[serviceKey].registrationName, (0, awilix_1.asValue)(moduleService));
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_f = _b.return)) _f.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    container.register("remoteQuery", (0, awilix_1.asValue)(query));
                    return [2 /*return*/, medusaApp];
            }
        });
    });
};
exports.loadMedusaApp = loadMedusaApp;
exports.default = exports.loadMedusaApp;
//# sourceMappingURL=medusa-app.js.map