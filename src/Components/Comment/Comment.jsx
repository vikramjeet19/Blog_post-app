import React from 'react';
import { Form, Card, Button, FormControl, InputGroup } from 'react-bootstrap';

class Comment extends React.Component {
    state = {
        comment: '',
        name: '',
        id: this.props.id
    }

    changedHandler = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        let data = [];
        if (JSON.parse(localStorage.getItem('Comments')) !== null) {
            data = [...JSON.parse(localStorage.getItem('Comments'))]
            data.push(this.state);
            localStorage.setItem('Comments', JSON.stringify(data));
        }
        else {
            data.push(this.state);
            localStorage.setItem('Comments', JSON.stringify(data));
        }

    }


    render() {
        console.log(this.state)
        return (<>
            <h3 style={{ marginTop: '100px' }}>Comments</h3>
            <Card style={{ height: 'auto', width: '80%' }}>
                <Card.Body>
                    <Form>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text >Name</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl onChange={this.changedHandler} id="name" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                        </InputGroup>

                        <Form.Group controlId="comment">
                            <Form.Control onChange={this.changedHandler} placeholder='Enter Your comment' as="textarea" rows="3" />
                        </Form.Group>
                        <Button onClick={this.submitHandler} variant="success">Submit</Button>
                    </Form>



                    <Card bg="secondary" text="white" style={{ width: '100%', marginTop: '50px' }}>
                        <Card.Body>
                            <Card.Title>Name</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
        </>)
    }
}
export default Comment;