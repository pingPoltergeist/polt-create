
export function Common() {

    this.sayHello = function() {
        console.log('Welcome to POLTERGEIST One-Page App');
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

