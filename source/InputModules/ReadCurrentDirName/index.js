"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
exports.default = async () => {
    const fullPath = __dirname;
    const fileName = (0, path_1.basename)(fullPath, (0, path_1.extname)(fullPath));
    return {
        directoryName: fileName,
    };
};
