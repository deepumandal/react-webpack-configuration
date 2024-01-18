"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getProjectName_1 = __importDefault(require("./InputModules/getProjectName"));
const getLanguages_1 = __importDefault(require("./InputModules/getLanguages"));
const getTemplate_1 = __importDefault(require("./InputModules/getTemplate"));
const getStyleLibrary_1 = __importDefault(require("./InputModules/getStyleLibrary"));
const builder_1 = __importDefault(require("../builder"));
const stylePrint_1 = __importDefault(require("./stylePrint"));
const path_1 = require("path");
// package installer
const scriptsRunner = async function () {
    process.on("SIGINT", () => {
        console.log("Received Ctrl+C. Exiting...");
        // Perform cleanup or other tasks if needed
        process.exit();
    });
    // Your code goes here
    // Example: simulate a long-running task
    setInterval(() => {
        console.log("Working...");
    }, 1000);
    const projectNameResponse = await (0, getProjectName_1.default)(); // Prompt for the project name
    const languageNameResponse = await (0, getLanguages_1.default)(); //   Select language
    const templateNameResponse = await (0, getTemplate_1.default)(); //   select library
    const styleLibraryResponse = await (0, getStyleLibrary_1.default)(); //   select styling library
    await (0, builder_1.default)({
        projectNameResponse,
        languageNameResponse,
        templateNameResponse,
        styleLibraryResponse,
    });
    let name;
    if (projectNameResponse.isNew)
        name = projectNameResponse.ProjectName;
    else
        name = (0, path_1.basename)(process.cwd());
    //   clear();
    (0, stylePrint_1.default)(`
    '${name}' is ready to go.
  Next steps:
  
   📂 ${" "} cd ${name}
   📂 ${" "} npm install
   📂 ${" "} npm start

  Happy Hacking 🚀
  `, "white");
};
exports.default = scriptsRunner;