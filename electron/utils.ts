import { exec } from "child_process";
export async function exc(cmd: string) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        reject(error);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        reject(stderr);
        return;
      }
      resolve(stdout);
    });
  });
}
