#!/usr/bin/env node
import { prompt } from "enquirer";
import { resolve } from "path";
import { mkdirSync } from "fs";
import { copySync, readJsonSync, writeJsonSync } from "fs-extra";
import { ProjectInterface, PackageInterface } from "./utils/types";
import {
  templateChoices,
  languagesOption,
  stylelibraryOption,
} from "./utils/constants.js";

// package installer
(async function () {
  // Prompt for the project name
  const projectNameResponse = await prompt<ProjectInterface>({
    type: "input",
    name: "ProjectName",
    message: "Enter project name:",
  });

  // Select language
  const languageNameResponse = await prompt<PackageInterface>({
    type: "select", // Add type property here
    name: "PackageName",
    message: "Choose a language:",
    choices: languagesOption,
  });
  //   select library
  const templateNameResponse = await prompt<PackageInterface>({
    type: "select",
    choices: templateChoices,
    name: "PackageName",
    message: "Select template",
  });

  //   select styling library
  const stylelibraryResponse = await prompt<PackageInterface>({
    type: "select", // Add type property here
    name: "PackageName",
    message: "Choose a stylling library:",
    choices: stylelibraryOption,
  });

  const TemplateName = [
    languageNameResponse.PackageName,
    "webpack",
    templateNameResponse.PackageName,
    stylelibraryResponse.PackageName,
  ];

  // template path of based on selected options
  const templatePath = resolve(__dirname, "templates", TemplateName.join("+"));
  console.log(templatePath);
  const destinationPath = resolve(
    process.cwd(),
    projectNameResponse.ProjectName
  );

  try {
    mkdirSync(destinationPath);
    // folder is created now copy the template to this place
    copySync(templatePath, destinationPath);
    // updates in package.json
    const packageJsonPath = resolve(destinationPath, "package.json");
    const packageJson = readJsonSync(packageJsonPath);
    packageJson.name = projectNameResponse.ProjectName;

    // Write the modified package.json back to the destination
    writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });

    console.log("\n");
    console.log(" ", "Run ");
    console.log(" ", "yarn or npm install ");
    console.log(" ", "Happy Hacking!");
  } catch (err) {
    console.log(" ", "Oops Sorry Something Wents worng!");
    console.log("Internal Error :", err);
  }
})();
