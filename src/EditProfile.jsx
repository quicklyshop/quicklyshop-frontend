import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './css/Login.css';
import { MainLogin } from './MainLogin';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import SvgIcon from 'react-icons-kit';
import {user} from 'react-icons-kit/icomoon/user';
import { Link } from 'react-router-dom';
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


export class EditProfile extends React.Component{
    // static contextType = ServerContext;

    constructor(props, context) {
        super(props);
        this.getUserData = this.getUserData.bind(this);
        this.getUserData();
        this.state = {
            userName:localStorage.getItem('currentUserName'),
            name:'',
            lastName:'',
            email:'',
            phone:'',
            address:''
        };

        this.submitHandle = this.submitHandle.bind(this);
    }

    baseServerUrl = this.context;
    
    submitHandle(event) {
    		event.preventDefault();
    		console.log('evento:', event);
    		this.props.onLogin();
	     }

    getUserData = (event) => {
        console.log("Start GET at EditProfile");

        const _this = this;

        axios.get(this.baseServerUrl + '/user/'+localStorage.getItem('currentUserName'))
          .then(function (response) {
            const user = JSON.parse(JSON.stringify(response));
            console.log("This is the good response at EditProfile: "+ user.data.firstname );
            console.log("Name at EditProfile: "+ user.data.firstname+user.data.email );
            _this.setState({
              name: user.data.firstname,
              lastName:user.data.lastname,
              email: user.data.email,
              phone: user.data.phone,
              address: user.data.address});
          })
          .catch(function (error) {
            console.log();("Error at EditProfileUser.js: "+error);
          });
    }

    handleEditProfile = (event) => {
        const _this = this;
        const form = {
          email: this.state.email,
          firstname: this.state.name,
          lastname: this.state.lastName,
          username: this.state.email,
          phone: this.state.phone,
          address: this.state.address
        };
        axios.post(this.baseServerUrl + '/user/profile', form)
          .then(function (response){
              console.log("Response EditProfile: "+response);
          })
          .catch(function (error) {
             console.console.error(error);
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

    render(){
        return (

            <React.Fragment>
                <MainLogin />
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <SvgIcon size={20} icon={user}/>
                        </Avatar>
                        <Typography variant="headline">Editar Perfil</Typography>
                        <Typography variant="subheading">Registre solo los campos que desea cambiar</Typography>
                        <form className="form" onSubmit={this.submitHandle}>
                          <FormControl margin="normal" required fullWidth>
                              <InputLabel htmlFor="text">Email</InputLabel>
                             <Input
                                  id="email"
                                  name="email"
                                  autoComplete="email"
                                  disabled="true"
                                  value={this.state.email}
                                  autoFocus
                              />
                          </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="user">Primer Nombre</InputLabel>
                                <Input
                                id="user"
                                name="user"
                                autoComplete="user"
                                value={this.state.name}
                                autoFocus
                                onChange={this.handleNameChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="lastName">Apellido</InputLabel>
                                <Input
                                id="lastName"
                                name="lastName"
                                autoComplete="lastName"
                                value={this.state.lastName}
                                autoFocus
                                onChange = {this.handleLastNameChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="number">Telefono</InputLabel>
                                <Input
                                    id="phone"
                                    name="phone"
                                    autoComplete="phone"
                                    value={this.state.phone}
                                    autoFocus
                                    onChange = {this.handlePhoneChange}
                                />
                             </FormControl>
                              <FormControl margin="normal" required fullWidth>
                                   <InputLabel htmlFor="number">Direccion</InputLabel>
                                   <Input
                                        id="Address"
                                        name="Address"
                                        autoComplete="Address"
                                        value={this.state.address}
                                        autoFocus
                                        onChange = {this.handleAddressChange}
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
                                    onClick={this.handleEditProfile}
                                    component={ Link } to="/"

                                >
                                    Actualizar
                                </Button>
                            </MuiThemeProvider>
                              </FormControl>

                        </form>
                    </Paper>
                </main>
                <br></br><br></br><br></br><br></br><br></br>
            </React.Fragment>

        );
    }



}
