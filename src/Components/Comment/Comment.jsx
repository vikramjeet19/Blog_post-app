import React from 'react';
import { Form, Card, Button, FormControl, InputGroup } from 'react-bootstrap';

class Comment extends React.Component {
    state = {

        comment: '',
        name: '',
        id: this.props.id,
        localComments: []
    }

    componentDidMount() {

        if (JSON.parse(localStorage.getItem('Comments')) !== null) {
            let commentArray = []
            commentArray = [...JSON.parse(localStorage.getItem('Comments'))]
            let updatedArray = commentArray.filter(key => key.id === this.props.id);
            this.setState({
                localComments: updatedArray
            })
        }

    }
    changedHandler = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        let data = [];
       if(this.state.name.length !== 0 && this.state.comment.length !== 0){       
        if (JSON.parse(localStorage.getItem('Comments')) !== null) {
            data = [...JSON.parse(localStorage.getItem('Comments'))];
            data.push(this.state);
            localStorage.setItem('Comments', JSON.stringify(data));
            data = [...JSON.parse(localStorage.getItem('Comments'))];
            let updatedData = data.filter(key => key.id === this.props.id);
            this.setState({ localComments: updatedData, comment: '', name: '' })
        }
        else{
            data.push(this.state);
            localStorage.setItem('Comments', JSON.stringify(data));
            data = [...JSON.parse(localStorage.getItem('Comments'))];
            let updatedData = data.filter(key => key.id === this.props.id);
            this.setState({ localComments: updatedData, comment: '', name: '' })
        }}
        else{
            alert('enter data');
        }

    }
    render() {

        return (<>
            <h3 style={{ marginTop: '100px' }}>Comments</h3>
            <Card style={{ height: 'auto', width: '80%' }}>
                <Card.Body>
                    <Form >
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text >Name</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl onChange={this.changedHandler} id="name" value={this.state.name} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                        </InputGroup>

                        <Form.Group controlId="comment">
                            <Form.Control onChange={this.changedHandler} p value={this.state.comment} laceholder='Enter Your comment' as="textarea" rows="3" />
                        </Form.Group>
                        <Button onClick={this.submitHandler} variant="outline-warning">Submit</Button>
                    </Form>

                    {
                        this.state.localComments.map(mapper => {
                            return (<Card bg="dark" text="white" style={{ width: '100%', marginTop: '20px' }}>
                                <Card.Body>
                                    <Card.Title style={{ color: 'orange' }}>{mapper.name}</Card.Title>
                                    <Card.Text>
                                        <p>{mapper.comment}</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>);
                        })
                    }

                </Card.Body>
            </Card>
        </>)
    }
}
export default Comment;