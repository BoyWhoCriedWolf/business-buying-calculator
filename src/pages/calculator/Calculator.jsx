import { Grid } from "@mui/material";
import React, { useState } from "react";
import BorderContainer from "../../components/border-container";
import CalculatorInputs from "./CalculatorInputs";

const Calculator = () => {
  const [formData, setFormData] = useState({
    income: 5000,
    monthly_expenses: 7000,
    investment_amount: 2000,
    total_loans_amount: 150000,
    loans_interest_rate: 7.5,
    loans_term_length: 5,
  });

  return (
    <Grid container spacing={2}>
      <Grid item lg={4} md={4} sm={6} xs={12}>
        <BorderContainer title="Inputs">
          <CalculatorInputs data={formData} onChange={setFormData} />
        </BorderContainer>
      </Grid>
      <Grid item lg={8} md={8} sm={6} xs={12}>
        <BorderContainer title="Outputs"></BorderContainer>
      </Grid>
    </Grid>
  );
};

export default Calculator;
