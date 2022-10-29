import { Fragment } from "react";
import Backdrop from "./Backdrop";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = (props) => {
  return (
    <Fragment>
      <Navigation />
      <Backdrop />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
