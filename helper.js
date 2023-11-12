import path from "path";
import fs from "fs";
import ejs from "ejs";

export const ejsHelper = async ({ templatePath, fName, data, outFilePath }) => {

    fs.mkdir(outFilePath, { recursive: true }, (err) => {
        if (err) {
            if (err.code === "EEXIST") {
                // console.error("Directory already exists");
                fs.readFile(templatePath, "utf8", (err, template) => {
                    if (err) throw err;

                    // Generate the output by rendering the template with the data
                    const output = ejs.render(template, data);

                    // Write the output to a new JavaScript file

                    let outputFinal = path.join(outFilePath, fName);
                    fs.writeFile(outputFinal, output, (err) => {
                        if (err) throw err;
                        // console.log("JavaScript file generated successfully!");
                    });
                });
            } else {
                // console.error("Error creating directory:", err);
            }
        } else {
            // console.log("Directory created successfully");
            fs.readFile(templatePath, "utf8", (err, template) => {
                if (err) throw err;

                // Generate the output by rendering the template with the data
                const output = ejs.render(template, data);

                // Write the output to a new JavaScript file

                let outputFinal = path.join(outFilePath, fName);
                fs.writeFile(outputFinal, output, (err) => {
                    if (err) throw err;
                    // console.log("JavaScript file generated successfully!");
                });
            });
        }
    });
};

