import React from 'react';
import { Container, Row } from 'react-bootstrap';
class Detail extends React.Component {
    state = {
        data: ''
    }
    componentDidMount() {
        let data=JSON.parse(localStorage.getItem('UserData'))
        if (data != null){
            let userData = data[this.props.location.state.data]
            this.setState({data:userData})
        }
        else{
            console.log('not found')
        }    
    }
    render() {
        console.log(this.state)
        return (<Container>
            <Row>
            <h1>
             {this.state.data.title}
            </h1>
            </Row>
            <Row></Row>
            <Row style={{marginTop:'20px'}}>
            <p style={{fontSize:'20px'}}>{this.state.data.content}</p>
            </Row>
        </Container>);
    }


}
export default Detail;