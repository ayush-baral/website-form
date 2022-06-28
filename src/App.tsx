import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
