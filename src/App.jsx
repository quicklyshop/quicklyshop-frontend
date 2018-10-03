import React, {Component} from 'react';
import './css/App.css';
import 'react-datepicker/dist/react-datepicker.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { Login } from './Login';
import { Register} from './Register';
import {Profile} from './Profile';
import { Main } from './Main';  
import axios from 'axios';

class App extends Component {
    constructor(props) {
		super(props);

		const token = localStorage.getItem('userToken');

		this.state = {
			axiosInstance: null,
			user: '',
			password: '',
			token: Object.is(token, undefined) ? '' : token,
			isLoggedIn: typeof token === 'string' && token.length > 0
		};

		this.handleLogin = this.handleLogin.bind(this);
		this.askForToken = this.askForToken.bind(this);
		this.validateAndStoreToken = this.validateAndStoreToken.bind(this);
		this.createAxiosInstance = this.createAxiosInstance.bind(this);
		this.validToken = this.validToken.bind(this);
	}

	componentDidMount() {
		if (this.validToken()) {
			this.createAxiosInstance();
		}
	}

	validToken() {
		const tok = this.state.token;
		console.log(tok);
		return tok !== null && tok.length > 0;
	}

	createAxiosInstance() {
		console.log('creating axios instance');

		const axiosIns = axios.create({
			baseURL: 'http://localhost:8080/api',
			timeout: 1000,
			headers: { 'authorization': 'Bearer ' + this.state.token }
		});

		this.setState({ axiosInstance: axiosIns });
	}

	askForToken() {
		const _this = this;

		axios.post('http://localhost:8080/user/login', {
			username: this.state.user,
			password: this.state.password
		})
			.then(function (response) {
				console.log(response.data);
				_this.validateAndStoreToken(response.data);
			})
			.catch(function (error) {
				console.log(error);
				_this.setState({ 
					isLoggedIn: false,
					axiosInstance: null 
				});
			});
	}

	validateAndStoreToken(tokenJson) {
		console.log('validating token in json', tokenJson);
		if (tokenJson !== undefined && tokenJson.hasOwnProperty('accessToken')) {
			this.setState({ 
				isLoggedIn: true,
				token: tokenJson['accessToken']
			 });
			localStorage.setItem('userToken', tokenJson['accessToken']);
			this.createAxiosInstance();
		} else {
			this.setState({ 
				isLoggedIn: false,
				axiosInstance: null 
			});
		}
	}

	handleLogin() {
		this.askForToken();
		console.log('Actual', this.state.user, this.state.password);
	}

	handleUserChange = (event) => {
		event.preventDefault();
		console.log('user', event.target.value);
		this.setState({ user: event.target.value });
	}

	handlePasswordChange = (event) => {
		event.preventDefault();
		console.log('password', event.target.value);
		this.setState({ password: event.target.value });
	}

	LoginView = () => (
		<Login
			onUserChange={this.handleUserChange}
			onPasswordChange={this.handlePasswordChange}
			onLogin={this.handleLogin}
			isLoggedIn={this.state.isLoggedIn}
		/>
	);

	MainView = () => (
		<Main
			isLoggedIn={this.state.isLoggedIn}
			axios={this.state.axiosInstance}
		/>
    );
    
    RegisterView = () => (
        <Register
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
                            <Route exact path="/profile" component={this.ProfileView} />
                        </div>
                </Router>
            );

      }

  }
}

export default App;
