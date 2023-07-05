import "./App.css";
import Main from "./Main";
import Counter from "./Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Counter/:number" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
