import { ThemeProvider } from "@mui/material";
import "./App.css";
import Layout from "./layout";
import { DARK_THEME } from "./thems/darkTheme";

function App() {
  return (
    <ThemeProvider theme={DARK_THEME}>
      <Layout>content</Layout>
    </ThemeProvider>
  );
}

export default App;
