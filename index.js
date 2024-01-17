#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enquirer_1 = require("enquirer");
const path_1 = require("path");
const fs_1 = require("fs");
const fs_extra_1 = require("fs-extra");
const constants_js_1 = require("./utils/constants.js");
// package installer
(async function () {
    // Prompt for the project name
    const projectNameResponse = await (0, enquirer_1.prompt)({
        type: "input",
        name: "ProjectName",
        message: "Enter project name:",
    });
    // Select language
    const languageNameResponse = await (0, enquirer_1.prompt)({
        type: "select", // Add type property here
        name: "PackageName",
        message: "Choose a language:",
        choices: constants_js_1.languagesOption,
    });
    //   select library
    const templateNameResponse = await (0, enquirer_1.prompt)({
        type: "select",
        choices: constants_js_1.templateChoices,
        name: "PackageName",
        message: "Select template",
    });
    //   select styling library
    const stylelibraryResponse = await (0, enquirer_1.prompt)({
        type: "select", // Add type property here
        name: "PackageName",
        message: "Choose a stylling library:",
        choices: constants_js_1.stylelibraryOption,
    });
    const TemplateName = [
        languageNameResponse.PackageName,
        "webpack",
        templateNameResponse.PackageName,
        stylelibraryResponse.PackageName,
    ];
    // template path of based on selected options
    const templatePath = (0, path_1.resolve)(__dirname, "templates", TemplateName.join("+"));
    console.log(templatePath);
    const destinationPath = (0, path_1.resolve)(process.cwd(), projectNameResponse.ProjectName);
    try {
        (0, fs_1.mkdirSync)(destinationPath);
        // folder is created now copy the template to this place
        (0, fs_extra_1.copySync)(templatePath, destinationPath);
        // updates in package.json
        const packageJsonPath = (0, path_1.resolve)(destinationPath, "package.json");
        const packageJson = (0, fs_extra_1.readJsonSync)(packageJsonPath);
        packageJson.name = projectNameResponse.ProjectName;
        // Write the modified package.json back to the destination
        (0, fs_extra_1.writeJsonSync)(packageJsonPath, packageJson, { spaces: 2 });
        console.log("\n");
        console.log(" ", "Run ");
        console.log(" ", "yarn or npm install ");
        console.log(" ", "Happy Hacking!");
    }
    catch (err) {
        console.log(" ", "Oops Sorry Something Wents worng!");
        console.log("Internal Error :", err);
    }
})();
