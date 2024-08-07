import { STORAGE_KEY } from "./enums";

function setStorage(key: string, data: any) {
  localStorage.setItem(key, JSON.stringify(data));
}
function getStorage(key: string) {
  const res = localStorage.getItem(key);
  return res ? JSON.parse(res) : undefined;
}

export function setCmdListGet<T>(data: T) {
  setStorage(STORAGE_KEY.CMD_LIST_GET, data);
}
export function getCmdListGet<T>(): T {
  return getStorage(STORAGE_KEY.CMD_LIST_GET);
}
export function setCmdListSet<T>(data: T) {
  setStorage(STORAGE_KEY.CMD_LIST_SET, data);
}

export function getCmdListSet<T>(): T | undefined {
  return getStorage(STORAGE_KEY.CMD_LIST_SET);
}
