import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'


 
export default class Navbar extends Component{
    render(){
        return(
           <MainContainer>
               <LeftPart>
                   <Link to="/">
                        Accueil
                   </Link>
               </LeftPart>
               <RightPart>
                    <Link to="/connexion">
                            connexion
                    </Link>
                    <Link to="/inscription">
                            inscription
                    </Link>
                    <Link to="/contact">
                        Contact
                    </Link>
               </RightPart>
           </MainContainer>
        );
    }
}

const MainContainer = styled.div`
    background-color: rgb(50,50,50);
    padding: 1em;
    color: white;
    display: flex;
    justify-content: space-between;
`

const LeftPart = styled.div`
    flex-grow: 1;
    background-color: ${props => props.background};
`

const RightPart = styled.div`
    flex-grow: 1;
    text-align: right;
`

