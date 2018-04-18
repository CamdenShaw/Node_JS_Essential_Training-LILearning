const fs = require("fs")

// fs.renameSync("./assets/logs", "./logs")

// console.log("Directory Moved")

// fs.rmdir("./assets", err => {
//     if (err) throw err
//     console.log("Assets Directory Removed")
// })

fs.readdirSync("./logs").forEach(fileName => {
    fs.unlinkSync(`./logs/${fileName}`)
})

fs.rmdir("./logs", err => {
    if (err) throw err
    console.log("Logs Directory Removed")
})
