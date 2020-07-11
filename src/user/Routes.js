import React from 'react';
import{BrowserRouter, Switch, Route} from 'react-router-dom'
import Signin from './Signin'
import Signup from './Signup'
import Home from '../core/Home'
import Menu from '../core/menu'



const Routes = () => {
 
    return (

    <BrowserRouter>
    <Menu/>
       <Switch>
          <Route path="/Signin" exact component={Signin}></Route>
          <Route path="/Signup" exact component={Signup}></Route>
          <Route path="/" exact component={Home}></Route>

       </Switch>
       </BrowserRouter>

    )

}

export default Routes;