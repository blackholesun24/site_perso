import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Contact, Landing} from './pages';
import Navbar from './components/Navbar';
 
export default class App extends Component{

    state = {
        app_name: "Ma super appli"
    }  


    render(){
        return(
            <Fragment>
                <Navbar />
                <Router>
                    <Switch>
                        <Route exact path='/' component={Landing} />
                        <Route path='/contact' component={Contact} />
                    </Switch>
                </Router>
            </Fragment>
        );
    }

}

