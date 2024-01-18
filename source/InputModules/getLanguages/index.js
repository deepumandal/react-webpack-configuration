"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enquirer_1 = require("enquirer");
const constants_1 = require("../../../utils/constants");
exports.default = async () => {
    const lang = (0, enquirer_1.prompt)({
        type: "select",
        name: "PackageName",
        message: "Choose a language:",
        choices: constants_1.languagesOption,
    });
    return (await lang).PackageName;
};
