"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var request = require("supertest");
var ssl_proxy_1 = require("../src/ssl-proxy");
var server = null;
var options = {
    source: 3001,
    target: 3000,
    host: 'localhost',
};
beforeAll(function (done) {
    try {
        server = (0, http_1.createServer)(function (req, res) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write('Hello world!');
            res.end();
        });
        server.listen(options.target, function () {
            console.info("target up at " + options.target);
            done();
        });
    }
    catch (err) {
        done(err);
    }
});
afterAll(function (done) {
    (0, ssl_proxy_1.shutdownProxy)(function () {
        server.close();
        server = null;
    });
    done();
});
describe('ssl-proxy tests', function () {
    it('can proxy', function (done) {
        try {
            (0, ssl_proxy_1.default)({
                host: options.host,
                source: options.source,
                target: options.target,
            });
            request("https://" + options.host + ":" + options.source + "/")
                .get('/')
                .trustLocalhost(true)
                .expect(200)
                .end(function (err, res) {
                expect(res.text).toEqual('Hello world!');
                done();
            });
        }
        catch (e) {
            console.error(e);
            done(e);
        }
    });
});
//# sourceMappingURL=index.test.js.map