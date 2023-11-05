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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
exports.RoutesLoader = void 0;
var cors_1 = __importDefault(require("cors"));
var express_1 = require("express");
var promises_1 = require("fs/promises");
var medusa_core_utils_1 = require("medusa-core-utils");
var path_1 = require("path");
var middlewares_1 = require("../../../api/middlewares");
var logger_1 = __importDefault(require("../../logger"));
var types_1 = require("./types");
var log = function (_a) {
    var activityId = _a.activityId, message = _a.message;
    if (activityId) {
        logger_1.default.progress(activityId, message);
        return;
    }
    logger_1.default.info(message);
};
/**
 * File name that is used to indicate that the file is a route file
 */
var ROUTE_NAME = "route";
/**
 * Flag that developers can export from their route files to indicate
 * whether or not the route should be authenticated or not.
 */
var AUTHTHENTICATE = "AUTHENTICATE";
/**
 * File name for the global middlewares file
 */
var MIDDLEWARES_NAME = "middlewares";
var pathSegmentReplacer = {
    "\\[\\.\\.\\.\\]": function () { return "*"; },
    "\\[(\\w+)?": function (param) { return ":".concat(param); },
    "\\]": function () { return ""; },
};
/**
 * @param routes - The routes to prioritize
 *
 * @return An array of sorted
 * routes based on their priority
 */
var prioritize = function (routes) {
    return routes.sort(function (a, b) {
        return a.priority - b.priority;
    });
};
/**
 * The smaller the number the higher the priority with zero indicating
 * highest priority
 *
 * @param path - The path to calculate the priority for
 *
 * @return An integer ranging from `0` to `Infinity`
 */
function calculatePriority(path) {
    var _a, _b, _c;
    var depth = ((_a = path.match(/\/.+?/g)) === null || _a === void 0 ? void 0 : _a.length) || 0;
    var specifity = ((_b = path.match(/\/:.+?/g)) === null || _b === void 0 ? void 0 : _b.length) || 0;
    var catchall = (((_c = path.match(/\/\*/g)) === null || _c === void 0 ? void 0 : _c.length) || 0) > 0 ? Infinity : 0;
    return depth + specifity + catchall;
}
var RoutesLoader = /** @class */ (function () {
    function RoutesLoader(_a) {
        var _b;
        var app = _a.app, activityId = _a.activityId, rootDir = _a.rootDir, configModule = _a.configModule, _c = _a.excludes, excludes = _c === void 0 ? [] : _c;
        this.routesMap = new Map();
        this.excludes = [
            /\.DS_Store/,
            /(\.ts\.map|\.js\.map|\.d\.ts)/,
            /^_[^/\\]*(\.[^/\\]+)?$/,
        ];
        this.app = app;
        this.activityId = activityId;
        this.rootDir = rootDir;
        this.configModule = configModule;
        (_b = this.excludes).push.apply(_b, __spreadArray([], __read((excludes !== null && excludes !== void 0 ? excludes : [])), false));
    }
    /**
     * Validate the route config and display a log info if
     * it should be ignored or skipped.
     *
     * @param {GlobalMiddlewareDescriptor} descriptor
     * @param {MiddlewaresConfig} config
     *
     * @return {void}
     */
    RoutesLoader.prototype.validateMiddlewaresConfig = function (_a) {
        var e_1, _b;
        var config = _a.config;
        if (!(config === null || config === void 0 ? void 0 : config.routes)) {
            log({
                activityId: this.activityId,
                message: "No middleware routes found. Skipping middleware application.",
            });
            return;
        }
        try {
            for (var _c = __values(config.routes), _d = _c.next(); !_d.done; _d = _c.next()) {
                var route = _d.value;
                if (!route.matcher) {
                    throw new Error("Route is missing a `matcher` field. The 'matcher' field is required when applying middleware to this route.");
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Take care of replacing the special path segments
     * to an express specific path segment
     *
     * @param route - The route to parse
     *
     * @example
     * "/admin/orders/[id]/route.ts => "/admin/orders/:id/route.ts"
     */
    RoutesLoader.prototype.parseRoute = function (route) {
        var e_2, _a, e_3, _b;
        var route_ = route;
        try {
            for (var _c = __values(Object.entries(pathSegmentReplacer)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var config = _d.value;
                var _e = __read(config, 2), searchFor = _e[0], replacedByFn = _e[1];
                var replacer = new RegExp(searchFor, "g");
                var matches = __spreadArray([], __read(route_.matchAll(replacer)), false);
                var parameters = new Set();
                try {
                    for (var matches_1 = (e_3 = void 0, __values(matches)), matches_1_1 = matches_1.next(); !matches_1_1.done; matches_1_1 = matches_1.next()) {
                        var match = matches_1_1.value;
                        if ((match === null || match === void 0 ? void 0 : match[1]) && !Number.isInteger(match === null || match === void 0 ? void 0 : match[1])) {
                            if (parameters.has(match === null || match === void 0 ? void 0 : match[1])) {
                                log({
                                    activityId: this.activityId,
                                    message: "Duplicate parameters found in route ".concat(route, " (").concat(match === null || match === void 0 ? void 0 : match[1], ")"),
                                });
                                throw new Error("Duplicate parameters found in route ".concat(route, " (").concat(match === null || match === void 0 ? void 0 : match[1], "). Make sure that all parameters are unique."));
                            }
                            parameters.add(match === null || match === void 0 ? void 0 : match[1]);
                        }
                        route_ = route_.replace(match[0], replacedByFn(match === null || match === void 0 ? void 0 : match[1]));
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (matches_1_1 && !matches_1_1.done && (_b = matches_1.return)) _b.call(matches_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                var extension = (0, path_1.extname)(route_);
                if (extension) {
                    route_ = route_.replace(extension, "");
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        route = route_;
        return route;
    };
    /**
     * Load the file content from a descriptor and retrieve the verbs and handlers
     * to be assigned to the descriptor
     *
     * @return {Promise<void>}
     */
    RoutesLoader.prototype.createRoutesConfig = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(__spreadArray([], __read(this.routesMap.values()), false).map(function (descriptor) { return __awaiter(_this, void 0, void 0, function () {
                            var absolutePath;
                            var _this = this;
                            return __generator(this, function (_a) {
                                var _b;
                                switch (_a.label) {
                                    case 0:
                                        absolutePath = descriptor.absolutePath;
                                        return [4 /*yield*/, (_b = absolutePath, Promise.resolve().then(function () { return __importStar(require(_b)); })).then(function (import_) {
                                                var e_4, _a;
                                                var _b, _c;
                                                var map = _this.routesMap;
                                                var config = {
                                                    routes: [],
                                                    shouldRequireAdminAuth: false,
                                                    shouldRequireCustomerAuth: false,
                                                    shouldAppendCustomer: false,
                                                };
                                                /**
                                                 * If the developer has not exported the authenticate flag
                                                 * we default to true.
                                                 */
                                                var shouldRequireAuth = import_[AUTHTHENTICATE] !== undefined
                                                    ? import_[AUTHTHENTICATE]
                                                    : true;
                                                if (shouldRequireAuth &&
                                                    absolutePath.includes((0, path_1.join)("api", "admin"))) {
                                                    config.shouldRequireAdminAuth = shouldRequireAuth;
                                                }
                                                if (shouldRequireAuth &&
                                                    absolutePath.includes((0, path_1.join)("api", "store", "me"))) {
                                                    config.shouldRequireCustomerAuth = shouldRequireAuth;
                                                }
                                                if (absolutePath.includes((0, path_1.join)("api", "store"))) {
                                                    config.shouldAppendCustomer = true;
                                                }
                                                var handlers = Object.keys(import_).filter(function (key) {
                                                    /**
                                                     * Filter out any export that is not a function
                                                     */
                                                    return typeof import_[key] === "function";
                                                });
                                                try {
                                                    for (var handlers_1 = __values(handlers), handlers_1_1 = handlers_1.next(); !handlers_1_1.done; handlers_1_1 = handlers_1.next()) {
                                                        var handler = handlers_1_1.value;
                                                        if (types_1.HTTP_METHODS.includes(handler)) {
                                                            (_b = config.routes) === null || _b === void 0 ? void 0 : _b.push({
                                                                method: handler,
                                                                handler: import_[handler],
                                                            });
                                                        }
                                                        else {
                                                            log({
                                                                activityId: _this.activityId,
                                                                message: "Skipping handler ".concat(handler, " in ").concat(absolutePath, ". Invalid HTTP method: ").concat(handler, "."),
                                                            });
                                                        }
                                                    }
                                                }
                                                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                                                finally {
                                                    try {
                                                        if (handlers_1_1 && !handlers_1_1.done && (_a = handlers_1.return)) _a.call(handlers_1);
                                                    }
                                                    finally { if (e_4) throw e_4.error; }
                                                }
                                                if (!((_c = config.routes) === null || _c === void 0 ? void 0 : _c.length)) {
                                                    log({
                                                        activityId: _this.activityId,
                                                        message: "No valid route handlers detected in ".concat(absolutePath, ". Skipping route configuration."),
                                                    });
                                                    map.delete(absolutePath);
                                                    return;
                                                }
                                                descriptor.config = config;
                                                map.set(absolutePath, descriptor);
                                            })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RoutesLoader.prototype.createRoutesDescriptor = function (_a) {
        var childPath = _a.childPath, parentPath = _a.parentPath;
        var descriptor = {
            absolutePath: childPath,
            relativePath: "",
            route: "",
            priority: Infinity,
        };
        if (parentPath) {
            childPath = childPath.replace(parentPath, "");
        }
        descriptor.relativePath = childPath;
        var routeToParse = childPath;
        var pathSegments = childPath.split(path_1.sep);
        var lastSegment = pathSegments[pathSegments.length - 1];
        if (lastSegment.startsWith("route")) {
            pathSegments.pop();
            routeToParse = pathSegments.join("/");
        }
        descriptor.route = this.parseRoute(routeToParse);
        descriptor.priority = calculatePriority(descriptor.route);
        this.routesMap.set(childPath, descriptor);
    };
    RoutesLoader.prototype.createMiddlewaresDescriptor = function (_a) {
        var dirPath = _a.dirPath;
        return __awaiter(this, void 0, void 0, function () {
            var files, middlewareFilePath, absolutePath, error_1;
            var _this = this;
            return __generator(this, function (_b) {
                var _c;
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, promises_1.readdir)(dirPath)];
                    case 1:
                        files = _b.sent();
                        middlewareFilePath = files
                            .filter(function (path) {
                            if (_this.excludes.length &&
                                _this.excludes.some(function (exclude) { return exclude.test(path); })) {
                                return false;
                            }
                            return true;
                        })
                            .find(function (file) {
                            return file.replace(/\.[^/.]+$/, "") === MIDDLEWARES_NAME;
                        });
                        if (!middlewareFilePath) {
                            log({
                                activityId: this.activityId,
                                message: "No middleware files found in ".concat(dirPath, ". Skipping middleware configuration."),
                            });
                            return [2 /*return*/];
                        }
                        absolutePath = (0, path_1.join)(dirPath, middlewareFilePath);
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, (_c = absolutePath, Promise.resolve().then(function () { return __importStar(require(_c)); })).then(function (import_) {
                                var _a;
                                var middlewaresConfig = import_.config;
                                if (!middlewaresConfig) {
                                    log({
                                        activityId: _this.activityId,
                                        message: "No middleware configuration found in ".concat(absolutePath, ". Skipping middleware configuration."),
                                    });
                                    return;
                                }
                                middlewaresConfig.routes = (_a = middlewaresConfig.routes) === null || _a === void 0 ? void 0 : _a.map(function (route) {
                                    var _a;
                                    return __assign(__assign({}, route), { method: (_a = route.method) !== null && _a !== void 0 ? _a : "USE" });
                                });
                                var descriptor = {
                                    config: middlewaresConfig,
                                };
                                _this.validateMiddlewaresConfig(descriptor);
                                _this.globalMiddlewaresDescriptor = descriptor;
                            })];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _b.sent();
                        log({
                            activityId: this.activityId,
                            message: "Failed to load middleware configuration in ".concat(absolutePath, ". Skipping middleware configuration."),
                        });
                        return [2 /*return*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    RoutesLoader.prototype.createRoutesMap = function (_a) {
        var dirPath = _a.dirPath, parentPath = _a.parentPath;
        return __awaiter(this, void 0, void 0, function () {
            var _b, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _c = (_b = Promise).all;
                        return [4 /*yield*/, (0, promises_1.readdir)(dirPath, { withFileTypes: true }).then(function (entries) {
                                return entries
                                    .filter(function (entry) {
                                    if (_this.excludes.length &&
                                        _this.excludes.some(function (exclude) { return exclude.test(entry.name); })) {
                                        return false;
                                    }
                                    var name = entry.name;
                                    var extension = (0, path_1.extname)(name);
                                    if (extension) {
                                        name = name.replace(extension, "");
                                    }
                                    if (entry.isFile() && name !== ROUTE_NAME) {
                                        return false;
                                    }
                                    return true;
                                })
                                    .map(function (entry) { return __awaiter(_this, void 0, void 0, function () {
                                    var childPath;
                                    return __generator(this, function (_a) {
                                        childPath = (0, path_1.join)(dirPath, entry.name);
                                        if (entry.isDirectory()) {
                                            return [2 /*return*/, this.createRoutesMap({
                                                    dirPath: childPath,
                                                    parentPath: parentPath !== null && parentPath !== void 0 ? parentPath : dirPath,
                                                })];
                                        }
                                        return [2 /*return*/, this.createRoutesDescriptor({
                                                childPath: childPath,
                                                parentPath: parentPath,
                                            })];
                                    });
                                }); })
                                    .flat(Infinity);
                            })];
                    case 1: return [4 /*yield*/, _c.apply(_b, [_d.sent()])];
                    case 2:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RoutesLoader.prototype.registerRoutes = function () {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var prioritizedRoutes, prioritizedRoutes_1, prioritizedRoutes_1_1, descriptor, routes, routes_1, routes_1_1, route;
            var e_5, _d, e_6, _e;
            return __generator(this, function (_f) {
                prioritizedRoutes = prioritize(__spreadArray([], __read(this.routesMap.values()), false));
                try {
                    for (prioritizedRoutes_1 = __values(prioritizedRoutes), prioritizedRoutes_1_1 = prioritizedRoutes_1.next(); !prioritizedRoutes_1_1.done; prioritizedRoutes_1_1 = prioritizedRoutes_1.next()) {
                        descriptor = prioritizedRoutes_1_1.value;
                        if (!((_b = (_a = descriptor.config) === null || _a === void 0 ? void 0 : _a.routes) === null || _b === void 0 ? void 0 : _b.length)) {
                            continue;
                        }
                        routes = descriptor.config.routes;
                        if (descriptor.config.shouldAppendCustomer) {
                            this.app.use(descriptor.route, (0, middlewares_1.authenticateCustomer)());
                        }
                        if (descriptor.config.shouldRequireAdminAuth) {
                            this.app.use(descriptor.route, (0, middlewares_1.authenticate)());
                        }
                        if (descriptor.config.shouldRequireCustomerAuth) {
                            this.app.use(descriptor.route, (0, middlewares_1.requireCustomerAuthentication)());
                        }
                        try {
                            for (routes_1 = (e_6 = void 0, __values(routes)), routes_1_1 = routes_1.next(); !routes_1_1.done; routes_1_1 = routes_1.next()) {
                                route = routes_1_1.value;
                                log({
                                    activityId: this.activityId,
                                    message: "Registering route [".concat((_c = route.method) === null || _c === void 0 ? void 0 : _c.toUpperCase(), "] - ").concat(descriptor.route),
                                });
                                this.app[route.method.toLowerCase()](descriptor.route, route.handler);
                            }
                        }
                        catch (e_6_1) { e_6 = { error: e_6_1 }; }
                        finally {
                            try {
                                if (routes_1_1 && !routes_1_1.done && (_e = routes_1.return)) _e.call(routes_1);
                            }
                            finally { if (e_6) throw e_6.error; }
                        }
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (prioritizedRoutes_1_1 && !prioritizedRoutes_1_1.done && (_d = prioritizedRoutes_1.return)) _d.call(prioritizedRoutes_1);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
                return [2 /*return*/];
            });
        });
    };
    RoutesLoader.prototype.registerMiddlewares = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var descriptor, routes, routes_2, routes_2_1, route, _c, _d, method;
            var e_7, _e, e_8, _f, _g, _h;
            return __generator(this, function (_j) {
                descriptor = this.globalMiddlewaresDescriptor;
                if (!descriptor) {
                    return [2 /*return*/];
                }
                if (!((_b = (_a = descriptor.config) === null || _a === void 0 ? void 0 : _a.routes) === null || _b === void 0 ? void 0 : _b.length)) {
                    return [2 /*return*/];
                }
                routes = descriptor.config.routes;
                try {
                    for (routes_2 = __values(routes), routes_2_1 = routes_2.next(); !routes_2_1.done; routes_2_1 = routes_2.next()) {
                        route = routes_2_1.value;
                        if (Array.isArray(route.method)) {
                            try {
                                for (_c = (e_8 = void 0, __values(route.method)), _d = _c.next(); !_d.done; _d = _c.next()) {
                                    method = _d.value;
                                    log({
                                        activityId: this.activityId,
                                        message: "Registering middleware [".concat(method, "] - ").concat(route.matcher),
                                    });
                                    (_g = this.app)[method.toLowerCase()].apply(_g, __spreadArray([route.matcher], __read(route.middlewares), false));
                                }
                            }
                            catch (e_8_1) { e_8 = { error: e_8_1 }; }
                            finally {
                                try {
                                    if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                                }
                                finally { if (e_8) throw e_8.error; }
                            }
                        }
                        else {
                            log({
                                activityId: this.activityId,
                                message: "Registering middleware [".concat(route.method, "] - ").concat(route.matcher),
                            });
                            (_h = this.app)[route.method.toLowerCase()].apply(_h, __spreadArray([route.matcher], __read(route.middlewares), false));
                        }
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (routes_2_1 && !routes_2_1.done && (_e = routes_2.return)) _e.call(routes_2);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
                return [2 /*return*/];
            });
        });
    };
    RoutesLoader.prototype.applyGlobalMiddlewares = function () {
        if (this.routesMap.size > 0) {
            this.app.use((0, express_1.json)(), (0, express_1.urlencoded)({ extended: true }));
            var adminCors = this.configModule.projectConfig.admin_cors || "";
            this.app.use("/admin", (0, cors_1.default)({
                origin: (0, medusa_core_utils_1.parseCorsOrigins)(adminCors),
                credentials: true,
            }));
            var storeCors = this.configModule.projectConfig.store_cors || "";
            this.app.use("/store", (0, cors_1.default)({ origin: (0, medusa_core_utils_1.parseCorsOrigins)(storeCors), credentials: true }));
        }
    };
    RoutesLoader.prototype.load = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var apiExists, _error_1, timeSpent;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        performance && performance.mark("file-base-routing-start" + this.rootDir);
                        apiExists = true;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (0, promises_1.readdir)(this.rootDir)];
                    case 2:
                        _c.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _error_1 = _c.sent();
                        apiExists = false;
                        return [3 /*break*/, 4];
                    case 4:
                        if (!apiExists) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.createMiddlewaresDescriptor({ dirPath: this.rootDir })];
                    case 5:
                        _c.sent();
                        return [4 /*yield*/, this.createRoutesMap({ dirPath: this.rootDir })];
                    case 6:
                        _c.sent();
                        return [4 /*yield*/, this.createRoutesConfig()];
                    case 7:
                        _c.sent();
                        this.applyGlobalMiddlewares();
                        return [4 /*yield*/, this.registerMiddlewares()];
                    case 8:
                        _c.sent();
                        return [4 /*yield*/, this.registerRoutes()];
                    case 9:
                        _c.sent();
                        _c.label = 10;
                    case 10:
                        performance && performance.mark("file-base-routing-end" + this.rootDir);
                        timeSpent = performance &&
                            ((_b = (_a = performance
                                .measure("file-base-routing-measure" + this.rootDir, "file-base-routing-start" + this.rootDir, "file-base-routing-end" + this.rootDir)) === null || _a === void 0 ? void 0 : _a.duration) === null || _b === void 0 ? void 0 : _b.toFixed(2));
                        log({
                            activityId: this.activityId,
                            message: "Routes loaded in ".concat(timeSpent, " ms"),
                        });
                        this.routesMap.clear();
                        this.globalMiddlewaresDescriptor = undefined;
                        return [2 /*return*/];
                }
            });
        });
    };
    return RoutesLoader;
}());
exports.RoutesLoader = RoutesLoader;
exports.default = RoutesLoader;
//# sourceMappingURL=index.js.map