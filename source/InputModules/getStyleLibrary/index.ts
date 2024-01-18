import { prompt } from "enquirer";
import { PackageInterface } from "../../../utils/types";
import { stylelibraryOption } from "../../../utils/constants";

export default async () => {
  const stylelibraryResponse = await prompt<PackageInterface>({
    type: "select",
    name: "PackageName",
    message: "Choose a stylling library:",
    choices: stylelibraryOption,
  });
  return stylelibraryResponse.PackageName;
};
