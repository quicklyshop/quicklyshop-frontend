import React, {Component} from 'react';
import './App.css';
import logo from './logo.svg';
import 'react-datepicker/dist/react-datepicker.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { Login } from './component/Login';
import { Main } from './component/view/Main';


localStorage.setItem('user',"Camila");
localStorage.setItem('password',"Camila123");
localStorage.setItem("isLoggedIn",false);

class App extends Component {

   state = {
       isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")),
       user:"",
       password:""
   };

    

    LoginView = () => (
        <Login
            handleLogin={this.handleLogin}
            handleUserChange={this.handleUserChange}
            handlePasswordChange={this.handlePasswordChange}
        />
    );


    render() {
            return(
                <Router>
                        <div>
                            {/* <Route exact path="/" component={this.LoginView} /> */}
                            <Route exact path="/" component={Main} />
                        </div>
                </Router>
            );
                
      }

    handleLogin = event =>{
      if(this.state.user === localStorage.getItem("user") && this.state.password===localStorage.getItem("password")){
          this.setState({ isLoggedIn: true });
          localStorage.setItem("isLoggedIn",true);
          
      }
    }

    handleUserChange = event =>{
        this.setState({user: event.target.value});
    }

    handlePasswordChange = event =>{
        this.setState({password: event.target.value});
    }

  }

export default App;