
// Import the object from other scripts of BASE
// Follow ./common.js for reference
import { Home } from './home-script.js'

export function HOME() {

    const scriptArray = {

        // Include all script objects
        // Follow the object 'Common' for reference

        common: function() {
            const home = new Home()
            home.render()
        },

    }

    // Execute all
    this.render = function() {
        let script
        for(script in scriptArray) {
            scriptArray[script]()
        }
    }

}