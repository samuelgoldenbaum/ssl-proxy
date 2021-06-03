import { createServer, Server } from 'http';
import * as request from 'supertest';
import createProxy, { shutdownProxy } from '../src/ssl-proxy';
import DoneCallback = jest.DoneCallback;

let server: Server = null;

const options = {
  source: 3001,
  target: 3000,
  host: 'localhost',
};

beforeAll(async (done: DoneCallback) => {
  try {
    server = createServer((req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('Hello world!');
      res.end();
    });

    server.listen(options.target, () => {
      console.info(`target up at ${options.target}`);
      done();
    });
  } catch (err) {
    done(err);
  }
});

afterAll(async (done) => {
  shutdownProxy(() => {
    server.close();
    server = null;
  });

  done();
});

describe('ssl-proxy tests', () => {
  it('can proxy', async (done) => {
    try {
      createProxy({
        host: options.host,
        source: options.source,
        target: options.target,
      });

      request(`https://${options.host}:${options.source}/`)
        .get('/')
        .trustLocalhost(true)
        .expect(200)
        .end((err, res) => {
          expect(res.text).toEqual('Hello world!');
          done();
        });
    } catch (e) {
      console.error(e);
      done(e);
    }
  });
});
