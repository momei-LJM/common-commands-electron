export async function invoke(eventName: string, ...args: any[]) {
  return await window.ipcRenderer.invoke(eventName, ...args);
}
