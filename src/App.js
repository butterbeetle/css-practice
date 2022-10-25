import classes from "./App.module.css";

function App() {
  return (
    <main>
      <section className={classes.productOverview}>
        <h1>Get the freedom you deserve.</h1>
      </section>
      <section className={classes.plans}>
        <h1 className={classes.sectionTitle}>Choose Your Plan</h1>
        <p>Make sure you get the most for your money!</p>
      </section>
    </main>
  );
}

export default App;
