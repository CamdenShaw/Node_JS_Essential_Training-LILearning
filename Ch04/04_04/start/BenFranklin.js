// const EventEmitter = require("events").EventEmitter
// var util = require('util');
const Person = require("./lib/Person")

// class Person extends EventEmitter {
//     constructor(name, options) {
//         super(options)
//         this.name = name
//     }
// }

// util.inherits(Person, EventEmitter);

const ben = new Person("Ben Franklin")
const george = new Person("George Washington")

// for 'this' to refer to the object it is in rather than the program's globals you must use a function rather than an arrow function
ben.on("speak", function(said) {
    console.log(`${this.name}: ${said}`)
})

george.on("speak", function(said) {
    console.log(`${this.name} -> ${said}`)
})

ben.emit("speak", "You may delay, but time will not.")

george.emit("speak", "It is far better to be alone than in to be in bad company.")
