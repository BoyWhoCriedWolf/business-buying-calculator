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
    <Grid container>
      <Grid item lg={6} md={6} sm={6} xs={6}>
        <BorderContainer title="Inputs">
          <CalculatorInputs data={formData} onChange={setFormData} />
        </BorderContainer>
      </Grid>
    </Grid>
  );
};

export default Calculator;
