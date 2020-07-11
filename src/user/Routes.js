import React from 'react';
import{BrowserRouter, Switch, Route} from 'react-router-dom'
import Signin from './Signin'
import Signup from './Signup'


const Routes = () => {
 
    return (

    <div>
       <Switch>
          <Route path="/Signin" exact component={Signin}></Route>
          <Route path="/Signup" exact component={Signup}></Route>

       </Switch>
    </div>

    )

}

export default Routes;