import { Fragment } from "react";
import classes from "./examplar.module.css";

const Examplar = () => {
  return (
    <Fragment>
      <div className={classes["flex-container"]}>
        <div className={classes["item-1"]}>div</div>
        <div className={classes["item-2"]}>w=250px</div>
        <div className={classes["item-3"]}>h=250px</div>
        <div className={classes["item-4"]}>w/h=300px</div>
        <div className={classes["item-5"]}>w=350px</div>
        <div className={classes["item-6"]}>w=350px</div>
      </div>
    </Fragment>
  );
};
export default Examplar;
