var packager = require('electron-packager');
var fs = require('fs');
var exec = require('child_process').exec;

/**
 * Test if ./build/App.app exsit
 */
if (fs.existsSync('./build/App.app')) {
    console.log("App is already exsited, now re-builting...");
    exec('rm -r ./build/App.app/');
}

var opts = {
    dir: './',
    name: 'App',
    platform: 'all',
    arch: 'x64',
    version: 'v0.37.2',
    out: './build/.'
};
packager(opts, function done (err, appPath) {
    if (err) throw err;
    console.log("The app have been packaged successfully in: " + appPath);
});

// ia32, x64, all
// linux, win32, darwin, mas, all
// app-version
