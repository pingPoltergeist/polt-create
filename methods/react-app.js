const copy = require('copy');
const { resolve } = require('path')
const { rename } = require('fs')
const { exec } = require("child_process");

const loading =  require('loading-cli');

exports.reactApp = function() {


    console.log(`STATUS: Generating File Structure . . .`);

    copy(resolve(__dirname, '../react-app/**/*'), '.', function(err, files) {
        if (err) throw err;

        console.log(`STATUS: File Structure Generated . . .`)
        console.log(`STATUS: Creating package.json . . .`)

        rename('package.txt', 'package.json', (err) => {
            if (err) throw err;
            console.log(`STATUS: package.json created . . .`)
            const load = loading(`STATUS: Installing dependencies (Please be patient) . . .`).start()

            exec("npm install", (err, stdout, stderr) => {
                if (err) throw err

                load.stop()
                console.log(`STATUS: Installing dependencies (Please be patient) . . .`)
                console.log(`Dependencies installed successfully . . .`)

                console.log(`\n || INSTALLATION SUCCESSFUL || \n`)
                console.log(`STATUS: Initiating Development Server . . .`)
                console.log('Press CTRL + C to stop');

                exec("npm start", (err, stdout, stderr) => {
                    if (err) throw err;
                });
            });
        });
    });

}