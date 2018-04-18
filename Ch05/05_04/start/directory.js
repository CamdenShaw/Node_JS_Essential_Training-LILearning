const fs = require("fs")

if (fs.existsSync("lib")) console.log("Directory Exists Already")
else
    fs.mkdir("lib", err => {
        if (err) console.log(err)
        console.log("Directory Created")
    })
