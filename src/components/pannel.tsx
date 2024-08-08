import React, { useState } from "react";
import ListItem from "./ListItem";
import { TCmdItem } from "./types";
import { getCmdListGet, setCmdListGet } from "../storage";
import OperateBar from "./OperateBar";
const defaultValue = { cmd: "", result: "", remark: "", immediate: false };
export const Pannel: React.FC = () => {
  const [cmds, setCmds] = useState<TCmdItem[]>(
    getCmdListGet<TCmdItem[]>() || []
  );

  const onChange = (data: TCmdItem, index: number) => {
    cmds[index] = data;
    const newCmds = [...cmds];
    setStateSore(newCmds);
  };

  const setStateSore = (newCmds: TCmdItem[]) => {
    setCmdListGet<TCmdItem[]>(newCmds);
    setCmds(newCmds);
  };
  const onAdd = () => {
    const newCmds = [{ ...defaultValue }, ...cmds.map((i) => ({ ...i }))];
    setStateSore(newCmds);
  };
  return (
    <>
      <OperateBar onAdd={onAdd} />
      {cmds?.map((cmdInfo, index) => (
        <div className="mt-3" key={index}>
          <ListItem data={cmdInfo} onChange={(data) => onChange(data, index)} />
        </div>
      ))}
    </>
  );
};
export default Pannel;
