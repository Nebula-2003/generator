import { ejsHelper } from "../helper.js";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const commandA = {
    command: "add-service <name> <path>",
    describe: "Add a new service to the project",
    handler: async (argv) => {
        // console.log("🚀 ~ file: commandA.js:7 ~ handler: ~ argv", argv);
        let pathTemp = process.cwd();
        // console.log("🚀 ~ file: commandA.js:9 ~ handler: ~ pathTemp:", pathTemp);
        let pathFinal = path.join(pathTemp, argv.path);
        // console.log("🚀 ~ file: commandA.js:11 ~ handler: ~ pathFinal:", pathFinal);
        const templatePath = path.join(__dirname, "..", "templates", "service", "services.ejs");
        const templatePathServices = path.join(__dirname, "..", "templates", "service", "services.ejs");
        const templatePathModel = path.join(__dirname, "..", "templates", "service", "model.ejs");
        const templatePathController = path.join(__dirname, "..", "templates", "service", "controller.ejs");
        const templatePathRoutes = path.join(__dirname, "..", "templates", "service", "routes.ejs");
        const templatePathIndex = path.join(__dirname, "..", "templates", "service", "index.ejs");
        
        // console.log("🚀 ~ file: commandA.js:14 ~ handler: ~ templatePath:", templatePath);
        ejsHelper({
            templatePath: templatePathServices,
            fName: `${argv.name}.services.js`,
            data: { serviceName: argv.name },
            outFilePath: pathFinal,
        });
        ejsHelper({
            templatePath: templatePathModel,
            fName: `${argv.name}.model.js`,
            data: { serviceName: argv.name },
            outFilePath: pathFinal,
        });
        ejsHelper({
            templatePath: templatePathController,
            fName: `${argv.name}.controller.js`,
            data: { serviceName: argv.name },
            outFilePath: pathFinal,
        });
        ejsHelper({
            templatePath: templatePathRoutes,
            fName: `${argv.name}.routes.js`,
            data: { serviceName: argv.name },
            outFilePath: pathFinal,
        });
        ejsHelper({
            templatePath: templatePathIndex,
            fName: `index.js`,
            data: { serviceName: argv.name },
            outFilePath: pathFinal,
        });
    },
};

export default commandA;
