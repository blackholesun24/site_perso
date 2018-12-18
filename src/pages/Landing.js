import React, {Component, Fragment} from 'react';
import {SigninForm} from '../components';

 
export default class Landing extends Component{

    state = {
    
    }

    handleConnexion = (data) => {
        console.log(data)
        this.setState({
            logged: true,
            username: data.username,
            email: data.email
        })
    }

    render(){
        const {username, email, logged} = this.state
        return(
            <Fragment>
                <h1>Landing</h1>
                {logged ?
                    <p>utilisateur connecté : {username}, son email est : {email}</p>
                    :
                    <SigninForm onFormSubmit={this.handleConnexion} />
                }
            </Fragment>    
        );
    }

}

