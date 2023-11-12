// // commandB.js
// const commandB = {
//     command: "create project <projectName> <path>",
//     describe: "Create a new project",
//     handler: (argv) => {
//         console.log(`Creating a new project called ${argv.projectName}`);

//     },
// };

// export default commandB;
import path from "path";
import fse from "fs-extra";

const commandCreateApp = {
    command: "create app <path>",
    describe: "Create an app from a template",
    handler: async (argv) => {
        const templatePath = "../templates/fullApp"; // Replace with the path to your template

        const destinationPath = path.join(process.cwd(), argv.path);

        try {
            await fse.ensureDir(destinationPath);
            await fse.copy(templatePath, destinationPath);
            console.log("Template copied successfully!");
        } catch (err) {
            console.error("Error copying template:", err);
        }
    },
};

export default commandCreateApp;
