const fs = require("fs")
const path = require("path")

// SYNC
// let contents = fs.readFileSync("./lib/sayings.md", "UTF-8")
// console.log(contents)

// ASYNC
// fs.readFile("./lib/sayings.md", "utf8", (err, contents) => {
//     if (err) console.log(err)
//     console.log(contents)
// })

fs.readdir("./lib", (err, files) => {
    files.forEach(fileName => {
        let file = path.join(__dirname, "lib", fileName)
        let stats = fs.statSync(file)
        stats.isFile() &&
            fileName !== ".DS_Store" &&
            fs.readFile(file, "utf8", (err, contents) => console.log(contents))
    })
})
