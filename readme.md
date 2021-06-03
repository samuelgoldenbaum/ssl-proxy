ssl-proxy
===============
[![Build Status](https://travis-ci.com/samuelgoldenbaum/ssl-proxy.svg?branch=master)](https://travis-ci.com/samuelgoldenbaum/ssl-proxy)

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
Defaults to source port 3001 and target 3000. To specify different ports, add the `--source` and `--target` parameters.
```sh
ssl-proxy --source 80 --target 3001
```

Warnings about self-assigned certificates are safe to ignore during development.
