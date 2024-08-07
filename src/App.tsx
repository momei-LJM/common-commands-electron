import Pannel from "./components/pannel";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Pannel></Pannel>
      </ThemeProvider>
    </>
  );
}

export default App;
