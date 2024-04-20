import { Box, Slider, Typography } from "@mui/material";
import React from "react";
import { DEFAULT_INPUT_FORM } from "./Calculator";

const CalculatorInputs = ({
  data = DEFAULT_INPUT_FORM,
  onChange = () => {},
}) => {
  const handleChange = (e) => {
    const { name = "", value = 0 } = e?.target ?? {};
    onChange({ ...(data ?? {}), [name]: value });
  };

  return (
    <Box>
      {/* Income ($) */}
      <Box sx={{ my: 1 }}>
        <Typography gutterBottom>
          Income ($): <b>${data?.income ?? 0}</b>
        </Typography>
        <Slider
          name="income"
          value={data?.income ?? ""}
          onChange={handleChange}
          step={1000}
          min={0}
          max={50000}
          getAriaValueText={(value, index) => `$${value}`}
          color="primary"
        />
      </Box>

      {/* Monthly Expenses ($) */}
      <Box sx={{ my: 1 }}>
        <Typography gutterBottom>
          Monthly Expenses ($): <b>${data?.monthly_expenses ?? 0}</b>
        </Typography>
        <Slider
          name="monthly_expenses"
          value={data?.monthly_expenses ?? ""}
          onChange={handleChange}
          step={1000}
          min={0}
          max={50000}
          getAriaValueText={(value, index) => `$${value}`}
          color="primary"
        />
      </Box>

      {/* Investment Amount ($) */}
      <Box sx={{ my: 1 }}>
        <Typography gutterBottom>
          Investment Amount ($): <b>${data?.investment_amount ?? 0}</b>
        </Typography>
        <Slider
          name="investment_amount"
          value={data?.investment_amount ?? ""}
          onChange={handleChange}
          step={1000}
          min={0}
          max={100000}
          getAriaValueText={(value, index) => `$${value}`}
          color="primary"
        />
      </Box>

      {/* Total Amount of Loans ($) */}
      <Box sx={{ my: 1 }}>
        <Typography gutterBottom>
          Total Amount of Loans ($): <b>${data?.total_loans_amount ?? 0}</b>
        </Typography>
        <Slider
          name="total_loans_amount"
          value={data?.total_loans_amount ?? ""}
          onChange={handleChange}
          step={5000}
          min={0}
          max={500000}
          getAriaValueText={(value, index) => `$${value}`}
          color="primary"
        />
      </Box>

      {/* Interest Rate of Loans (%) */}
      <Box sx={{ my: 1 }}>
        <Typography gutterBottom>
          Interest Rate of Loans (%): <b>{data?.loans_interest_rate ?? 0}%</b>
        </Typography>
        <Slider
          name="loans_interest_rate"
          value={data?.loans_interest_rate ?? ""}
          onChange={handleChange}
          step={0.1}
          min={0.0}
          max={20.0}
          getAriaValueText={(value, index) => `${value}%`}
          color="primary"
        />
      </Box>

      {/* Term Length of Loans (years) */}
      <Box sx={{ my: 1 }}>
        <Typography gutterBottom>
          Term Length of Loans (years): :{" "}
          <b>{data?.loans_term_length ?? 0} years</b>
        </Typography>
        <Slider
          name="loans_term_length"
          value={data?.loans_term_length ?? ""}
          onChange={handleChange}
          step={1}
          min={0}
          max={20}
          getAriaValueText={(value, index) => `${value} years`}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default CalculatorInputs;
