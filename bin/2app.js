#! /usr/bin/env node

var program = require('commander'),
    create = require('../lib/create'),
    pack = require('../lib/pack');

program
  .version(require('../package.json').version)
  .command('<create>', 'Create the HTML/CSS/JS template for electron in your current directory.')
  .command('<pack> [dir]', 'Build and pack the src into native app. <dir> is the path/directory for the src files.')
  .parse(process.argv);

var command = program.args[0];
var pname = program.args[1];

if (!command) {
    console.error('Command not found.');
    program.help();
} else {
    if (command === 'create') {
        create(pname);
    } else if (command === 'pack') {
        if (!pname) {
            console.error('Target dir not found.');
            program.help();
        } else {
            pack(pname);
        }
    } else {
        console.error('Command not found. Type "2app -h" to get more infos.');
    }
}


