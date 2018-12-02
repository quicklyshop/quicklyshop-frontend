import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Main} from './Main';
import './css/Register.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import axios from 'axios';

const theme = createMuiTheme({
    palette: {
      primary: { main: "#89c34b" },
    },
    overrides: {
        MuiButton: {
          raisedPrimary: {
            color: 'white',
          },
        },
      }
  });

export class Register extends React.Component{
    // static contextType = ServerContext;

    constructor(props, context){
      super(props);
      this.state = {
        name : '',
        lastName : '',
        email : '',
        phone : '',
        address : '',
        password : '',
        passwordConfirmation : ''
      };

      this.handleRegister = this.handleRegister.bind(this);
    }

    baseServerUrl = this.context;

  handleNameChange = event => {
      this.setState({
          name: event.target.value
      });
  }

  handleLastNameChange = event => {
      this.setState({
          lastName: event.target.value
      });
  }

  handleEmailChange = event => {
      this.setState({
          email: event.target.value
      });
  }

  handlePhoneChange = event => {
      this.setState({
          phone: event.target.value
      });
  }

  handleAddressChange = event => {
      this.setState({
          address: event.target.value
      });
  }

  handlePasswordChange = event => {
      this.setState({
          password: event.target.value
      });
  }

  handlePasswordConfirmationChange = event => {
      this.setState({
          passwordConfirmation: event.target.value
      });
  }

  handleRegister = (event) => {
    console.log("entra a enviar el post");
    const form = {
      user: {
        email: this.state.email,
        firstname: this.state.name,
        lastname: this.state.lastName,
        username: this.state.email,
        phone: this.state.phone,
        address: this.state.address
      },
      userLogin: {
        username: this.state.email,
        password: this.state.password
      }
    };

    const _this = this;

    axios.post(this.baseServerUrl + '/user/register', form)
    .then(function (response) {
      console.log('Response: '+ response.data);
      localStorage.setItem('currentUserName', _this.state.email);
    })
    .catch(function (error) {
      console.log('Error: '+error);
    });

  }


    render(){
        return (
            <React.Fragment>
                <Main />
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <AssignmentIcon />
                        </Avatar>
                        <Typography variant="headline">Register</Typography>
                        <form className="form" onSubmit={this.handleRegister}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="text">Name</InputLabel>
                                <Input
                                id="name"
                                name="name"
                                autoFocus
                                onChange = {this.handleNameChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="text">Last Name</InputLabel>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    autoFocus
                                    onChange = {this.handleLastNameChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="text">Email</InputLabel>
                               <Input
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange = {this.handleEmailChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="number">Phone</InputLabel>
                                <Input
                                    id="phone"
                                    name="phone"
                                    autoComplete="phone"
                                    autoFocus
                                    onChange = {this.handlePhoneChange}
                                />
                             </FormControl>
                              <FormControl margin="normal" required fullWidth>
                                   <InputLabel htmlFor="number">Address</InputLabel>
                                   <Input
                                        id="Address"
                                        name="Address"
                                        autoComplete="Address"
                                        autoFocus
                                        onChange = {this.handleAddressChange}
                                   />
                              </FormControl>
                              <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange = {this.handlePasswordChange}
                                />
                              </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Confirm Password</InputLabel>
                                <Input
                                    name="confirmPassword"
                                    type="password"
                                    id="confirmPassword"
                                    autoComplete="current-password"
                                    onChange = {this.handlePasswordConfirmationChange}
                                />
                             </FormControl>
                             <FormControl margin="normal" required fullWidth>
                               <MuiThemeProvider theme={theme}>
                                  <Button
                                      align="center"
                                      type="submit"
                                      fullWidth
                                      variant="raised"
                                      color="primary"
                                      className="submit"
                                      onClick={this.handleRegister}
                                      component={ Link } to="/">
                                      Submit
                                  </Button>
                                </MuiThemeProvider>
                            </FormControl>
                        </form>
                    </Paper>
                </main>
                <br/><br/><br/><br/><br/><br/>
            </React.Fragment>


        );
    }

}
