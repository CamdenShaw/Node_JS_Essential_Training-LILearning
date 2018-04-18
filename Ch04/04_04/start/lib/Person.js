const EventEmitter = require("events").EventEmitter
// var util = require('util');

class Person extends EventEmitter {
    constructor(name, options) {
        super(options)
        this.name = name
    }

    speak(said) {
        console.log(`${this.name}: ${said}`)
    }
}

module.exports = Person
