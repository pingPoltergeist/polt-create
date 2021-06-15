#!/usr/bin/env node
const {nextApp} = require("../methods/next-app");
const { onePager } = require('../methods/one-pager')
const { reactApp } = require('../methods/react-app')


const [,, ...args] = process.argv


if(args.length >= 2) {
    let len = args.length
    return console.log(`This method takes one argument. Received ${len}`);
}

else {
    if(args[0] === 'onepager' || args[0] === 'one-pager' || args[0] === 'onePager'){
        return onePager()
    }

    if(args[0] === 'reactapp' || args[0] === 'react-app' || args[0] === 'reactApp'){
        return reactApp()
    }

    if(args[0] === 'nextapp' || args[0] === 'next-app' || args[0] === 'nextApp'){
        return nextApp()
    }
    
    else {
        console.log('Argument not valid. Please double check');
    }
}



