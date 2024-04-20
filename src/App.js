import { Paper, ThemeProvider } from "@mui/material";
import "./App.css";
import { DARK_THEME } from "./thems/darkTheme";

function App() {
  return (
    <ThemeProvider theme={DARK_THEME}>
      <Paper>asfsf</Paper>
    </ThemeProvider>
  );
}

export default App;
