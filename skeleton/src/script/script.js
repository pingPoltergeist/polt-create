
import { BASE } from './BASE/BASE.js'


const scriptArray = {
    BASE: function() {
            const base = new BASE()
            base.render()
        },
}


let element
for(element in scriptArray) {
    scriptArray[element]()
}