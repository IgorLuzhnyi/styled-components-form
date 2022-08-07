import { HashRouter, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GLobalStyle } from "./components/styles/GlobalStyle";
import SignInForm from "./components/SignInForm";
import RegisterForm from "./components/RegisterForm";
import { theme } from "./components/styles/theme";
import Home from "./components/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <GLobalStyle />
        <Route path="/" exact component={SignInForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/home" component={Home} />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
