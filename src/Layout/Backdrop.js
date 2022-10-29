import { Fragment } from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  return (
    <Fragment>
      <div onClick={props.onClose} className={classes.backdrop} />
    </Fragment>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <h1 className={classes.modal__title}>Do you want to continue?</h1>
      <div className={classes.modal__actions}>
        <Link to="/" className={classes.modal__action}>
          Yes!
        </Link>
        <button
          onClick={props.onClose}
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
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay onClose={props.onClose} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Modal;
