import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './css/Login.css';
import {Main} from './Main';
import { MainLogin } from './MainLogin';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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

export class Login extends React.Component{

    

    render(){
        return (
            <React.Fragment>
                <MainLogin />
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="headline">Iniciar Sesion</Typography>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Usuario</InputLabel>
                                <Input
                                id="email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange = {this.props.handleUserChange}
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
                             <MuiThemeProvider theme={theme}>
                                <Button
                                    align="center"
                                    type="submit"
                                    fullWidth
                                    variant="raised"
                                    color= "primary"
                                    className="submit"
                                    onClick={this.props.handleLogin}
                                >
                                    Login
                                </Button>
                            </MuiThemeProvider> 
                              </FormControl>

                        </form>
                    </Paper>
                </main>
                <main className="layout">
                <FormControl margin="normal" required fullWidth>
                              <MuiThemeProvider theme={theme}>
                                <Button 
                                    align="center"
                                    type="submit"
                                    fullWidth
                                    variant="raised"
                                    color= "primary"
                                    className="submit"
                                    onClick={this.props.handleLogin}
                                    size="large"
                                 >
                                   Registrarse
                                 </Button>
                                </MuiThemeProvider>
                               </FormControl>
                </main>
            </React.Fragment>


        );
    }

    handleUserChange = event => {
        alert(event.target.value);
        this.setState({
            user: event.target.value
        });
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        });
    }

}
