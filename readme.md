# Express App Generator

This is a Node.js package for generating an Express app. It provides a command-line interface for creating a new Express app with a basic file structure and configuration.

## Installation

To install the package, run the following command:

```bash
npm i -g @nebula2003/generator-express
```

## Usage

To create a new Express app, run the following command:

```bash
generatorExpress create app <path>
```

To add a new Service, run the following command:

```bash
generatorExpress add-service <name> <path>
```

## Running the Application

To run the application with Babel transpilation and PM2 process manager, follow these steps:

1. Install dependencies:

```bash
npm i
```

2. Run the application:

```bash
npm start
```

3. To stop the application, run the following command:

```bash
npm stop
```

**Note:** The application requires PM2 to be installed globally. To install PM2 globally, run the following command:

```bash
npm i -g pm2
```

**Note:** The ES6 version of this Express app includes Babel for compatibility with older packages that use `require`. Make sure to follow the steps in the [Running the Application](#running-the-application) section to set up and run the application with Babel and PM2.

```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.8/clipboard.min.js"></script>;

document.addEventListener("DOMContentLoaded", function () {
    // Find all code blocks with the language identifier 'bash'
    var bashCodeBlocks = document.querySelectorAll("code.language-bash");

    // Iterate through each code block and add a copy button
    bashCodeBlocks.forEach(function (codeBlock) {
        // Create a copy button
        var copyButton = document.createElement("button");
        copyButton.className = "copy-button";
        copyButton.innerHTML = "Copy";

        // Create a div to wrap the code block and copy button
        var wrapper = document.createElement("div");
        wrapper.className = "code-block-wrapper";

        // Clone the code block and add it to the wrapper
        var codeBlockClone = codeBlock.cloneNode(true);
        wrapper.appendChild(copyButton);
        wrapper.appendChild(codeBlockClone);

        // Replace the original code block with the wrapper
        codeBlock.parentNode.replaceChild(wrapper, codeBlock);

        // Set up Clipboard.js for the copy button
        var clipboard = new ClipboardJS(copyButton, {
            target: function (trigger) {
                return trigger.nextElementSibling; // The cloned code block
            },
        });

        clipboard.on("success", function (e) {
            e.clearSelection();
        });
    });
});
```
