#!/usr/bin/env node
import { Command, Option } from 'commander';
import createProxy, { Options } from './ssl-proxy';

const program = new Command();

program
  .addOption(new Option('-t, --target <port>', 'target port').default(3000))
  .addOption(new Option('-s, --source <port>', 'source port').default(80))
  .addOption(new Option('-h, --host <port>', 'host').default('127.0.0.1'));

program.parse(process.argv);

const options = program.opts() as Options;

createProxy(options);
