import { ejsHelper, toConstantCase } from "../helper.js";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import inquirer from "inquirer";

const __dirname = dirname(fileURLToPath(import.meta.url));

const createService = {
    command: "add-service <name> <path>",
    describe: "Add a new service to the project",
    builder: (yargs) => {
        yargs
            .positional("name", {
                describe: "Name of the service",
                type: "string",
            })
            .positional("path", {
                describe: "Path for the service",
                type: "string",
            });
    },
    handler: async (argv) => {
        let currentWorkingDir = process.cwd();
        let outFilePath = path.join(currentWorkingDir, argv.path , argv.name);
        const { version } = await inquirer.prompt({
            type: "list",
            name: "version",
            message: "Which version of JavaScript do you want to use?",
            choices: ["es6", "es5"],
        });
        let templateArray;
        if (version === "es6") {
            const { classBased } = await inquirer.prompt({
                type: "confirm",
                name: "classBased",
                message: "Do you want to use Class in the services?",
                // choices: ["es6", "es5"],
            });
            templateArray = await import(`../templates/${version}/service_class/templateArray.js`);
            console.log("🚀 ~ file: createService.js:42 ~ handler: ~ templateArray:", templateArray);
        } else {
            templateArray = await import(`../templates/${version}/service/templateArray.js`);
        }
        const serviceNameFirstCap = argv.name.charAt(0).toUpperCase() + argv.name.slice(1);
        const serviceNameConstCase = toConstantCase(argv.name);
        templateArray.default.forEach((template) => {
            let fName;
            if (template.fName === "index.js") {
                fName = "index.js";
            } else {
                fName = `${argv.name}${template.fName}`;
            }
            ejsHelper({
                templatePath: template.templatePath,
                fName,
                data: { serviceName: argv.name, serviceNameFirstCap, serviceNameConstCase },
                outFilePath,
            });
        });
    },
};

export default createService;
