import getProjectName from "./InputModules/getProjectName";
import getLanguages from "./InputModules/getLanguages";
import getTemplate from "./InputModules/getTemplate";
import getStyleLibrary from "./InputModules/getStyleLibrary";
import builder from "../builder";
import stylishPrint from "./stylePrint";
import { basename } from "path";
import clear from "clear";

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

  let name;
  if (projectNameResponse.isNew) name = projectNameResponse.ProjectName;
  else name = basename(process.cwd());

  //   clear();
  stylishPrint(
    `
    '${name}' is ready to go.
  Next steps:
  
   📂 ${" "} cd ${name}
   📂 ${" "} npm install
   📂 ${" "} npm start

  Happy Hacking 🚀
  `,
    "white"
  );
};

export default scriptsRunner;
