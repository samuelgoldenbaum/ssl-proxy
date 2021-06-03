ssl-proxy
===============

[![Build Status](https://travis-ci.org/cameronhunter/local-ssl-proxy.svg?branch=master)](https://travis-ci.org/cameronhunter/local-ssl-proxy) [![NPM Version](https://img.shields.io/npm/v/local-ssl-proxy.svg)](https://npmjs.org/package/local-ssl-proxy) [![License](https://img.shields.io/npm/l/local-ssl-proxy.svg)](https://github.com/cameronhunter/local-ssl-proxy/blob/master/LICENSE.md)

Lightweight proxy for local HTTPS development using self-assigned SSL certificate.

Install
-------
```sh
npm install -g ssl-proxy
```

Run
---
```sh
ssl-proxy
```
Defaults to source port 80 and target 3000. To specify different ports, add the `--source` and `--target` parameters.
```sh
ssl-proxy --source 81 --target 3001
```

Warnings about self-assigned certificates are safe to ignore during development.
