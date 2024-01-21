#!/usr/bin/env node
import scriptsRunner from "./source/scripts";
import stylishPrint from "./source/stylePrint";

// Function to handle interruption (Ctrl + C)
const handleInterrupt = () => {
  process.exit(1);
};

// Set up the interrupt event listener
process.on("SIGINT", handleInterrupt);

// Your Enquirer prompt
const ScriptIntruption = async () => {
  try {
    await scriptsRunner();
  } catch (error) {
    stylishPrint(
      `
      Oh, Ok 
    hope See you again! ❣️`
    );
  } finally {
    // Remove the event listener when the prompt is completed
    process.removeListener("SIGINT", handleInterrupt);
  }
};

// Call the function
ScriptIntruption();
