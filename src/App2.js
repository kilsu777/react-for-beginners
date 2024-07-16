import { useState, useEffect } from "react";

// function Hello() {
//   return <h1>Hello!</h1>;
// }
const Hello = () => {
  useEffect(() => {
    console.log("show hello");
    return () => console.log("destroy hello");
  });
  return <h1>Hello!</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((value) => !value);
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
