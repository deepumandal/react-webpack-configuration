import getProjectName from "./InputModules/getProjectName";
import getLanguages from "./InputModules/getLanguages";
import getTemplate from "./InputModules/getTemplate";
import getStyleLibrary from "./InputModules/getStyleLibrary";
import builder from "../builder";
import stylishPrint from "./stylePrint";
import { basename } from "path";

// package installer
const scriptsRunner = async function () {
  const projectNameResponse = await getProjectName(); // Prompt for the project name
  const languageNameResponse = await getLanguages(); //   Select language
  const templateNameResponse = await getTemplate(); //   select library
  const styleLibraryResponse = await getStyleLibrary(); //   select styling library

  await builder({
    projectNameResponse,
    languageNameResponse,
    templateNameResponse,
    styleLibraryResponse,
  });

  if (projectNameResponse.isNew) {
    stylishPrint(
      `
      '${projectNameResponse.ProjectName}' is ready to go.
    Next steps:
    
     📂 ${" "} cd ${projectNameResponse.ProjectName}
     📂 ${" "} npm install
     📂 ${" "} npm start
  
    Happy Hacking 🚀
    `,
      "white"
    );
  } else {
    stylishPrint(
      `
      '${basename(process.cwd())}' is ready to go.
    Next steps:
    
     📂 ${" "} npm install
     📂 ${" "} npm start
  
    Happy Hacking 🚀
    `,
      "white"
    );
  }
};

export default scriptsRunner;
