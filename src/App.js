import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GLobalStyle } from "./components/styles/GlobalStyle";
import SignInForm from "./components/SignInForm";
import RegisterForm from "./components/RegisterForm";
import { theme } from "./components/styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GLobalStyle />
        <Route path="/" exact component={SignInForm} />
        <Route path="/register" component={RegisterForm} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
