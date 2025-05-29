import { Routes, Route } from "react-router-dom";
import Info from "./Info";
import Success from "./Success";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Info />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
