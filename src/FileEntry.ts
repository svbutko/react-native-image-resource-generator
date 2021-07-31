import path from "path";

export class FileEntry {
  constructor(dir: string, out: string, fileName: string) {
    this.relativeResourcePath = path.relative(path.dirname(out), path.join(dir, fileName)).replace(/\\/g, "/");
    this.variableName = fileName
      .toLowerCase()
      .replace(/(.*)(.(png|jpg|jpeg|gif|bmp|svg))$/, "$1")
      .replace(/^\d+/, ($0) => new Array($0.length + 1).join("_"))
      .replace(/\W+/g, "_");
  }

  readonly relativeResourcePath: string;
  readonly variableName: string;
}
