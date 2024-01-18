import { copySync, mkdirSync, readJsonSync, writeJsonSync } from "fs-extra";
import { resolve } from "path";

interface BuilderInterface {
  projectNameResponse: {
    ProjectName?: string;
    PathName?: string;
    isNew: boolean;
  };
  languageNameResponse: string;
  templateNameResponse: string;
  styleLibraryResponse: string; // Corrected typo in variable name
}

export default async (payload: BuilderInterface) => {
  try {
    const {
      projectNameResponse,
      languageNameResponse,
      styleLibraryResponse,
      templateNameResponse,
    } = payload;

    const templateName = [
      languageNameResponse,
      "webpack",
      templateNameResponse,
      styleLibraryResponse,
    ];

    const templatePath = resolve(
      __dirname,
      "../templates",
      templateName.join("+")
    );

    let destinationPath: string;

    if (projectNameResponse.isNew) {
      destinationPath = resolve(
        process.cwd(),
        projectNameResponse.ProjectName as string
      );
      mkdirSync(destinationPath);
    } else {
      destinationPath = process.cwd();
    }

    copySync(templatePath, destinationPath);

    const packageJsonPath = resolve(destinationPath, "package.json");
    const packageJson = readJsonSync(packageJsonPath);
    packageJson.name = projectNameResponse.ProjectName;

    // Write the modified package.json back to the destination
    writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });
  } catch (err) {
    console.log("Oops! Something went wrong.");
    console.log("Internal Error:", err);
  }
};
