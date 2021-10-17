import React, {useEffect} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import {dispatchLogin, fetchUser, dispatchGetUser} from './redux/actions/authAction'

import Header from './components/header/Header';
import Body from './components/body/Body';
import Main from './components/Main/Main';

import Carousel from './components/Carousels/Carousel';

import { About } from './components/About/About';


import axios from 'axios';

function App() {
  const dispatch = useDispatch()
  const token = useSelector(state => state.token)
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin')
    if(firstLogin){
      const getToken = async () => {
        const res = await axios.post('/user/refresh_token', null)
        dispatch({type: 'GET_TOKEN', payload: res.data.access_token})
      }
      getToken()
    }
  },[auth.isLogged, dispatch])

  useEffect(() => {
    if(token){
      const getUser = () => {
        dispatch(dispatchLogin())

        return fetchUser(token).then(res => {
          dispatch(dispatchGetUser(res))
        })
      }
      getUser()
    }
  },[token, dispatch])

  return (
    <Router>
      <div className="App">
      <Route exact path="/">
        <Header />
        <Main />
        <Carousel />
        <Body />
      </Route>
      <Route exact path="/login">
      <Header />
        <Body />
      </Route>
      <Route exact path="/register">
      <Header />
        <Body />
      </Route>
      <Route exact path="/profile">
      <Header />
        <Body />
      </Route>
      <Route exact path="/About">
      <Header />
        <About />
      </Route>


      </div>
    </Router>
  );
}

export default App;
