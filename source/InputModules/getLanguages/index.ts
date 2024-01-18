import { prompt } from "enquirer";
import { languagesOption } from "../../../utils/constants";
import { PackageInterface } from "../../../utils/types";

export default async (): Promise<string> => {
  const lang = prompt<PackageInterface>({
    type: "select",
    name: "PackageName",
    message: "Choose a language:",
    choices: languagesOption,
  });
  return (await lang).PackageName;
};
