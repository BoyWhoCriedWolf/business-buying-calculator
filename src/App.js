import { ThemeProvider } from "@mui/material";
import "./App.css";
import Layout from "./layout";
import { DARK_THEME } from "./thems/darkTheme";
import Calculator from "./pages/calculator";

function App() {
  return (
    <ThemeProvider theme={DARK_THEME}>
      <Layout>
        <Calculator />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
