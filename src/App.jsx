import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/Table" element={<Table />} />
      </Routes>
    </>
  );
};

export default App;
