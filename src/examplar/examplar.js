import { Fragment } from "react";
import classes from "./examplar.module.css";

const Examplar = () => {
  return (
    <Fragment>
      <div className={classes.parent}>
        <div className={classes.country}>Navigation Bar</div>
        <div className={classes.cities}>Background Image</div>
        <div className={classes.cities}>Features</div>
      </div>
      <div className={classes.parent}>
        <div className={classes.country}>Navigation Bar</div>
        <div className={classes.cities}>Background Image</div>
        <div className={classes.cities}>Features</div>
      </div>
      <div className={classes.parent}>
        <div className={classes.country}>Navigation Bar</div>
        <div className={classes.cities}>Background Image</div>
        <div className={classes.cities}>Features</div>
      </div>
    </Fragment>
  );
};
export default Examplar;
