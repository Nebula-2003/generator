#!/usr/bin/env node

import yargs from "./yargsconfig.js";

console.log('"Do or do not. There is no try." - Yoda');
console.log("\n");
// Define supported commands
const supportedCommands = ["create app", "add-service"];

// Handle the case where no specific command is provided or an unsupported command is provided
yargs
    .scriptName("generator")
    // .command(supportedCommands, false, () => {})
    .command("*", "Unsupported command", (yargs) => {
        console.error("Error: Unsupported command. Supported commands are:");
        supportedCommands.forEach((cmd) => {
            console.error(`  - ${cmd}`);
        });
    })
    .demandCommand().argv;
