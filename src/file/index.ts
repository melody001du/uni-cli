import path from "node:path";

class File {
  public id: string;
  public fileName: string;
  public originCode: string;
  public code: string;
  public isDirectory: boolean;

  constructor(file: {
    id: string;
    fileName?: string;
    originCode?: string;
    code?: string;
  }) {
    const { id, fileName, originCode, code } = file;
    this.id = id;
    this.fileName = fileName;
    this.originCode = originCode;
    this.code = code;
  }

  update(fileInfo: any) {
    fileInfo?.id && (this.id = fileInfo.id);
    fileInfo?.fileName && (this.fileName = fileInfo.id);
    fileInfo?.code && (this.code = fileInfo.code);
  }
}

export default File;
