import React from 'react';
import { Navbar,Button} from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import {withRouter,Link} from 'react-router-dom';
// import axios from 'axios';


class Header extends React.Component  {
    signOut = () => {
        // let storage = JSON.parse(localStorage.getItem('UserData'));
        // axios.post('https://blogpostappdata-3ee9c.firebaseio.com/data.json',storage)
        // .then(resolved=>console.log(resolved))
        // .catch(err => console.log(err));
        
        localStorage.clear();
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
                    <Link style={{marginRight:'30px'}} to='/user'>User</Link>
                    <Button variant="outline-warning" onClick={this.signOut} >Logout</Button>
                    </Navbar.Collapse>
                </Navbar>
            </>)
    }
}
export default withRouter(Header);