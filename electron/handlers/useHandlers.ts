import { ipcMain } from "electron";
import { excCmd, exportJsonData } from "./handlers";

export const useHandlers = () => {
  ipcMain.handle("excCmd", excCmd);
  ipcMain.handle("exportJson", exportJsonData);
};
