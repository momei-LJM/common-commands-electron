import { ipcMain } from "electron";
import { excCmd } from "./handlers";

export const useHandlers = () => {
  ipcMain.handle("excCmd", excCmd);
};
