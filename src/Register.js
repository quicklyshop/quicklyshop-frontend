import React from 'react';
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
    constructor(props){
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

  handleRegister() {

    /*TODO: Agregar los estados que le faltan a los usuarios, telfono, direccion*/
    axios.post('http://localhost:8080/user/login', [{
      email : this.state.email,
      firstname : this.state.name,
      lastname : this.state.lastName,
      username : this.state.email
    },{
      username : this.state.email,
      password : this.state.password
    }])
    .then(function (response) {
      console.log(response.data);
    })
    .catch(funtion (error) {
      console.log(error);
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
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="text">Name</InputLabel>
                                <Input
                                id="name"
                                name="name"
                                autoFocus
                                onChange = {this.props.handleNameChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="text">Last Name</InputLabel>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    autoFocus
                                    onChange = {this.props.handleLastNameChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="text">Email</InputLabel>
                               <Input
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange = {this.props.handleEmailChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="number">Phone</InputLabel>
                                <Input
                                    id="phone"
                                    name="phone"
                                    autoComplete="phone"
                                    autoFocus
                                    onChange = {this.props.handlePhoneChange}
                                />
                             </FormControl>
                              <FormControl margin="normal" required fullWidth>
                                   <InputLabel htmlFor="number">Address</InputLabel>
                                   <Input
                                        id="Address"
                                        name="Address"
                                        autoComplete="Address"
                                        autoFocus
                                        onChange = {this.props.handleAddressChange}
                                   />
                              </FormControl>
                              <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange = {this.props.handlePasswordChange}
                                />
                              </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Confirm Password</InputLabel>
                                <Input
                                    name="confirmPassword"
                                    type="confirmPassword"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange = {this.props.handlePasswordConfirmationChange}
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
                                    onClick={this.props.handleRegister}
                                >
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
