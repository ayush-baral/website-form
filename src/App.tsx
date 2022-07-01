import { Routes, Route } from "react-router-dom";
import FormPage from "./pages/Form";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<FormPage />} />
    </Routes>
  );
}

export default App;
