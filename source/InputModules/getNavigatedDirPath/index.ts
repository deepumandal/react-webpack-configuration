import { readdirSync, statSync } from "fs";
import { basename, join } from "path";

interface FolderStructure {
  name: string;
  content: FolderStructure[];
}

function readFolderStructure(dir: string): FolderStructure {
  const files = readdirSync(dir);

  const folderStructure: FolderStructure = {
    name: basename(dir),
    content: [],
  };

  files.forEach((file) => {
    const filePath = join(dir, file);
    const isDirectory = statSync(filePath).isDirectory();

    if (isDirectory && file !== "node_modules") {
      const subFolderStructure = readFolderStructure(filePath);
      folderStructure.content.push(subFolderStructure);
    }
    // Ignore files in this version
  });

  return folderStructure;
}

export default async () => {
  const result: FolderStructure = readFolderStructure(process.cwd());
  console.log(result, result.content[1]);
  // todo
};
