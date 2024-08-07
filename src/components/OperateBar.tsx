import { AddCircleOutlineSharp } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { invoke } from "../api";
import { getCmdListGet } from "../storage";
import { TCmdItem } from "./types";

export default function OperateBar({ onAdd }: { onAdd: () => void }) {
  const exportJson = async () => {
    await invoke("exportJson", getCmdListGet<TCmdItem[]>() || []);
    alert("success");
  };
  return (
    <div className="flex">
      <Button
        className="!ml-auto "
        variant="contained"
        startIcon={<AddCircleOutlineSharp />}
        onClick={onAdd}
      >
        add
      </Button>
      <Button className="!ml-4" variant="contained" onClick={exportJson}>
        export json data
      </Button>
    </div>
  );
}
