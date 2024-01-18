"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enquirer_1 = require("enquirer");
const constants_1 = require("../../../utils/constants");
exports.default = async () => {
    const stylelibraryResponse = await (0, enquirer_1.prompt)({
        type: "select",
        name: "PackageName",
        message: "Choose a stylling library:",
        choices: constants_1.stylelibraryOption,
    });
    return stylelibraryResponse.PackageName;
};
