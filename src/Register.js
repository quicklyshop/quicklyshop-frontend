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
import './css/Register.css';


export class Register extends React.Component{

    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Typography variant="headline">Register</Typography>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="text">Names</InputLabel>
                                <Input
                                id="name"
                                name="name"
                                autoFocus
                                onChange = {this.props.handleUserChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="text">Last Name</InputLabel>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    autoFocus
                                    onChange = {this.props.handleUserChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="text">Email</InputLabel>
                               <Input
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange = {this.props.handleUserChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="number">Phone</InputLabel>
                                <Input
                                    id="phone"
                                    name="phone"
                                    autoComplete="phone"
                                    autoFocus
                                    onChange = {this.props.handleUserChange}
                                />
                             </FormControl>
                              <FormControl margin="normal" required fullWidth>
                                   <InputLabel htmlFor="number">Address</InputLabel>
                                   <Input
                                        id="Address"
                                        name="Address"
                                        autoComplete="Address"
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
                                <InputLabel htmlFor="password">Confirm Password</InputLabel>
                                <Input
                                    name="confirmPassword"
                                    type="confirmPassword"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange = {this.props.handlePasswordChange}
                                />
                             </FormControl>
                             <div>
                                <Button
                                    align="center"
                                    type="submit"
                                    fullWidth
                                    variant="raised"
                                    color="primary"
                                    className="submit"
                                    align="center"
                                    onClick={this.props.handleRegister}
                                >
                                    Submit
                                </Button>
                              </div>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>


        );
    }

    handleUserChange = event => {
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