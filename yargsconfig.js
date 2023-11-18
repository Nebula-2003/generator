// yargsConfig.js
import yargs from "yargs";
import commands from "./commands/index.js";

const argv = yargs(process.argv.slice(2));
argv.command(commands);

export default argv;
