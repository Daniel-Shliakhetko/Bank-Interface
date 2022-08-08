import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Main</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
