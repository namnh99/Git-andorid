import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Class from '../views/Class';
import Student from '../views/Student';

class Routers extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Class}>   
                    </Route>

                    <Route exact path="/student/:class_id" component={Student}> 
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default Routers;