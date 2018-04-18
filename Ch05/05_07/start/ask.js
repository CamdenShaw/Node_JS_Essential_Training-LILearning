let questions = [
    "What is your name?",
    "What is your fav hobby?",
    "What is your preferred programming language?"
]

let answers = []

const ask = i => {
    process.stdout.write(`\n\n\n\n ${questions[i]}`)
    process.stdout.write("  >  ")
}

process.stdin.on("data", data => {
    answers.push(data.toString().trim())

    answers.length < questions.length ? ask(answers.length) : process.exit()
})

process.on("exit", () => {
    process.stdout.write("\n\n\n\n")

    process.stdout.write(
        `Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`
    )

    process.stdout.write("\n\n\n\n")
})

ask(0)
