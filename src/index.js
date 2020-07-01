import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter as Router} from "react-router-dom"
import {MovieProvider} from "./contexts/MovieContext"

ReactDOM.render(
  <MovieProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </MovieProvider>,
  document.getElementById('root')
)
