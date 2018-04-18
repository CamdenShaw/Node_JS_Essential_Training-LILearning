const EventEmitter = require("events").EventEmitter

class Person extends EventEmitter {
    constructor(name, options) {
        super(options)
        this.name = name
    }
}

const ben = new Person("Ben Franklin")

ben.on("speak", said => console.log(`${ben.name}: ${said}`))

ben.emit("speak", "You may delay, but time will not.")

// const emitter = new events.EventEmitter()

// emitter.on("customEvent", (message, status) => console.log(`${status}: ${message}`))

// emitter.emit("customEvent", "Hello World", 200)
