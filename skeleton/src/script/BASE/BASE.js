import { Common } from './common.js'

export function BASE() {

    const scriptArray = {
        common: function() {
                const common = new Common()
                common.render()
            },
    }

    this.render = function() {
        let i
        for(i in scriptArray) {
            scriptArray[i]()
        }
    }

}