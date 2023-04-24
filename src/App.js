import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import DebtsGrid from "./pages/DebtsGrid";
import DebtCard from "./pages/DebtCard";

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<DebtsGrid />} />
          <Route
            path="/debtCard"
            element={<DebtCard />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
