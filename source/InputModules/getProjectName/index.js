"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enquirer_1 = require("enquirer");
const ReadCurrentDirName_1 = __importDefault(require("../ReadCurrentDirName"));
const constants_1 = require("../../../utils/constants");
exports.default = async () => {
    try {
        // Ask directory options
        const dirOptions = await (0, enquirer_1.prompt)({
            type: "select",
            name: "directoryName",
            message: "What's your directory,",
            choices: constants_1.directoryOptions,
        });
        // conditional operation based on the chosen directory
        switch (dirOptions.directoryName) {
            case constants_1.CONTINUE_WITH_CURRENT_DIR: {
                const FileName = await (0, ReadCurrentDirName_1.default)();
                return {
                    PathName: FileName.directoryName,
                    isNew: false,
                };
            }
            case constants_1.PROJECT_NAME: {
                const projectNameResponse = await (0, enquirer_1.prompt)({
                    type: "input",
                    name: "ProjectName",
                    message: "Enter project name:",
                });
                return {
                    ProjectName: projectNameResponse.ProjectName,
                    isNew: true,
                };
            }
            default: {
                throw new Error("Invalid dirOptions");
            }
        }
    }
    finally {
    }
};
