import { dialog } from "electron";
import { exc } from "../utils";
import fs from "fs";
export async function excCmd(_: any, arg: string) {
  if (!arg) return;
  const res = await exc(arg);
  return `${res}`;
}

export async function exportJsonData(_: any, data: any) {
  if (!data || typeof data !== "object") {
    return;
  }
  const result = await dialog.showOpenDialog({
    properties: ["openDirectory"],
  });

  if (!result.canceled) {
    const directory = result.filePaths[0];
    const filePath = `${directory}/common_cmd_data.json`;
    fs.writeFileSync(filePath, JSON.stringify(data));
    return "success";
  }
  return "";
}
