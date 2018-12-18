import React, {Component, Fragment} from 'react';
import {SignupForm} from '../components';
import { Button } from '../common';
import {Link} from 'react-router-dom';

 
export default class Signup extends Component{

    state = {
    
    }

    handleRegistration = (data) => {
        if(data.password === data.password_confirm){
            this.setState({
                register: true,
                username: data.username,
                email: data.email
            })
        }else{
            this.setState({
            register: false,
            message: "Vos mots de passe ne conrrespondent pas",
            })
        }
    }

    render(){
        const {username, email, register} = this.state
        return(
            <Fragment>
                <h1>Inscription</h1>
                {this.state.message};
                {register ?
                    <Fragment>
                        <p>Compte creer : {username}, son email est : {email}</p> 
                        <Link to="/"><Button>Retour à l'accueil</Button></Link>
                    </Fragment> 
                    
                :
                    <SignupForm onFormSubmit={this.handleRegistration} />
                }
            </Fragment>    
        );
    }

}

