import React from 'react';
import './css/Login.css';
import { MainLogin } from './MainLogin';
import FormControl from '@material-ui/core/FormControl';
import './css/Login.css';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { office } from 'react-icons-kit/icomoon/office';
import SvgIcon from 'react-icons-kit';
import Avatar from '@material-ui/core/Avatar';
import { Container, Row, Col } from 'react-grid-system';
import Button from "@material-ui/core/Button";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Image from 'material-ui-image';


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


export class ImportProduct extends React.Component {
    constructor(props) {
        super(props);

        this.state = { file: '' };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        console.log(e.target.files[0]);
        this.setState({
            file: e.target.files[0]
        });
    }

    handleSubmit(e) {


        const _this = this;

        e.preventDefault();

        let data = new FormData();
        data.append('file', this.state.file);

        if (this.props.axios !== null) {
            this.props.axios.post('/import', data)
                .then(function (response) {
                    console.log("file uploaded!", data);
                })
                .catch(function (error) {
                    console.log("failed file upload", error);
                });
        } else {
            console.log("ERROR: axios no esta definido");
        }
    }


    render() {
        return (

            <React.Fragment>
                <MainLogin />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <SvgIcon size={20} icon={office} />
                        </Avatar>
                        <Typography variant="headline">Importe todos sus productos</Typography>
                        <FormControl margin="normal" onSubmit={this.handleSubmit}>
                            <MuiThemeProvider theme={theme}>
                                <input
                                    id="file"
                                    type="file"
                                    onChange={this.handleInputChange}
                                >
                                </input>

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="raised"
                                    color="primary"
                                    className="submit"
                                    onClick={this.handleSubmit}
                                >
                                    Importar
                                    </Button>
                            </MuiThemeProvider>
                        </FormControl>
                    </Paper>
                </main>
                <br></br><br></br><br></br><br></br><br></br>
            </React.Fragment>

        );
    }



}