import React from 'react';

import './App.css';
import { withAuthenticator} from 'aws-amplify-react';
import Header from './Header';
class App extends React.Component{
  
  render(){
    return (
      <>
       <Header/>
      </>
    );
  }
   
}

export default withAuthenticator(App);
