// commandB.js
const commandB = {
    command: "create project <projectName> <path>",
    describe: "Create a new project",
    handler: (argv) => {
        console.log(`Creating a new project called ${argv.projectName}`);

    },
};

export default commandB;
