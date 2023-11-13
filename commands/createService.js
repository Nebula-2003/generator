import { ejsHelper, toConstantCase } from "../helper.js";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import inquirer from "inquirer";

const __dirname = dirname(fileURLToPath(import.meta.url));

const createService = {
    command: "add-service <name> <path>",
    describe: "Add a new service to the project",
    handler: async (argv) => {
        let currentWorkingDir = process.cwd();
        let outFilePath = path.join(currentWorkingDir, argv.path);
        const { version } = await inquirer.prompt({
            type: "list",
            name: "version",
            message: "Which version of JavaScript do you want to use?",
            choices: ["es6", "es5"],
        });
        const { templateArray } = await import(`../templates/${version}/service/templateArray.js`);
        const serviceNameFirstCap = argv.name.charAt(0).toUpperCase() + argv.name.slice(1);
        const serviceNameConstCase = toConstantCase(argv.name);
        templateArray.forEach((template) => {
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
