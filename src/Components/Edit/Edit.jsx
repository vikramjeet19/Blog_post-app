import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import '../Post/Post.css'
class Edit extends React.Component {
    state = {
        title: this.props.location.state.detail.title,
        content: this.props.location.state.detail.content,
    }
    submitHandler = (e) => {
        e.preventDefault();
        let data = [];
            data = [...JSON.parse(localStorage.getItem('UserData'))]
            data[this.props.location.state.key] ={...this.state}
            console.log( data[this.props.location.state.key]);
            localStorage.setItem('UserData', JSON.stringify(data));
            this.props.history.push('/');
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
                        <input type="text" onChange={this.changeHandler}  value={this.state.title} id='title' required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Title</label>
                    </div>
                    <Form.Text className="text-muted">
                        Write your Blog
                    </Form.Text>
                    <Form.Group controlId="content">
                        <Form.Control as="textarea" value={this.state.content} onChange={this.changeHandler} rows="8" />
                    </Form.Group>
                    <Button onClick={this.submitHandler}   variant="success">Submit</Button>
                </Form>
            </Container >);
    }
}
export default withRouter(Edit);