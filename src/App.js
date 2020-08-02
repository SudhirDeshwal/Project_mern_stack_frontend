import React from 'react';
import{BrowserRouter, Switch, Route} from 'react-router-dom'
import Signin from '../src/user/Signin'
import Signup from '../src/user/Signup'
import Home from '../src/core/Home'
import PrivateRoute from '../src/auth/PrivateRoute'
import Dashboard from '../src/user/UserDashboard'



const App = () => {
 
    return (

    <BrowserRouter>  
   
       <Switch>
          <Route path="/Signin" exact component={Signin}></Route>
          <Route path="/Signup" exact component={Signup}></Route>
          <Route path="/" exact component={Home}></Route>
          <PrivateRoute path="/dashboard" exact component={Dashboard}></PrivateRoute>
       </Switch>
       </BrowserRouter>

    )

}

export default App;
