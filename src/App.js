import React , { Component} from 'react';
import Login  from './Login.js';
function App(){
  /*  
     constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  */
    const body1={
        backgroundColor:"black",
        height:"100%",
        width:"100%",
    }
        return (
            
            <div style={body1} className="app-content">
            <Login/>
            </div>
        );
          
    }
export default App;
