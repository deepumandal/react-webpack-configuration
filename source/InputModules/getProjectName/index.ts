import { prompt } from "enquirer";
import { DirectoryInterface, ProjectInterface } from "../../../utils/types";
import ReadCurrentFileName from "../ReadCurrentDirName";
import stylishPrint from "../../stylePrint";
import {
  CONTINUE_WITH_CURRENT_DIR,
  PROJECT_NAME,
  directoryOptions,
} from "../../../utils/constants";
// import getNavigatedDirPath from "../getNavigatedDirPath";

interface functionResInterface {
  ProjectName?: string;
  PathName?: string;
  isNew: boolean;
}
export default async (): Promise<functionResInterface> => {
  //   warm welcome output
  stylishPrint(
    `Welcome to web-app-init. 🚀
  `,
    "blue"
  );

  //   Ask directory options
  const dirOptions = await prompt<DirectoryInterface>({
    type: "select",
    name: "directoryName",
    message: "What's your directory,",
    choices: directoryOptions,
  });
  //   conditional operation of choosen directory
  switch (dirOptions.directoryName) {
    case CONTINUE_WITH_CURRENT_DIR: {
      const FileName = await ReadCurrentFileName();
      return {
        PathName: FileName.directoryName,
        isNew: false,
      };
    }
    case PROJECT_NAME: {
      const projectNameResponse = await prompt<ProjectInterface>({
        type: "input",
        name: "ProjectName",
        message: "Enter project name:",
      });

      return {
        ProjectName: projectNameResponse.ProjectName as string,
        isNew: true,
      };
    }
    default: {
      throw new Error("Invalid dirOptions");
    }
  }
};
