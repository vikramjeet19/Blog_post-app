import React from 'react';
import { Navbar,Button} from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import {withRouter,Link} from 'react-router-dom';

class Header extends React.Component  {
    signOut = () => {
        Auth.signOut()
        .then(data => console.log(data))
        .catch(err => console.log(err));
      }
      homeHandler=()=>{
        this.props.history.push('/')
      }
    render(){
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand onClick={this.homeHandler}><Link to='/'>Blog Post</Link> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Button variant="outline-warning" onClick={this.signOut} >Logout</Button>
                    </Navbar.Collapse>
                </Navbar>
            </>)
    }
}
export default withRouter(Header);