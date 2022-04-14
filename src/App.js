
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './components/GlobalStyle';
import Home from "./components/Home";
import TableStudents from "./components/TableStudents";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/table" element={<TableStudents/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
