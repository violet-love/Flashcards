import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../Home";
import Study from "../Components/Deck/Study";
import NotFound from "./NotFound";
import Header from "./Header";
import DeckEdit from "../Components/Deck/Edit";
import DeckView from "../Components/Deck/View";
import CardEdit from "../Components/Card/Edit";
import CardCreate from "../Components/Card/Create";
import DeckCreate from "../Components/Deck/Create";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/decks/new">
            <DeckCreate />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId/edit">
            <DeckEdit />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <CardCreate />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <CardEdit />
          </Route>
          <Route exact={true} path="/decks/:deckId">
            <DeckView />
          </Route>
          <Route exact={true} path="/decks">
            <Redirect to="/" />
          </Route>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
