import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const templatePathServices = path.join(__dirname, "services.ejs");
const templatePathModel = path.join(__dirname, "model.ejs");
const templatePathController = path.join(__dirname, "controller.ejs");
const templatePathRoutes = path.join(__dirname, "routes.ejs");
const templatePathIndex = path.join(__dirname, "index.ejs");

export const templateArray = [
    {
        templatePath: templatePathServices,
        fName: `.services.js`,
        // data: { serviceName: argv.name },
    },
    {
        templatePath: templatePathModel,
        fName: `.model.js`,
        // data: { serviceName: argv.name },
    },
    {
        templatePath: templatePathController,
        fName: `.controller.js`,
        // data: { serviceName: argv.name },
    },
    {
        templatePath: templatePathRoutes,
        fName: `.routes.js`,
        // data: { serviceName: argv.name },
    },
    {
        templatePath: templatePathIndex,
        fName: `index.js`,
        // data: { serviceName: argv.name },
    },
];
