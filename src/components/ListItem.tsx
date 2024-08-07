import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { invoke } from "../api";

import { TCmdItem } from "./types";
import { Tooltip } from "@mui/material";
interface TEvents {
  changeCmd: (cmd: string) => void;
  changeResult: (result: string) => void;
  changeRemark: (remark: string) => void;
}

export default function ListItem(props: { data: TCmdItem } & TEvents) {
  const { data, changeCmd, changeResult, changeRemark } = props;

  const refreshResult = async () => {
    const res = await invoke("excCmd", data.cmd);
    changeResult(res);
  };
  useEffect(() => {
    refreshResult();
  }, []);

  return (
    <>
      <div className="flex">
        <Tooltip title={data.cmd} placement="top">
          <TextField
            label="enter your cmd"
            variant="outlined"
            size="small"
            defaultValue={data.cmd}
            onChange={(e) => changeCmd?.(e.target.value)}
          />
        </Tooltip>

        <div className="ml-4">
          <Tooltip title={data.remark} placement="top">
            <TextField
              label="remark"
              variant="outlined"
              size="small"
              key="remark"
              defaultValue={data.remark}
              onChange={(e) => changeRemark?.(e.target.value)}
            />
          </Tooltip>
        </div>
        <div
          className="flex mx-4 px-4 bg-slate-200 rounded-sm items-center
        w-[200px] max-w-[200px] flex-wrap break-all text-left"
        >
          {data.result || "none"}
        </div>
        <Button
          className="!ml-1 w-[84px]"
          variant="outlined"
          onClick={refreshResult}
        >
          call
        </Button>
      </div>
    </>
  );
}
