import { HashRouter, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GLobalStyle } from "./mainStyles/GlobalStyle";
import SignInForm from "./components/Form/SignInForm";
import RegisterForm from "./components/Form/RegisterForm";
import { theme } from "./mainStyles/theme";
import Home from "./components/Home/Home";

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
