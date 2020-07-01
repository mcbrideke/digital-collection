import React from 'react'
import {Switch, Route} from "react-router-dom"
import './App.css'
import Books from "./pages/Books"
import Movies from "./pages/Movies"
import Home from "./pages/Home"
import MovieDetails from "./pages/MovieDetails"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/books">
          <Books/>
        </Route>
        <Route exact path="/movies">
          <Movies/>
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetails />
        </Route>
      </Switch>
    </div>
  )
}

export default App
