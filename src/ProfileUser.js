import React from 'react';
import './css/App.css';
import 'react-datepicker/dist/react-datepicker.css';
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import Avatar from 'react-avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Main} from './Main';
import './css/profile.css';
import ReactDOM from 'react-dom';
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

export class ProfileUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {userName:props.user , name: ""};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getProfileData = this.getProfileData.bind(this);

        console.log("User in profile: "+props.user);

        this.getProfileData();
    }

    getProfileData = (event) => {
        console.log("Start GET");

        const _this = this;

        axios.get('http://localhost:8080/user/'+localStorage.getItem('currentUserName'))
          .then(function (response) {
            const user = JSON.parse(JSON.stringify(response));
            console.log("This is the good response at profile: "+ user.data.firstname );
            console.log("Name at profile: "+ user.data.firstname+user.data.lastname );
            const namer = user.data.firstname;
            _this.setState({ name: user.data.firstname + " " + user.data.lastname });
          })
          .catch(function (error) {
            console.log();("Error at ProfileUser.js: "+error);
          });
    };


    render() {
        return (
                <React.Fragment>
                <Main/>
                   <CssBaseline />
                       <main className="layout">
                           <Paper className="paper">
                               <Avatar googleId="118096717852922241760" size="250" round={true} />
                               <br/>
                               <Typography variant="headline">{this.state.name}</Typography>

                               <FormControl margin="normal" required fullWidth>
                               <MuiThemeProvider theme={theme}>
                                   <Button
                                       type="submit"
                                       fullWidth
                                       variant="raised"
                                       color="primary"
                                       className="submit"
                                       onClick={this.handleEditProfile}
                                       component={ Link } to="/editprofile"
                                   >
                                   Editar Perfil
                                   </Button>
                                </MuiThemeProvider>
                               </FormControl>

                           </Paper>
                           <br/>
                           <MuiThemeProvider theme={theme}>
                               <Button
                                   type="submit"
                                   fullWidth
                                   variant="raised"
                                   color="primary"
                                   className="submit"
                                   onClick={this.props.handleLogin}
                               >
                               Hacer una nueva compra
                               </Button>
                          </MuiThemeProvider>
                       </main>
                </React.Fragment>

        );
    }

    handleTextChange(e) {

        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {

        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(e) {
        this.setState({
            dueDate: e.target.value
        });
    }

    handleSubmit(e) {

        e.preventDefault();
        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }

}
