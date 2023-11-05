"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeModulesConfig = void 0;
var modules_sdk_1 = require("@medusajs/modules-sdk");
var is_object_1 = require("./is-object");
/**
 * Merge the modules config from the medusa-config file with the modules config from medusa package
 * @param modules
 * @param medusaInternalModulesConfig
 */
function mergeModulesConfig(modules, medusaInternalModulesConfig) {
    var e_1, _a;
    try {
        for (var _b = __values(Object.entries(modules)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), moduleName = _d[0], moduleConfig = _d[1];
            var moduleDefinition = modules_sdk_1.ModulesDefinition[moduleName];
            if (moduleDefinition === null || moduleDefinition === void 0 ? void 0 : moduleDefinition.isLegacy) {
                continue;
            }
            var isModuleEnabled = moduleConfig === true || (0, is_object_1.isObject)(moduleConfig);
            if (!isModuleEnabled) {
                delete medusaInternalModulesConfig[moduleName];
            }
            else {
                medusaInternalModulesConfig[moduleName] = moduleConfig;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
exports.mergeModulesConfig = mergeModulesConfig;
//# sourceMappingURL=merge-modules-config.js.map