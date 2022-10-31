import classes from "./GridExam.module.css";

const GridExam = () => {
  return (
    // <div className={classes.container}>
    //   <div className={classes.el1}>Element 1</div>
    //   <div className={classes.el2}>Element 2</div>
    //   <div className={classes.el3}>Element 3</div>
    //   <div className={classes.el4}>Element 4</div>
    // </div>

    // <div className={classes.container}>
    //   <div className={classes.header}>Header</div>
    //   <div className={classes.sidebar}>Sidebar</div>
    //   <div className={classes.mainContent}>Main Content</div>
    //   <div className={classes.footer}>Footer</div>
    // </div>

    <div className={classes.container}>
      <div className={classes["quote--featured"]}>
        Get all of Max' courses, they really are the best!
      </div>
      <div className={classes.quote}>
        Don't cry because it's over, smile because it happened.
      </div>
      <div className={classes.quote}>
        I'm selfish, impatient and a little insecure. I make mistakes, I am out
        of control and at times hard to handle. But if you can't handle me at my
        worst, then you sure as hell don't deserve me at my best.
      </div>
      <div className={classes.quote}>
        Be yourself; everyone else is already taken.
      </div>
      <div className={classes.quote}>So many books, so little time.</div>
      <div className={classes.quote}>
        Two things are infinite: the universe and human stupidity; and I'm not
        sure about the universe.
      </div>
    </div>
  );
};

export default GridExam;
