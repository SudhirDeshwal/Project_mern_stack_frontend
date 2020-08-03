import React from 'react';
import{BrowserRouter, Switch, Route} from 'react-router-dom'
import Signin from '../src/user/Signin'
import Signup from '../src/user/Signup'
import Home from '../src/core/Home'
import PrivateRoute from '../src/auth/PrivateRoute'
import Dashboard from '../src/user/UserDashboard'
import AdminRoute from '../src/auth/AdminRoute'
import AdminDasboard from '../src/user/AdminDasboard'
import AddCategory from '../src/admin/AddCategory'
import AddProduct from './admin/AddProduct'



const App = () => {
 
    return (

    <BrowserRouter>  
   <Switch>
          <Route path="/Signin" exact component={Signin}></Route> 
          <Route path="/Signup" exact component={Signup}></Route>
          <Route path="/" exact component={Home}></Route>
          <PrivateRoute path="/user/dashboard" exact component={Dashboard}></PrivateRoute>
          <AdminRoute path="/admin/dashboard" exact component={AdminDasboard}></AdminRoute>
          <AdminRoute path="/create/category" exact component={AddCategory}></AdminRoute>
          <AdminRoute path="/create/product" exact component={AddProduct}></AdminRoute>
       </Switch>
       </BrowserRouter>

    )

}

export default App;
