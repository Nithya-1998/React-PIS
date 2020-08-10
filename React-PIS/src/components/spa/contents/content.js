import React from 'react';
// import { Switch, Route, withRouter, Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Login from './login/login';
import Signup from './signup/signup';
import Home from './home/home';
import Dashboard from './dashboard/dashboard';
import AllProduct from './products/products';
import EditProduct from './products/editproduct';
import AddProduct from './products/addProduct';
import DBoard from './dashboard/dboard';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        // const history = createBrowserHistory();
        // const routes = (<Router history={history} />)
        return (
            <div>
                {/* <h3>Content</h3> */}
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/signup" component={Signup}></Route>
                    <Route path="/dashboard" component={Dashboard}></Route>
                    <Route path="/products" component={AllProduct}></Route>
                    <Route path="/edit" component={EditProduct} />
                    <Route path="/edit/:id" component={EditProduct} />
                    <Route path="/add/:id" component={AddProduct} />
                    <Route path="/add" component={AddProduct} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </div>
        );
    }
}

export default Content;