const fs = require("fs")

try {
    fs.unlinkSync("./lib/config.json")
    console.log("config.json Removed")
} catch (err) {
    console.log(err)
}

fs.unlink("notes.md", err => {
    if (err) console.log(err)
    else console.log("notes.md Removed")
})
