import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Contact, Landing, Signup} from './pages';
import Navbar from './components/Navbar';
 
export default class App extends Component{

    state = {
        app_name: "Ma super appli"
    }  


    render(){
        return(
            <Router>
                    <Fragment>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Landing} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/inscription' component={Signup} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}
