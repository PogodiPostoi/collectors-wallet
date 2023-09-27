import React, { useEffect } from "react";
import { Route, Routes, Navigate, redirect } from "react-router-dom";

import Header from "./components/Header";
import DebtsGrid from "./pages/DebtsGrid";
import DebtCard from "./pages/DebtCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchDebtCardAction } from "./saga/debtCardReducer";
import { FETCH_DEBTORS } from "./saga/debtorsReducer";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch({ type: FETCH_DEBTORS })
    dispatch(fetchDebtCardAction());
    !debtCardList.id && redirect("/")
},[]); 

  const debtCardList = useSelector((state) => state.debtCardList.debtCardList);
  const debtCard = useSelector((state) => state.debtCard.debtCard);
  const data = debtCard.find(obj => obj.personId === Number(debtCardList.id))

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<DebtsGrid />} />
          <Route path="/debtCard" element={ !debtCardList.id ? (<Navigate to="/"/>) : (<DebtCard data = {data} debtCard = {debtCard} debtCardList = {debtCardList}/>)} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
