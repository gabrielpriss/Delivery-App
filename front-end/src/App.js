import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={ Main } />
      </Switch>
    </BrowserRouter>
  )
}

