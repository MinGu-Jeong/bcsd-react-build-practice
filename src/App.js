import "./App.css";
import Main from "./Main";
import Counter from "./Counter";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Counter/:number" element={<Counter />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
