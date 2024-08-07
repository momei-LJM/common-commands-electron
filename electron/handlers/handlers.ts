import { exc } from "../utils";

export async function excCmd(_: any, arg: string) {
  if (!arg) return;
  const res = await exc(arg);
  return `${res}`;
}
