const readline = require('readline');

let providedRouter;
let rl;


async function speak(message) {
    console.log(message.output);
}

async function start(config, router) {
    providedRouter = router;
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false,
    });

    rl.on('line', (cmd) => {
        providedRouter.heard({ input: cmd });
    });

    return { speak };
}

module.exports = { start };
