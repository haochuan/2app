/**
 *
 * 2app
 * 2016-03-23
 *
 * Haochuan Liu <haochuan.liu@gmail.com>
 * http://haochuan.io
 *
 */
#! /usr/bin/env node

var program = require('commander'),
    gs = require('../lib/structure');

program
  .version(require('../package.json').version)
  .usage('[options] [project name]')
  .parse(process.argv);

var pname = program.args[0]

if (!pname) {
    program.help();
} else {
    gs(pname);
}

