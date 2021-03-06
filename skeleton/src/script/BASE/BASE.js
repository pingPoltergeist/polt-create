
// Import the object from other scripts of BASE
// Follow ./common.js for reference
import { Common } from './common.js'

export function BASE() {

    const scriptArray = {

        // Include all script objects
        // Follow the object 'Common' for reference

        common: function() {
                    const common = new Common()
                    common.render()
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