#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const scripts_1 = __importDefault(require("./source/scripts"));
const stylePrint_1 = __importDefault(require("./source/stylePrint"));
// Function to handle interruption (Ctrl + C)
const handleInterrupt = () => {
    process.exit(1);
};
// Set up the interrupt event listener
process.on("SIGINT", handleInterrupt);
// Your Enquirer prompt
const ScriptIntruption = async () => {
    try {
        await (0, scripts_1.default)();
    }
    catch (error) {
        (0, stylePrint_1.default)(`
      Oh, Ok 
    hope See you again! ❣️`);
    }
    finally {
        // Remove the event listener when the prompt is completed
        process.removeListener("SIGINT", handleInterrupt);
    }
};
// Call the function
ScriptIntruption();
