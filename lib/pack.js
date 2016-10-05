/**
 *
 * 2app
 * 2016-05-13
 *
 * Haochuan Liu <haochuan.liu@gmail.com>
 * http://haochuan.io
 *
 */
var inquirer = require("inquirer");
var packager = require('electron-packager');
var fs = require('fs');
var assign = require('object-assign');
var exec = require('child_process').exec;

var questions = [
    // ask about the name of the app
    {
        type: 'input',
        name: 'name',
        message: "What's the name of your App?"
    },
    // ask about the version of the app
    {
        type: 'input',
        name: 'app-version',
        message: "What's the version of your App?"
    },
    // platform
    {
        type: 'list',
        name: 'platform',
        message: "Select your App's target platform: ",
        choices: [
            "linux",
            "win32",
            "darwin"
        ]
    },
    // arch
    {
        type: 'list',
        name: 'arch',
        message: "Select your App's architecture: ",
        choices: [
            "ia32",
            "x64"
        ]
    }
    // ask about electron version
    // {
    //     type: 'input',
    //     name: 'version',
    //     message: "Enter the Electron version to build your App, you can find the version list here: https://github.com/atom/electron/releases. For example, you can enter: 0.37.2"
    // }
];

var pack = function(src) {
    inquirer.prompt( questions, function( answers ) {
        /**
         * Test if ./build/App.app exsit
         */
        var destPath = './' + answers.name;
        switch (answers.platform) {
            case 'linux':
                destPath += '-linux';
                break;
            case 'win32':
                destPath += '-linux';
                break;
            case 'darwin':
                destPath += '.app';
                break;
        }
        if (fs.existsSync(destPath)) {
            console.log(answers.name + " is already exsited in the current directory, now re-builting...");
            exec('rm -r ' + destPath);
        }
        var opts = assign({dir: src}, answers, {version: "1.4.2"});
        packager(opts, function done (err, appPath) {
            if (err) throw err;
            console.log("The app have been packaged successfully in: " + appPath);
        });
    });  
}

module.exports = pack;

