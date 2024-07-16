import Button from "./Button";
// import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {  
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setCounter((value) => value + 1);
  }
  const onChange = (event) => {
    setKeyword(event.target.value);
  }
  const firstRun = () => {
    console.log("First Run");
  }
  useEffect(firstRun, []);
  useEffect(() => {
    if (keyword !== "") {
      console.log("Change keyword");
    }
  }, [keyword]);
  useEffect(() => {
    console.log("Change counter");
  }, [counter]);
  // console.log("Do render");
  return (
    <div>
      <input
        onChange={onChange}
        type="text"
        value={keyword}
        placeholder="Type keyword"
      />
      {/* <h3 className={styles.title}>Hello!</h3> */}
      <h1>{counter}</h1>
      <button onClick={onClick}>Click this.</button>
      {/* <Button text={"Continue"}/> */}
    </div>
  );
}

export default App;
