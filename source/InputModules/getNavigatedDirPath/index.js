"use strict";
// import { readdirSync, statSync } from "fs";
// import { basename, join } from "path";
// import { prompt } from "enquirer";
// import { DirectoryInterface } from "../../../utils/types";
Object.defineProperty(exports, "__esModule", { value: true });
// interface FolderStructure {
//   name: string;
//   content: FolderStructure[];
// }
// function readFolderStructure(dir: string): FolderStructure {
//   const files = readdirSync(dir);
//   const folderStructure: FolderStructure = {
//     name: basename(dir),
//     content: [],
//   };
//   files.forEach((file, index) => {
//     if (index == 0) {
//       folderStructure.content.push({ name: "Go Back", content: [] });
//       folderStructure.content.push({ name: "Select", content: [] });
//     }
//     const filePath = join(dir, file);
//     const isDirectory = statSync(filePath).isDirectory();
//     if (isDirectory && file !== "node_modules" && file !== ".git") {
//       const subFolderStructure = readFolderStructure(filePath);
//       folderStructure.content.push(subFolderStructure);
//     }
//     // Ignore files in this version
//   });
//   return folderStructure;
// }
// let currentPath: string[] = [];
// const getDirectoryPath = async (Paths: FolderStructure) => {
//   let folderStructure: FolderStructure = Paths;
//   while (true) {
//     const choices = folderStructure.content.map((item) => item.name);
//     // choices.push("Go back");
//     // choices.push("Select");
//     const selectedDirectory = await prompt<DirectoryInterface>({
//       type: "select",
//       message: `Selected :   ${currentPath[currentPath.length - 1]}`,
//       choices,
//       name: "directoryName",
//     });
//     if (selectedDirectory.directoryName === "Select") {
//       break;
//     }
//     if (selectedDirectory.directoryName === "Go back") {
//       currentPath.pop();
//       let tempStructure = Paths;
//       for (const directory of currentPath) {
//         const index = tempStructure.content.findIndex(
//           (item) => item.name === directory
//         );
//         if (index !== -1) {
//           tempStructure = tempStructure.content[index];
//         } else {
//           // Handle invalid path if needed
//           break;
//         }
//       }
//       folderStructure = tempStructure;
//     } else {
//       currentPath.push(`/${selectedDirectory.directoryName}`);
//       const ChosenIndex = folderStructure.content.findIndex(
//         (item) => item.name === selectedDirectory.directoryName
//       );
//       folderStructure = folderStructure.content[ChosenIndex];
//     }
//     // Break the loop if the selected directory has no content (leaf node)
//     if (!folderStructure || folderStructure.content.length === 0) {
//       break;
//     }
//   }
// };
// export default async (): Promise<string> => {
//   const result: FolderStructure = readFolderStructure(process.cwd());
//   await getDirectoryPath(result);
//   return currentPath.join("");
// };
