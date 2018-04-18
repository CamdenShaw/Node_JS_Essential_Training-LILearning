const fs = require("fs")

// SYNC
// let files = fs.readdirSync("./lib")
// console.log(files)

// ASYNC
fs.readdir("./lib", (err, files) => {
    if (err) throw err
    console.log(files)
})

console.log("Reading files...")
