import { Routes, Route } from "react-router-dom";
import FormPage from "./pages/Form";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<FormPage />} />
      </Routes>
    </>
  );
}

export default App;
