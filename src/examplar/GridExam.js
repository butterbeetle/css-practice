import classes from "./GridExam.module.css";

const GridExam = () => {
  return (
    // <div className={classes.container}>
    //   <div className={classes.el1}>Element 1</div>
    //   <div className={classes.el2}>Element 2</div>
    //   <div className={classes.el3}>Element 3</div>
    //   <div className={classes.el4}>Element 4</div>
    // </div>

    <div className={classes.container}>
      <div className={classes.header}>Header</div>
      <div className={classes.sidebar}>Sidebar</div>
      <div className={classes.mainContent}>Main Content</div>
      <div className={classes.footer}>Footer</div>
    </div>
  );
};

export default GridExam;
