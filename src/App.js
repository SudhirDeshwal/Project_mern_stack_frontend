import React from 'react';
import{BrowserRouter, Switch, Route} from 'react-router-dom'
import Signin from '../src/user/Signin'
import Signup from '../src/user/Signup'
import Home from '../src/core/Home'



const App = () => {
 
    return (

    <BrowserRouter>
   
       <Switch>
          <Route path="/Signin" exact component={Signin}></Route>
          <Route path="/Signup" exact component={Signup}></Route>
          <Route path="/" exact component={Home}></Route>

       </Switch>
       </BrowserRouter>

    )

}

export default App;
