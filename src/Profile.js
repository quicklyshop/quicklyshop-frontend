import React from 'react';
import './css/App.css';
import 'react-datepicker/dist/react-datepicker.css';
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';



const styles = {
      row: {
        display: 'flex',
        justifyContent: 'center',
      },
      avatar: {
        margin: 10,
      },
      bigAvatar: {
        width: 60,
        height: 60,
      },
    };

export class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = { items: [], text: '', priority: 0, dueDate: "" };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    render() {
        return (
                <React.Fragment>
                    <CssBaseline />
                        <main className="layout">
                            <Paper className="paper">
                                <Typography variant="headline">Bienvenido</Typography>


                                <Avatar>
                                    alt="C"


                                </Avatar>
                                <FormControl margin="normal" required fullWidth>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="raised"
                                    color="primary"
                                    className="submit"
                                    onClick={this.props.handleLogin}
                                >
                                Entrar
                                </Button>
                                </FormControl>

                            </Paper>
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
