import Content from "./components/Content";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Content />
    </div>
  );
}

export default App;
