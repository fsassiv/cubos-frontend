import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import SearchPage from "./views/SearchPage";
import MovieDetail from "./views/MovieDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route path="/movie/:id" component={MovieDetail} />
          {/* 404 catch all / fallback */}
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
