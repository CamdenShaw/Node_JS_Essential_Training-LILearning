const exec = require("child_process").exec

// exec("open https://www.linkedin.com")
// exec("open http://camdenshaw.ca")
// exec("open -a Terminal .")

// exec("ls", (err, stdout) => {
//     if (err) throw err

//     console.log("Listing Finished")

//     console.log(stdout)
// })

exec("git version", (err, stdout) => {
    if (err) throw err
    console.log("Git Version Executed")
    console.log(stdout)
})
