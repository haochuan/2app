var packager = require('electron-packager');
var fs = require('fs');
var exec = require('child_process').exec;

/**
 * Test if ./build/App.app exsit
 */
if (fs.existsSync('../build/JSOSC.app')) {
    console.log("App is already exsited, now re-builting...");
    exec('rm -r ../build/JSOSC.app/');
}

var opts = {
    dir: './',
    name: 'JSOSC',
    platform: 'darwin',
    arch: 'x64',
    version: '0.27.2',
    out: '../build/.'
};
packager(opts, function done (err, appPath) {
    if (err) throw err;
    console.log("The app have been packaged successfully in: " + appPath);
});
