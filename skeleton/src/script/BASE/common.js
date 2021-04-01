
export function Common() {

    // On scroll hide cursor

    this.sayHello = function() {
        console.log('Hello');
    }

    // Execute all

    this.render = function() {
        let element
        for(element in this) {
            if(typeof this[element] === 'function' && element !== 'render') {
                this[element]()
            }
        }
    }
}

