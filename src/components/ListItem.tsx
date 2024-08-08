import React, { memo, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { invoke } from "../api";

import { TCmdItem } from "./types";
import { Checkbox, FormControlLabel, Tooltip } from "@mui/material";
interface TEvents {
  onChange: (info: TCmdItem) => void;
}

export const ListItem: React.FC<{ data: TCmdItem } & TEvents> = memo(
  (props) => {
    const { data, onChange } = props;

    const refreshResult = async () => {
      const result = await invoke("excCmd", data.cmd);
      onChange({ ...data, result });
    };
    useEffect(() => {
      data.immediate && refreshResult();
    }, []);

    return (
      <>
        <div className="flex">
          <FormControlLabel
            control={
              <Checkbox
                checked={data.immediate}
                onChange={(_, checked) =>
                  onChange({ ...data, immediate: checked })
                }
                color="primary"
              />
            }
            label="call immediate"
          />
          <Tooltip title={data.cmd} placement="top">
            <TextField
              label="enter your cmd"
              variant="outlined"
              size="small"
              value={data.cmd}
              onChange={(e) => onChange?.({ ...data, cmd: e.target.value })}
            />
          </Tooltip>

          <div className="ml-4">
            <Tooltip title={data.remark} placement="top">
              <TextField
                label="remark"
                variant="outlined"
                size="small"
                key="remark"
                value={data.remark}
                onChange={(e) =>
                  onChange?.({ ...data, remark: e.target.value })
                }
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
);
export default ListItem;
