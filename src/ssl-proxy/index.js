"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shutdownProxy = exports.createProxy = void 0;
var http_proxy_1 = require("http-proxy");
var fs_1 = require("fs");
var path_1 = require("path");
var cert = (0, fs_1.readFileSync)((0, path_1.resolve)(__dirname, '../..', 'resources', 'localhost.cert'), 'utf8');
var key = (0, fs_1.readFileSync)((0, path_1.resolve)(__dirname, '../..', 'resources', 'localhost.key'), 'utf8');
var proxy = null;
var createProxy = function (_a) {
    var host = _a.host, target = _a.target, source = _a.source;
    proxy = (0, http_proxy_1.createProxyServer)({
        target: {
            host: host,
            port: target,
        },
        ssl: {
            cert: cert,
            key: key,
        },
    }).on('error', function (e) {
        console.error(e);
    }).listen(source);
    console.info("Started https://" + host + ":" + source + " \u2192 http://" + host + ":" + target);
    return proxy;
};
exports.createProxy = createProxy;
exports.shutdownProxy = (function (callback) {
    proxy.close(callback);
});
exports.default = exports.createProxy;
//# sourceMappingURL=index.js.map