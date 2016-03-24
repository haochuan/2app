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
            "darwin",
            "mas"
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
    },
    // ask about electron version
    {
        type: 'input',
        name: 'version',
        message: "Enter the Electron version to build your App, you can find the version list here: https://github.com/atom/electron/releases. For example, you can enter: 0.37.2"
    }
];

var pack = function(src) {
    inquirer.prompt( questions, function( answers ) {
        /**
         * Test if ./build/App.app exsit
         */
        if (fs.existsSync('./' + answers.name + '.app')) {
            console.log(answers.name + " is already exsited, now re-builting...");
            exec('rm -r ' + './' + answers.name + '.app');
        }
        var opts = assign({dir: src}, answers);
        packager(opts, function done (err, appPath) {
            if (err) throw err;
            console.log("The app have been packaged successfully in: " + appPath);
        });
    });  
}

module.exports = pack;

