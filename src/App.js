import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Header from "./components/Header";
import DebtsGrid from "./pages/DebtsGrid";
import DebtCard from "./pages/DebtCard";
import { useSelector } from "react-redux";

function App() {

  const debtCardList = useSelector((state) => state.debtCardList.debtCardList);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<DebtsGrid />} />
          <Route path="/debtCard" element={ !debtCardList.id ? (<Navigate to="/"/>) : (<DebtCard />)} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
