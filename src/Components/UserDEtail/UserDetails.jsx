import React from 'react';
// import { Auth } from 'aws-amplify';
import { Card, Container ,Row,Col} from 'react-bootstrap'

class User extends React.Component {

    state = {
        user: ''
    }

    componentDidMount() {
        this.setState({user:this.props.location.state.data})

    }

    render() {
        return (<Container>
            <Card bg="dark" text="white" style={{ height: 'auto', width: '100%' }}>
                <Card.Body>
                    <Card.Text>
                        <Row>
                            <Col>
                            <h2>{this.state.user.userId}</h2>
                            </Col>  
                        </Row>
                        <Row>
                            <Col>
                            <h2>{this.state.user.userNumber}</h2>
                            </Col>
                            
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>

        </Container>)
    }
}


export default User;