
export function Home() {

    this.sayHello = function() {
        console.log('The script from your folder HOME is working');
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