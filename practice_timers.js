let currentTime = 0;
const totalTime = 5000;
const waitTime = 500;
const incTime = () => {
    currentTime += waitTime;
    process.stdout.clearLine();
    process.stdout.write(`processing .. ${(currentTime/totalTime)*100}%... patience please`);
    process.stdout.cursorTo(0);
};

console.log(`Setting timer for ${totalTime/1000} seconds.\n`);

const interval = setInterval(incTime, waitTime);
const timerFinished = () => {
    process.stdout.clearLine();
    process.stdout.write(`\n\nok, diva, done now.`);
    clearInterval(interval);
}

setTimeout(timerFinished, totalTime);
