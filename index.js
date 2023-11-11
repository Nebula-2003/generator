#!/usr/bin/env node

import yargs from "yargs";
import commands from "./commands/index.js";

const argv = yargs(process.argv.slice(2));

argv.command(commands);

// ERROR CONDITION: If wrong command is provided, show help (404)
const descriptions = commands.map((command) => command.describe).join("\n");
const customHelp = `Available commands:\n${descriptions}`;

argv
    .scriptName("generator")
    .command("*", false, () => {
        argv.showHelp();
    })
    .demandCommand()
    .help()
    .alias("help", "h").argv;
