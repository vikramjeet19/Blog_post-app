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
import User from './Components/UserDEtail/UserDetails';

import { faPlusCircle,faUserTie,faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';
import Current from './Components/UserDEtail/current';
library.add(faPlusCircle,faTrash,faUserTie,faEdit)


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
        <Route path= '/user' component={Current}/>
        <Route path='/' component={Blog} />   
        </Switch>
       
      </div>
    );
  }

}

export default withAuthenticator(App);
