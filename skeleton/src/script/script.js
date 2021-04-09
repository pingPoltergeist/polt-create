
import { BASE } from './BASE/BASE.js'
import { HOME } from './HOME/HOME.js'


const scriptArray = {
    BASE: function() {
            const base = new BASE()
            base.render()
        },
    HOME: function() {
            const home = new HOME()
            home.render()
        },
}


let element
for(element in scriptArray) {
    scriptArray[element]()
}