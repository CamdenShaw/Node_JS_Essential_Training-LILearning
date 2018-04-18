const readline = require("readline")
const fs = require("fs")
let rl = readline.createInterface(process.stdin, process.stdout)

let realPerson = {
    name: "",
    sayings: []
}

rl.question("What is the name of a real person? ", answer => {
    realPerson.name = answer

    fs.writeFileSync(
        `${realPerson.name}.md`,
        `${realPerson.name}\n========================\n\n`
    )

    rl.setPrompt(`What would ${realPerson.name} say? `)

    rl.prompt()

    rl.on("line", saying => {
        saying.toLowerCase().trim() === "exit" && rl.close()
        realPerson.sayings.push(saying.trim())
        fs.appendFileSync(`${realPerson.name}.md`, `* ${saying.trim()}\n`, err => {
            if (err) throw err
            console.log("\nSaying successfully added to markdown file")
        })
        rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `)
        rl.prompt()
    })
})

rl.on("close", () => {
    console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings)
    process.exit()
})
