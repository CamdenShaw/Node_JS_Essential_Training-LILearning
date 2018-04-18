const readline = require("readline")

let rl = readline.createInterface(process.stdin, process.stdout)
let realPerson = {
    name: "",
    quotes: []
}

rl.question("What is the name of a real person? ", answer => {
    realPerson.name = answer
    rl.setPrompt(`What would ${realPerson.name} say? `)
    rl.prompt()
    rl.on("line", quote => {
        quote === "exit" && rl.close()
        rl.setPrompt(`What else would ${realPerson.name} say? (type 'exit' to leave) `)
        realPerson.quotes.push(quote.trim())
        console.log(quote.trim())
        rl.prompt()
    })
})

rl.on("close", () => {
    console.log("%s is a real person that says %j", realPerson.name, realPerson.quotes)
    process.exit()
})
