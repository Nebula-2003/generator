import { ejsHelper } from "../helper.js";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { templateArray } from "../templates/es6/service/templateArray.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const createService = {
    command: "add-service <name> <path>",
    describe: "Add a new service to the project",
    handler: async (argv) => {
        let currentWorkingDir = process.cwd();
        let outFilePath = path.join(currentWorkingDir, argv.path);
        console.log("=>(createService.js:15) outFilePath", outFilePath);

        templateArray.forEach((template) => {
            ejsHelper({
                templatePath: template.templatePath,
                fName: `${argv.name}${template.fName}`,
                data: { serviceName: argv.name },
                outFilePath,
            });
        });
    },
};

export default createService;
