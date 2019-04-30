import React from 'react';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react';
import Header from './Components/Header/Header';
import Blog from './Components/Blog/Blog';
import {  Switch,Route} from 'react-router-dom';
import Post from './Components/Post/Post';
import Detail from './Components/Detail/Detail';
import { library } from '@fortawesome/fontawesome-svg-core';
import Edit from './Components/Edit/Edit';
import User from './Components/UserDetails';

import { faPlusCircle,faHeart,faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';
library.add(faPlusCircle,faTrash,faHeart,faEdit)


class App extends React.Component {
 
  render() {
    return (
      <div className='body'>
      
        <Header />
        <Switch>
        <Route exact path='/post' component={Post} />
        <Route path='/detail' component={Detail}/>
        <Route path='/edit' component={Edit}/>
        <Route path='/userDetail' component={User}/> 
        <Route path='/' component={Blog} />   
        </Switch>
       
      </div>
    );
  }

}

export default withAuthenticator(App);
