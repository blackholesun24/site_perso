import React, {Component} from 'react'
import { Form, Button, Input } from '../common'

export default class SignupForm extends Component {

    state = {

    }

    handleChange = ({target: {name, value}}) => this.setState({[name]: value})

    submitForm = (e) => {
        e.preventDefault()
        if(this.props.onFormSubmit){
            this.props.onFormSubmit(this.state)
        }
    }

    render(){
        const { email, username, password, password_confirm } = this.state;
        const isInvalidPass = (password !== password_confirm);
        const isValid = username && email && password && (password === password_confirm);
        return (
            <Form onSubmit={this.submitForm}>
                <Input type="email" value={email} onChange={this.handleChange} name="email" placeholder="email"/>
                <Input type="text" value={username} onChange={this.handleChange} name="username" placeholder="username"/>
                <Input type="password" value={password} onChange={this.handleChange} name="password" placeholder="password"/>
                <Input type="password" value={password_confirm} onChange={this.handleChange} name="password_confirm" placeholder="password_confirm"/>
                {isInvalidPass && <label>Les mots de passe sont differents</label>}
                {isValid &&
                    <Button>Inscription</Button>
                }
               
            </Form>
        )
    }
}