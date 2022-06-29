import React, { Component } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
// import Header from './Components/Header'
import Homepage from './Pages/Homepage'
import CartPage from './Components/CartPage'
import SignUp from './Pages/SignUp'
import "./App.css"
import { Route } from 'react-router-dom'

const App = () => {

  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path='/cart'>
            <CartPage/>
          </Route>
          {/* <Route exact path='/login' component={Login}/> */}
        </Switch>
      </BrowserRouter>
  )
}

export default App