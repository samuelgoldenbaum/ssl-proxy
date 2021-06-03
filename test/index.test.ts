import { createServer, Server } from 'http';
import * as request from 'supertest';
import createProxy, { shutdownProxy } from '../src/ssl-proxy';
import DoneCallback = jest.DoneCallback;

let server: Server = null;

beforeAll(async (done: DoneCallback) => {
  try {
    server = createServer((req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('Hello world!');
      res.end();
    });

    server.listen(3000, () => {
      console.info(`target up at ${3000}`);
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
        host: 'localhost',
        source: 80,
        target: 3000,
      });

      request('https://localhost:80/')
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
