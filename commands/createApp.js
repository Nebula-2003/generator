import path from "path";
    
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
            console.log("Template copied successfully!");
        } catch (err) {
            console.error("Error copying template:", err);
        }
    },
};

export default commandCreateApp;
