/**
 *
 * 2app
 * 2016-03-23
 *
 * Haochuan Liu <haochuan.liu@gmail.com>
 * http://haochuan.io
 *
 */


var program = require('commander'),
    pack = require('../lib/pack');

program
  .version(require('../package.json').version)
  .usage('[project src]')
  .parse(process.argv);

var pname = program.args[0]

if (!pname) {
    program.help();
} else {
    pack(pname);
}

