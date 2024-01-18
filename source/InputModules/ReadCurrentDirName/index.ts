import { DirectoryInterface } from "../../../utils/types";
import { basename, extname } from "path";

export default async (): Promise<DirectoryInterface> => {
  try {
    const fullPath = __dirname;
    const fileName = basename(fullPath, extname(fullPath));
    return {
      directoryName: fileName,
    };
  } catch (err) {
    throw new Error("Invalid directory Read current dir name module failed");
  }
};
