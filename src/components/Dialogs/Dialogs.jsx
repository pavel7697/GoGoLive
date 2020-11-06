import React from "react";
import d from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div class={d.dialogs}>
      <div class='dialog-items'>
        <div className={d.item}>d.item</div>
        <div className={d.item}>d.item</div>
        <div className={d.item}>d.item</div>
        <div className={d.item}>d.item</div>

      </div>
      <div class={d.messages}>
        <div className={d.message}>Sam, hi!</div>
        <div className={d.message}>azaza</div>
        <div className={d.message}>musoooor</div>
      </div>
    </div>
  );
};

export default Dialogs;