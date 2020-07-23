import React, { Component } from 'react';
import fire from './containers/config/fire';
import Login from './containers/Login'
import Home from './containers/Home'
import Form from './containers/forms'
import Seat from '../src/containers/config/seats'
class App extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      user : {}
    }
  }
  componentDidMount()
  {
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({user})
      }
      else{
        this.setState({user : null})
      }
    })
  }

  render(){
    return (
      <div className="App">
        {/* {this.state.user ? (<Home/>) : (<Login/>)} */}
        {/* <Form/> */}
        <Seat/>
      </div>
    );
  }
}

export default App;