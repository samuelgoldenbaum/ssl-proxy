"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProxy = void 0;
var http_proxy_1 = require("http-proxy");
var fs_1 = require("fs");
var path_1 = require("path");
var cert = fs_1.readFileSync(path_1.resolve(__dirname, '../..', 'resources', 'localhost.cert'), 'utf8');
var key = fs_1.readFileSync(path_1.resolve(__dirname, '../..', 'resources', 'localhost.key'), 'utf8');
var createProxy = function (_a) {
    var host = _a.host, target = _a.target, source = _a.source;
    var proxy = http_proxy_1.createProxyServer({
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
exports.default = exports.createProxy;
//# sourceMappingURL=index.js.map