import { DirectoryInterface } from "../../../utils/types";
import { basename, extname } from "path";

export default async (): Promise<DirectoryInterface> => {
  const fullPath = __dirname;
  const fileName = basename(fullPath, extname(fullPath));
  return {
    directoryName: fileName,
  };
};
