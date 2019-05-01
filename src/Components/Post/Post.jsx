import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './Post.css'
class Post extends React.Component {
    state = {
        title: '',
        content: '',
        userId: this.props.location ? this.props.location.state.userEmail : '' ,
        userNumber: this.props.location ? this.props.location.state.userNumber : '' 
    }


    submitHandler = (e) => {
        e.preventDefault();
        let data = [];
        if(this.state.title.length !== 0 && this.state.content.length !== 0){
        if (JSON.parse(localStorage.getItem('UserData')) !== null) {
            data = [...JSON.parse(localStorage.getItem('UserData'))]
            data.push(this.state);
            localStorage.setItem('UserData', JSON.stringify(data));
            this.props.history.push('/');
        }
        else {
            data.push(this.state);
            localStorage.setItem('UserData', JSON.stringify(data));
            this.props.history.push('/');
        }

    }else{
        alert('enter data')
    }
}
    
changeHandler = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })

    }
    render() {
        return (
            <Container style={{ marginTop: '50px', width: '80%' }}>
                <Form>
                    <div className="group">
                        <input type="text" onChange={this.changeHandler} id='title' required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Title</label>
                    </div>
                    <Form.Text className="text-muted">
                        Write your Blog
                    </Form.Text>
                    <Form.Group controlId="content">
                        <Form.Control as="textarea" onChange={this.changeHandler} rows="8" />
                    </Form.Group>
                    <Button onClick={this.submitHandler} variant="success">Submit</Button>
                </Form>
            </Container >);
    }
}
export default withRouter(Post);