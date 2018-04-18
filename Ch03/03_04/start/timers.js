let waitTime = 3000,
    currentTime = 0,
    waitInterval = 10,
    percentWaited = 0

// console.log("Wait for it.")
const writeWaitPercent = p => {
    process.stdout.clearLine()
    process.stdout.cursorTo(0)
    process.stdout.write(`waiting: ${p}%`)
}

let interval = setInterval(() => {
    currentTime += waitInterval
    percentWaited = Math.floor(currentTime / waitTime * 100)
    writeWaitPercent(percentWaited)
    // console.log(`Waiting: ${currentTime / 1000}s`)
}, waitInterval)

setTimeout(() => {
    clearInterval(interval)
    writeWaitPercent(100)
    console.log("\n\ndone\n")
}, waitTime)

process.stdout.write("\n\n")
writeWaitPercent(percentWaited)
