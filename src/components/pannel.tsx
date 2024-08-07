import React, { useState } from "react";
import ListItem from "./ListItem";
import { TCmdItem } from "./types";
import { getCmdListGet, setCmdListGet } from "../storage";
import OperateBar from "./OperateBar";
const defaultValue = { cmd: "", result: "", remark: "" };
export const Pannel: React.FC = () => {
  const [cmds, setCmds] = useState<TCmdItem[]>(
    getCmdListGet<TCmdItem[]>() || []
  );

  const onChange = (
    data: string,
    index: number,
    type: "result" | "cmd" | "remark"
  ) => {
    cmds[index][type] = data;
    const newCmds = [...cmds];
    setStateSore(newCmds);
  };

  const setStateSore = (newCmds: TCmdItem[]) => {
    setCmdListGet<TCmdItem[]>(newCmds);
    setCmds(newCmds);
  };
  const onAdd = () => {
    const newCmds = [{ ...defaultValue, id: cmds.length + 1 }, ...cmds];
    setStateSore(newCmds);
  };
  return (
    <>
      <OperateBar onAdd={onAdd} />
      {cmds?.map((cmdInfo, index) => (
        <div className="mt-3" key={cmdInfo.id}>
          <ListItem
            data={cmdInfo}
            changeCmd={(cmd) => onChange(cmd, index, "cmd")}
            changeResult={(res) => onChange(res, index, "result")}
            changeRemark={(remark) => onChange(remark, index, "remark")}
          />
        </div>
      ))}
    </>
  );
};
export default Pannel;
