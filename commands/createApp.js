import path from "path";
import inquirer from "inquirer";
import fse from "fs-extra";
import { gitHelper } from "../helper.js";

const commandCreateApp = {
    command: "create app <path>",
    describe: "Create an app from a template",
    handler: async (argv) => {
        const templatePathRelative = "../templates/fullApp"; // Replace with the path to your template
        const templatePath = path.join(__dirname, templatePathRelative);
        const destinationPath = path.join(process.cwd(), argv.path);

        try {
            await fse.ensureDir(destinationPath);
            await fse.copy(templatePath, destinationPath);
            const { shouldCommit } = await inquirer.prompt({
                type: "confirm",
                name: "shouldCommit",
                message: "Do you want to commit these changes?",
            });

            if (shouldCommit) {
                const { commitMessage } = await inquirer.prompt({
                    type: "input",
                    name: "commitMessage",
                    message: "Enter the commit message:",
                    default: "Initial commit ✨",
                });
                await gitHelper.commitChanges(destinationPath, commitMessage);
                console.log("Committing changes with message:", commitMessage);
            }

            console.log("Template copied successfully!");
        } catch (err) {
            console.error("Error copying template:", err);
        }
    },
};

export default commandCreateApp;
