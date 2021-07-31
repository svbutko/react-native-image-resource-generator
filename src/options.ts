import commandLineArgs from "command-line-args";
import commandLineUsage from "command-line-usage";
import {IOptionDefinition, Options, OptionsEnum} from "./types";

const optionDefinitions: IOptionDefinition[] = [
  {name: OptionsEnum.dir, alias: "d", type: String, description: "Directory path with images"},
  {name: OptionsEnum.out, alias: "o", type: String, description: "Output files path"},
  {name: OptionsEnum.read, alias: "r", type: String, description: "Read directory path"},
  {
    name: OptionsEnum.ts,
    alias: "t",
    type: Boolean,
    description: "Should the output file be generated as a TypeScript file (optional)",
  },
];

export const cmdOptions = commandLineArgs(optionDefinitions) as Options;
export const cmdUsage = commandLineUsage([{header: "Options", optionList: optionDefinitions}]);
