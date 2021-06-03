import { createProxyServer } from 'http-proxy';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const cert = readFileSync(resolve(__dirname, '../..', 'resources', 'localhost.cert'), 'utf8');
const key = readFileSync(resolve(__dirname, '../..', 'resources', 'localhost.key'), 'utf8');

export interface Options {
  host: string;
  target: number;
  source: number;
}

let proxy = null;

export const createProxy = ({ host, target, source }: Options) => {
  proxy = createProxyServer({
    target: {
      host,
      port: target,
    },
    ssl: {
      cert,
      key,
    },
  }).on('error', (e: Error) => {
    console.error(e);
  }).listen(source);

  console.info(`Started https://${host}:${source} → http://${host}:${target}`);

  return proxy;
};

export const shutdownProxy = ((callback: () => void) => {
  proxy.close(callback);
});

export default createProxy;
