import React, {Component} from 'react';
import './App.css';
import logo from './logo.svg';
import 'react-datepicker/dist/react-datepicker.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { Login } from './component/Login';
import { Register} from './component/Register';
import {Profile} from './Profile';
import Avatar from '@material-ui/core/Avatar';

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
                            <Route exact path="/" component={this.ProfileView} />
                        </div>
                     </Router>
                     );
            }else{
                return(
                     <Router>
                        <div>
                            <Route exact path="/" component={this.LoginView} />
                        </div>
                     </Router>
                 );
            }

                
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

    handleRegister =event => {
        //TODO
    }

  }

    
  


export default App;
