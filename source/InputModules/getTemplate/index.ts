import { prompt } from "enquirer";
import { PackageInterface } from "../../../utils/types";
import { templateChoices } from "../../../utils/constants";

export default async () => {
  const templateNameResponse = await prompt<PackageInterface>({
    type: "select",
    choices: templateChoices,
    name: "PackageName",
    message: "Select template",
  });
  return templateNameResponse.PackageName;
};
