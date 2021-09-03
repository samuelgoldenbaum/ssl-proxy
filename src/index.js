#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var ssl_proxy_1 = require("./ssl-proxy");
var program = new commander_1.Command();
program
    .addOption(new commander_1.Option('-t, --target <port>', 'target port').default(3000))
    .addOption(new commander_1.Option('-s, --source <port>', 'source port').default(3001))
    .addOption(new commander_1.Option('-h, --host <port>', 'host').default('localhost'));
program.parse(process.argv);
var options = program.opts();
(0, ssl_proxy_1.default)(options);
//# sourceMappingURL=index.js.map