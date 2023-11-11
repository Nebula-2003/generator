// commandB.js
const commandB = {
    command: "commandB",
    describe: "Another command for testing purposes",
    builder: (yargs) => {
        // Define options for commandB if needed
        // For example:
        return yargs.option('optionB', {
            describe: 'Option B for commandB',
            type: 'string'
        });
    },
    handler: (argv) => {
        console.log("This is another command for testing purposes");
        console.log("Options:", argv);
        // Perform functionality for commandB with provided options
    },
};

export default commandB;
