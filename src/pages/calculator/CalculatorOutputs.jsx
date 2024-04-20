import { PieChart } from "@mui/x-charts";
import React from "react";
import { DEFAULT_INPUT_FORM } from "./Calculator";
import { calculateLoanPayment, formatNumber } from "./calculator-utils";
import {
  COLOR_PRIMARY_TRANSPARENT_WHITE_20,
  COLOR_PRIMARY_TRANSPARENT_WHITE_30,
  COLOR_PRIMARY_TRANSPARENT_WHITE_40,
} from "../../constants/colors";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

const CalculatorOutputs = ({ data = DEFAULT_INPUT_FORM }) => {
  const monthlyOperationIncome = data?.income - data?.monthly_expenses;
  const annualOperationIncome = monthlyOperationIncome * 12;
  const monthlyLoanPayment = calculateLoanPayment(
    data?.total_loans_amount,
    data?.loans_interest_rate / 100,
    data?.loans_term_length * 12
  );
  const totalPayments = monthlyLoanPayment * (data?.loans_term_length * 12);
  var totalInterestPaid = totalPayments - data?.total_loans_amount;
  var adjustedMonthlyProfit = monthlyOperationIncome - monthlyLoanPayment;
  var adjustedAnnualProfit = adjustedMonthlyProfit * 12;

  var totalBusinessPrice = data?.investment_amount + data?.total_loans_amount;
  var businessInterestRate = (annualOperationIncome / totalBusinessPrice) * 100;
  var annualLoanPayments = monthlyLoanPayment * 12;
  var personalInvestmentInterest =
    ((annualOperationIncome - annualLoanPayments) / data?.investment_amount) *
    100;

  const yearsToPayOffInterest =
    annualOperationIncome > 0
      ? totalInterestPaid / annualOperationIncome
      : "N/A";
  const yearsToPayOffLoan =
    annualOperationIncome > 0 ? totalPayments / annualOperationIncome : "N/A";

  return (
    <Grid container>
      <Grid item lg={6} md={12} sm={12} xs={12}>
        <PieChart
          colors={[
            COLOR_PRIMARY_TRANSPARENT_WHITE_40,
            COLOR_PRIMARY_TRANSPARENT_WHITE_30,
            COLOR_PRIMARY_TRANSPARENT_WHITE_20,
          ]}
          series={[
            {
              data: [
                {
                  id: 0,
                  value: data?.total_loans_amount,
                  label: "Principal",
                },
                { id: 1, value: totalInterestPaid, label: "Interest" },
              ],
              highlightScope: { faded: "global", highlighted: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            },
          ]}
          height={240}
        />
      </Grid>
      <Grid item lg={6} md={12} sm={12} xs={12}>
        <PieChart
          colors={[
            COLOR_PRIMARY_TRANSPARENT_WHITE_40,
            COLOR_PRIMARY_TRANSPARENT_WHITE_30,
            COLOR_PRIMARY_TRANSPARENT_WHITE_20,
          ]}
          series={[
            {
              data: [
                {
                  id: 0,
                  value: adjustedMonthlyProfit,
                  label: "Profit after loan Payments",
                },
                { id: 1, value: monthlyLoanPayment, label: "Loan Payment" },
              ],
              highlightScope: { faded: "global", highlighted: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            },
          ]}
          height={240}
        />
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Table>
          <TableBody>
            {/* Monthly Operational Income */}
            <TableRow>
              <TableCell align="right">
                <Typography>Monthly Operational Income</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  <b>{formatNumber(monthlyOperationIncome)}</b>
                </Typography>
              </TableCell>
            </TableRow>

            {/* Annual Operational Income */}
            <TableRow>
              <TableCell align="right">
                <Typography>Annual Operational Income</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  <b>{formatNumber(annualOperationIncome)}</b>
                </Typography>
              </TableCell>
            </TableRow>

            {/* Total Business Valuation */}
            <TableRow>
              <TableCell align="right">
                <Typography>Total Business Valuation</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  <b>{formatNumber(totalBusinessPrice)}</b>
                </Typography>
              </TableCell>
            </TableRow>

            {/* Return on Business Purchase Price */}
            <TableRow>
              <TableCell align="right">
                <Typography>Return on Business Purchase Price</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  <b>{businessInterestRate.toFixed(2)}%</b>
                </Typography>
              </TableCell>
            </TableRow>

            {/* Return on Personal Investment */}
            <TableRow>
              <TableCell align="right">
                <Typography>Return on Personal Investment</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  <b>{personalInvestmentInterest.toFixed(2)}%</b>
                </Typography>
              </TableCell>
            </TableRow>

            {/* Time to Recoup Loan Interest with Income */}
            <TableRow>
              <TableCell align="right">
                <Typography>
                  Time to Recoup Loan Interest with Income
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  <b>{yearsToPayOffInterest.toFixed(2)} Years</b>
                </Typography>
              </TableCell>
            </TableRow>
            {/* Time Till you can own 100% of the business */}
            <TableRow>
              <TableCell align="right">
                <Typography>
                  Time Till you can own 100% of the business
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  <b>{yearsToPayOffLoan.toFixed(2)} Years</b>
                </Typography>
              </TableCell>
            </TableRow>
            {/* Cumulative Loan Payments */}
            <TableRow>
              <TableCell align="right">
                <Typography>Cumulative Loan Payments</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  <b>{formatNumber(totalPayments)}</b>
                </Typography>
              </TableCell>
            </TableRow>

            {/* Average Monthly Loan Payment */}
            <TableRow>
              <TableCell align="right">
                <Typography>Average Monthly Loan Payment</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  <b>{formatNumber(monthlyLoanPayment)}</b>
                </Typography>
              </TableCell>
            </TableRow>

            {/* Total Interest Incurred on Loan */}
            <TableRow>
              <TableCell align="right">
                <Typography>Total Interest Incurred on Loan</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  <b>{formatNumber(totalInterestPaid)}</b>
                </Typography>
              </TableCell>
            </TableRow>

            {/* Net Monthly Profit (Post-Loan Payments) */}
            <TableRow>
              <TableCell align="right">
                <Typography>Net Monthly Profit (Post-Loan Payments)</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  <b>{formatNumber(adjustedMonthlyProfit)}</b>
                </Typography>
              </TableCell>
            </TableRow>

            {/* Net Annual Profit (Post-Loan Payments) */}
            <TableRow>
              <TableCell align="right">
                <Typography>Net Annual Profit (Post-Loan Payments)</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  <b>{formatNumber(adjustedAnnualProfit)}</b>
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
};

export default CalculatorOutputs;
