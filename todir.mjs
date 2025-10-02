#!/usr/bin/env node

import { createRequire } from 'node:module'
import CLI from './lib/cli.mjs';

const require = createRequire(import.meta.url);
const { name, version } = require('./package.json');

CLI(async function todir(args, opts={}){
    console.log(`${name} ${version}`, {args, opts});
});
