import { Grid } from "@mui/material";
import React, { useState } from "react";
import BorderContainer from "../../components/border-container";
import CalculatorInputs from "./CalculatorInputs";
import CalculatorOutputs from "./CalculatorOutputs";

export const DEFAULT_INPUT_FORM = {
  income: 15000,
  monthly_expenses: 7000,
  investment_amount: 20000,
  total_loans_amount: 150000,
  loans_interest_rate: 7.5,
  loans_term_length: 10,
};

const Calculator = () => {
  const [formData, setFormData] = useState(DEFAULT_INPUT_FORM);

  return (
    <Grid container spacing={2}>
      <Grid item lg={4} md={6} sm={12} xs={12}>
        <BorderContainer title="Inputs" collapseDownSm>
          <CalculatorInputs data={formData} onChange={setFormData} />
        </BorderContainer>
      </Grid>
      <Grid item lg={8} md={6} sm={12} xs={12}>
        <BorderContainer title="Outputs">
          <CalculatorOutputs data={formData} />
        </BorderContainer>
      </Grid>
    </Grid>
  );
};

export default Calculator;
