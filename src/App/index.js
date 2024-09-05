// App.js
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { EditPage } from "../Pages/EditPage";
import { NewPage } from "../Pages/NewPage";
import { NotFoundPage } from "../Pages/NotFoundPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
