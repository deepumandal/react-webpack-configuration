"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enquirer_1 = require("enquirer");
const constants_1 = require("../../../utils/constants");
exports.default = async () => {
    const templateNameResponse = await (0, enquirer_1.prompt)({
        type: "select",
        choices: constants_1.templateChoices,
        name: "PackageName",
        message: "Select template",
    });
    return templateNameResponse.PackageName;
};
