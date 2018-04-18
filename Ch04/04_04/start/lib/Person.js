const EventEmitter = require("events").EventEmitter
// var util = require('util');

class Person extends EventEmitter {
    constructor(name, options) {
        super(options)
        this.name = name
    }
}

module.exports = Person
