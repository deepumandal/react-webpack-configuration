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
    if (projectNameResponse.isNew) {
        (0, stylePrint_1.default)(`
      '${projectNameResponse.ProjectName}' is ready to go.
    Next steps:
    
     📂 ${" "} cd ${projectNameResponse.ProjectName}
     📂 ${" "} npm install
     📂 ${" "} npm start
  
    Happy Hacking 🚀
    `, "white");
    }
    else {
        (0, stylePrint_1.default)(`
      '${(0, path_1.basename)(process.cwd())}' is ready to go.
    Next steps:
    
     📂 ${" "} npm install
     📂 ${" "} npm start
  
    Happy Hacking 🚀
    `, "white");
    }
};
exports.default = scriptsRunner;
