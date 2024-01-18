"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shelljs_1 = require("shelljs");
function stylishPrint(message, color = "blue", fontSize = "medium") {
    const styles = {
        bold: "\x1b[1m",
        blue: "\x1b[34m",
        white: "\x1b[97m",
        reset: "\x1b[0m",
        small: "\x1b[2m",
        medium: "",
        large: "\x1b[3m",
    };
    const chosenColor = styles[color] || styles.blue; // Default to blue if color is not recognized
    const chosenFontSize = styles[fontSize] || styles.medium; // Default to medium if font size is not recognized
    const styledMessage = `${styles.bold}${chosenColor}${chosenFontSize}${message}${styles.reset}`;
    (0, shelljs_1.echo)(styledMessage);
}
exports.default = stylishPrint;
