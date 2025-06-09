import { ThemeProvider } from "styled-components";
import { GithubProvider } from "./contexts/GithubContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <GithubProvider>
        <Router />
      </GithubProvider>
    </ThemeProvider>
  );
}

export default App;
