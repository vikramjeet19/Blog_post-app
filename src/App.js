import React from 'react';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react';
import Header from './Components/Header';
import Blog from './Components/Blog/Blog';
import {  Switch,Route } from 'react-router-dom';
import Post from './Components/Blog/Post';
import Detail from './Components/Blog/Detail';
import { library } from '@fortawesome/fontawesome-svg-core';
import Edit from './Components/Blog/Edit';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle,faHeart,faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';
library.add(faPlusCircle,faTrash,faHeart,faEdit)


class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <Switch>
        <Route exact path='/post' component={Post} />
        <Route path='/detail' component={Detail}/>
        <Route path='/edit' component={Edit}/>
        <Route path='/' component={Blog} />
        
        </Switch>
       
      </>
    );
  }

}

export default withAuthenticator(App);
