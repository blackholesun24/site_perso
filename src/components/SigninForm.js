import React, {Component} from 'react'
import { Form, Button, Input } from '../common'

export default class SigninForm extends Component {

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
        const { email, username, password } = this.state
        return (
            <Form onSubmit={this.submitForm}>
                <Input type="email" value={email} onChange={this.handleChange} name="email" placeholder="email"/>
                <Input type="text" value={username} onChange={this.handleChange} name="username" placeholder="username"/>
                <Input type="password" value={password} onChange={this.handleChange} name="password" placeholder="password"/>
                <Button>CONNEXION</Button>
            </Form>
        )
    }
}