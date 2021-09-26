import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Games from "./components/Games";

function App() {
  return (
    <BrowserRouter>
      <Route path="/">
        <Header />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/games">
        <Games />
      </Route>
      <Route path="/games/:game">
        <div>game page</div>
      </Route>
    </BrowserRouter>
  );
}

export default App;
