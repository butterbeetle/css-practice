import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.mainFooter}>
      <nav>
        <ul>
          <li>
            <a href="/">Support</a>
          </li>
          <li>
            <a href="/">Terms of Use</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
export default Footer;
