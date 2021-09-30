import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Games from "./components/Games";
import GamePage from "./components/GamePage";

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
        <GamePage />
      </Route>
    </BrowserRouter>
  );
}

export default App;
