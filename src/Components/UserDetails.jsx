import React from 'react';
import { Auth } from 'aws-amplify';
import { Card, Container ,Row,Col} from 'react-bootstrap'

class User extends React.Component {

    state = {
        user: ''
    }
    componentDidMount() {
        Auth.currentAuthenticatedUser({
        }).then(user => this.setState({ user: user.attributes }))
            .catch(err => console.log(err));
    }

    render() {
        console.log(this.state)

        return (<Container>
            <Card bg="dark" text="white" style={{ height: 'auto', width: '100%' }}>
                <Card.Body>
                    <Card.Text>
                        <Row>
                            <Col>
                            <h2>{this.state.user.email}</h2>
                            </Col>
                           
                        </Row>
                        <Row>
                            <Col>
                            <h2>{this.state.user.phone_number}</h2>
                            </Col>
                            
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>

        </Container>)
    }
}


export default User;