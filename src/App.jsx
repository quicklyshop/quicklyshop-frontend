import React, {Component} from 'react';
import './css/App.css';
import logo from './imgResources/logo.svg';
import 'react-datepicker/dist/react-datepicker.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { Login } from './Login';
import { Register} from './Register';
import {Profile} from './Profile';
import Avatar from '@material-ui/core/Avatar';
import { Main } from './Main';

localStorage.setItem('user',"Camila");
localStorage.setItem('password',"Camila123");
localStorage.setItem("isLoggedIn",false);

class App extends Component {


   state = {
       isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")),
       user:"",
       password:""
   };


    ProfileView = () => (
        <Profile />
    );


    RegisterView = () => (
        <Register
            handleLogin={this.handleLogin}
            handleUserChange={this.handleUserChange}
            handlePasswordChange={this.handlePasswordChange}
        />
    );

    LoginView = () => (
        <Login
            handleLogin={this.handleLogin}
            handleUserChange={this.handleUserChange}
            handlePasswordChange={this.handlePasswordChange}
        />
    );


    render() {
            if(this.state.isLoggedIn){
                return(
                    <Router>
                        <div>
                            <Route exact path="/register" component={this.RegisterView} />
                        </div>
                     </Router>
                     );
            }else{
                return(
                     <Router>
                        <div>
                            <Route exact path="/login" component={this.LoginView} />
                            <Route exact path="/" component={Main} />
                            <Route exact path="/register" component={this.RegisterView} />
                        </div>
                </Router>
            );

      }

    const handleLogin = event =>{
      if(this.state.user === localStorage.getItem("user") && this.state.password===localStorage.getItem("password")){
          this.setState({ isLoggedIn: true });
          localStorage.setItem("isLoggedIn",true);

      }
    }

    const handleUserChange = event =>{
        this.setState({user: event.target.value});
    }

    const handlePasswordChange = event =>{
        this.setState({password: event.target.value});
    }

    const handleRegister =event => {
        //TODO
    }

  }
  }

export default App;
