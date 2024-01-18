"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
exports.default = async (payload) => {
    try {
        const { projectNameResponse, languageNameResponse, styleLibraryResponse, templateNameResponse, } = payload;
        const templateName = [
            languageNameResponse,
            "webpack",
            templateNameResponse,
            styleLibraryResponse,
        ];
        const templatePath = (0, path_1.resolve)(__dirname, "../templates", templateName.join("+"));
        let destinationPath;
        if (projectNameResponse.isNew) {
            destinationPath = (0, path_1.resolve)(process.cwd(), projectNameResponse.ProjectName);
            (0, fs_extra_1.mkdirSync)(destinationPath);
        }
        else {
            destinationPath = process.cwd();
        }
        (0, fs_extra_1.copySync)(templatePath, destinationPath);
        const packageJsonPath = (0, path_1.resolve)(destinationPath, "package.json");
        const packageJson = (0, fs_extra_1.readJsonSync)(packageJsonPath);
        packageJson.name = projectNameResponse.ProjectName;
        // Write the modified package.json back to the destination
        (0, fs_extra_1.writeJsonSync)(packageJsonPath, packageJson, { spaces: 2 });
    }
    catch (err) {
        console.log("Oops! Something went wrong.");
        console.log("Internal Error:", err);
    }
};
