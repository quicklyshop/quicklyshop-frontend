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
import { MainLogin } from './MainLogin';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import SvgIcon from 'react-icons-kit';
import {user} from 'react-icons-kit/icomoon/user'


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


export class EditName extends React.Component{
    constructor(props) {
    super(props);
    this.submitHandle = this.submitHandle.bind(this);
    }

    submitHandle(event) {
		event.preventDefault();
		console.log('evento:', event);
		this.props.onLogin();
	}





    render(

    ){
        return (

            <React.Fragment>
                <MainLogin />
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <SvgIcon size={20} icon={user}/>
                        </Avatar>
                        <Typography variant="headline">Cambiar Nombre de Usuario</Typography>
                        <form className="form" onSubmit={this.submitHandle}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="user">Nuevo Usuario</InputLabel>
                                <Input
                                id="user"
                                name="user"
                                autoComplete="user"
                                autoFocus
                                
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
                                    
                                >
                                    Cambiar
                                </Button>
                            </MuiThemeProvider>
                              </FormControl>

                        </form>
                    </Paper>
                </main>
                
            </React.Fragment>

        );
    }



}
