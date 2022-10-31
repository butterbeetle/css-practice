import classes from "./GridExam.module.css";

const GridExam = () => {
  return (
    <div className={classes.container}>
      <div className={classes.el1}>Element 1</div>
      <div className={classes.el2}>Element 2</div>
      <div className={classes.el3}>Element 3</div>
      <div className={classes.el4}>Element 4</div>
    </div>
  );
};

export default GridExam;
