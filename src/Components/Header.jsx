import React from 'react';
import { Navbar} from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import {Button} from 'react-bootstrap'

class Header extends React.Component  {
    signOut = () => {
        Auth.signOut()
        .then(data => console.log(data))
        .catch(err => console.log(err));
      }
    render(){
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>Blog Post </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Button variant="outline-warning" onClick={this.signOut} >Logout</Button>
                    </Navbar.Collapse>
                </Navbar>
            </>)
    }
    
    
}
export default Header;