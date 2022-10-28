import { Fragment } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = (props) => {
  return (
    <Fragment>
      <Navigation />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
