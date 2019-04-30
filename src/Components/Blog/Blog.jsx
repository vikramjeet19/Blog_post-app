import React from 'react';
import { Auth } from 'aws-amplify';
import { Card, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';
// import Post from './Post';


class Blog extends React.Component {
    state = {
        blogPage: false,
        userId: '',
        storedData: [],
    }

    componentDidMount() {
        Auth.currentSession()
            .then(data => {
                this.setState({ userId: data.idToken.payload.email })
            })
            .catch(err => console.log(err));
        this.setState({ storedData: JSON.parse(localStorage.getItem('UserData')) })

    }
    detailPostHadler = (key) => {
        this.props.history.push({
            pathname: '/detail',
            state: { data: key },
        })
    }
    clickedHandler = () => {
        this.props.history.push({
            pathname: '/post',
            state: { detail: this.state.userId }
        });
    }
    deleteHandler = (key) => {
        console.log(key);
        let storage = JSON.parse(localStorage.getItem('UserData'));
        storage.splice(key, 1)
        console.log(storage);
        localStorage.setItem('UserData', JSON.stringify(storage));
        this.setState({storedData:storage})
       this.props.history.push('/')
    }
    editHandler = (key) => {
        console.log(key);
        this.props.history.push({
            pathname: '/edit',
            state: { detail: this.state.storedData[key] , key:key}
        });
    }

    render() {
    
        return (<div style={{ marginTop: '30px', marginLeft: '80px' }}>
            <Row >
                <Col md="auto">
                    <Card onClick={this.clickedHandler} bg="dark" text="white" border="warning" style={{ width: '18rem' }}>
                        <Card.Header>
                            <Card.Title>Create New Blog:</Card.Title>
                        </Card.Header>
                        <Card.Body style={{ textAlign: 'center', fontSize: '50px' }}>
                            <Card.Text>
                                <FontAwesomeIcon icon="plus-circle" />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row style={{ marginTop: '20px' }}>
                {this.state.storedData ? this.state.storedData.map((mapper, key) => {
                    return (
                        <Card key={key} bg="dark" text="white" border="warning" style={{ width: '18rem', height: '13rem', marginLeft: '15px', marginTop: '20px' }}>
                            <Card.Header>
                                <Row>
                                    <Col>
                                        <Card.Title className=" text-left" >{mapper.title}</Card.Title>
                                    </Col>
                                    <Col>
                                        <Card.Title className=" text-center">
                                            {/* <FontAwesomeIcon style={{ marginLeft: '10px' }} icon="heart" /> */}
                                            <FontAwesomeIcon onClick={() => this.deleteHandler(key)} style={{ marginLeft: '10px' }} icon="trash" />
                                            <FontAwesomeIcon onClick={() => this.editHandler(key)} style={{ marginLeft: '10px' }} icon="edit" />
                                        </Card.Title>
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Card.Body onClick={() => this.detailPostHadler(key)} >
                                <Card.Text>
                                    {mapper.content}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                }) : null}</Row>
        </div>);
    }
}
export default withRouter(Blog);