import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import DebtsGrid from "./pages/DebtsGrid";
import DebtCard from "./pages/DebtCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchDebtCardAction } from "./saga/debtCardReducer";

function App() {
  const GetDebtCardData = () => {
    const dispatch = useDispatch();
    dispatch(fetchDebtCardAction());
    const debtCard = useSelector((state) => state.debtCard.debtCard);

    // const result = debtCard.find(obj => obj.personId === 1)
    return console.log(debtCard);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<DebtsGrid />} />
          <Route
            path="/debtCard"
            loader={GetDebtCardData}
            element={<DebtCard />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
