var Promise = require("bluebird");
var fs = Promise.promisifyAll(require('fs-extra'));
var inquirer = require("inquirer");

var root = __dirname.replace(/2app\/lib/,'2app/');

var questions = [
    // ask about the name of the app
    {
        type: 'input',
        name: 'name',
        message: "What's the name of your project?"
    }
];


function create(){
    inquirer.prompt( questions, function( answers ) {
        return fs.copyAsync(root + 'template', answers.name, {clobber: true})
          .then(function(err){
            if (err) {
                  return console.error(err);
              } else {
                  console.log('Successfully generated a electron project "' + answers.name + '" in current directory.');
              }
          })
        // var opts = assign({dir: src}, answers);
        // packager(opts, function done (err, appPath) {
        //     if (err) throw err;
        //     console.log("The app have been packaged successfully in: " + appPath);
        // });
    });  

}
module.exports = create;