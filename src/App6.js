import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  const URL = process.env.PUBLIC_URL;
  console.log(URL);
  return (
    <Router>
      <Routes>
        <Route path={URL + "/hello"} element={<h1>Hello</h1>} />
        <Route path={URL + "/movie/:id"} element={<Detail />} />
        <Route path={URL + "/"} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
