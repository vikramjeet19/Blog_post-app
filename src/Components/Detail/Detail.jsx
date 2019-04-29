import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Comment from '../Comment/Comment'
class Detail extends React.Component {
    state = {
        data: '',
    }
    componentDidMount() {
        let data = JSON.parse(localStorage.getItem('UserData'))
        if (data != null) {
            let userData = data[this.props.location.state.data]
            this.setState({ data: userData })
        }
        else {
            console.log('not found')
        }
    }
    render() {
        return (<Container style={{ width: '70%' }}>
            <Row>
                <Col >
                    <h1>
                        {this.state.data.title}
                    </h1>
                    <hr />
                    <p style={{ fontSize: '20px' }}>{this.state.data.content}</p>

                    <Comment id={this.props.location.state.data} />
                </Col>
            </Row>
        </Container >);
    }
}
export default Detail;