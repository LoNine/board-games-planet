import "./App.scss";
import {useEffect} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import { useAppDispatch } from "./app/hooks";
import { batch } from "react-redux";
import { getMostLikesGames } from "./app/games";
import Home from "./components/Home";

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
        <div>games list</div>
      </Route>
      <Route path="/games/:game">
        <div>game page</div>
      </Route>
    </BrowserRouter>
  );
}

export default App;
