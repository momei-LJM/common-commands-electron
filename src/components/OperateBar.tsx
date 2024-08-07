import { AddCircleOutlineSharp } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

export default function OperateBar({ onAdd }: { onAdd: () => void }) {
  return (
    <div className="flex">
      <Button
        className="!ml-auto "
        variant="outlined"
        startIcon={<AddCircleOutlineSharp />}
        onClick={onAdd}
      >
        add
      </Button>
    </div>
  );
}
