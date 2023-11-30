import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SpecialTaxEmpForm from "./Components/SpecialTaxEmp";
import SpecialForm from "./Components/EmpSpecialRate";
import User from "./Components/User";
import CalculationForm from "./Components/Calculation";
import TaxCalculationForm from "./Components/TaxCalculation";
import PayCodeForm from "./Components/PayCode";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<SpecialTaxEmpForm/>}/>
          <Route path="SpecialTaxEmp" element={<SpecialTaxEmpForm/>}/>
          <Route path="SpecialForm" element={<SpecialForm/>}/>
          <Route path="User" element={ <User/>}/>
          <Route path="CalculationForm" element={<CalculationForm/>}/>
          <Route path="TaxCalculationForm" element={<TaxCalculationForm/>}/>
          <Route path="PayCodeForm" element={<PayCodeForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
