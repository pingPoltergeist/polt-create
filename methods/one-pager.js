const copy = require('copy');
const { resolve } = require('path')
const { rename } = require('fs')
const { exec } = require("child_process");

exports.onePager = function() {

    console.log(`STATUS: Generating File Structure . . .`);

    copy(resolve(__dirname, '../skeleton/**/*'), '.', function(err, files) {
        if (err) throw err;

        console.log(`STATUS: File Structure Generated . . .`)
        console.log(`STATUS: Creating package.json . . .`)

        rename('package.txt', 'package.json', (err) => {
            if (err) throw err;
            console.log(`STATUS: package.json created . . .`)
            console.log(`STATUS: Installing dependencies (Please be patient) . . .`)

            exec("npm install", (err, stdout, stderr) => {
                if (err) throw err

                console.log(`\n || INSTALLATION SUCCESSFUL || \n`)    
                console.log(`STATUS: Initiating Development Server . . .`)
                console.log('Press CTRL + C to stop');

                exec("npm run dev", (err, stdout, stderr) => {
                    if (err) throw err;
                });
            });
        });
    });

}