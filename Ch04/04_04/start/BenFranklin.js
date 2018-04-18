const EventEmitter = require("events").EventEmitter
// var util = require('util');

class Person extends EventEmitter {
    constructor(name, options) {
        super(options)
        this.name = name
    }
}

// util.inherits(Person, EventEmitter);

const ben = new Person("Ben Franklin")

ben.on("speak", function(said) {
    console.log(`${this.name}: ${said}`)
})

ben.emit("speak", "You may delay, but time will not.")
