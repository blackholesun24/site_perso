import styled from 'styled-components'

export const Form = styled.form`
   
`

export const Button = styled.button``

export const Input = styled.input`
    padding: 0.5em;
    font-size: 1.3em;
    border-radius: 0.2em;
    border: 1px solid ${props => props.invalid ? "red" : "#dedede"};
    height: 30px;
    width: 200px;
`
