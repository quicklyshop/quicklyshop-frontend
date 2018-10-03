import React, {Component} from 'react';
import './css/App.css';
import 'react-datepicker/dist/react-datepicker.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { Login } from './Login';
import { Register} from './Register';
import {Profile} from './Profile';
import { Main } from './Main';
import authentication from './Authentication';

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
                            <Route exact path="" component={this.LoginView} />
                            <Route exact path="/register" component={this.RegisterView} />
                            <Route exact path="/profile" component={this.ProfileView} />
                        </div>
                </Router>
            );

      }

    const handleLogin = event =>{
        this.setState({ isLoggedIn: true });
        localStorage.setItem("isLoggedIn",true);
        authentication.authenticate(this.state.user,this.state.password);
    }

    const handleUserChange = event =>{
        this.setState({user: event.target.value});
        alert(this.state);
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
