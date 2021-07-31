import {FileEntry} from "../FileEntry";
import {OptionDefinition} from "command-line-usage";

export interface IResourceEntries {
  name: string;
  entries: FileEntry[];
}

export enum OptionsEnum {
  dir = "dir",
  out = "out",
  ts = "ts",
  read = "read",
}

export type Options = {[key in keyof typeof OptionsEnum]: string};

export interface IOptionDefinition extends OptionDefinition {
  name: OptionsEnum;
}
