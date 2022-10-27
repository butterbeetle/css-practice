import classes from "./examplar.module.css";

const Examplar = () => {
  return (
    <div className={classes.parent}>
      <div className={classes.child1}>Navigation Bar</div>
      <div className={classes.child2}>Background Image</div>
      <div className={classes.child3}>Features</div>
    </div>
  );
};
export default Examplar;
