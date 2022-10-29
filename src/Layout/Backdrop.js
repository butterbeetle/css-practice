import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./Backdrop.module.css";

const Backdrop = () => {
  return (
    <Fragment>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>
        <h1 className={classes.modal__title}>Do you want to continue?</h1>
        <div className={classes.modal__actions}>
          <Link href="/" className={classes.modal__action}>
            Yes!
          </Link>
          <button
            className={[
              classes.modal__action,
              classes.modal__actionNegative,
            ].join(" ")}
            type="button"
          >
            No!
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Backdrop;
