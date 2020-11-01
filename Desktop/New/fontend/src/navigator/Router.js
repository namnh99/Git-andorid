import React, { Component } from 'react';
import {
    BrowserRouter as Router, Redirect, Route, Switch
} from 'react-router-dom'
import LoginScreen from '../view/LoginScreen';
import ModView from '../view/ModView';
import NotFound from '../view/NotFound';
import Product from '../view/Product';
import ProductItem from '../view/ProductItem'

class Routers extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/modview" component={ModView}>
                    </Route>

                    <Route exact path="/product/:id" component={ProductItem}>        
                    </Route>

                    <Route exact path="/product" component={Product}>        
                    </Route>

                    <Route exact path="/">
                        <LoginScreen>
                        </LoginScreen>
                    </Route>

                    <Route exact path="/notfound">
                        <NotFound>
                        </NotFound>
                    </Route>

                    <Route path="/">
                        <Redirect to="/notfound">
                        </Redirect>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default Routers;