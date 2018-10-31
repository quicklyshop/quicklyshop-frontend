import React from 'react';
import './css/Login.css';
import { MainLogin } from './MainLogin';
import FormControl from '@material-ui/core/FormControl';
import './css/Login.css';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {office} from 'react-icons-kit/icomoon/office';
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

export class ImportProduct extends React.Component{
    constructor(props) {
    super(props);
    }

    render(

    ){
        return (

            <React.Fragment>
                <MainLogin />
                    <main className="layout">
                        <Paper className="paper">
                            <Avatar className="avatar">
                                <SvgIcon size={20} icon={office}/>
                            </Avatar>
                            <Typography variant="headline">Importe todos sus productos</Typography>
                            <FormControl margin="normal">
                                <MuiThemeProvider theme={theme}>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="raised"
                                        color="primary"
                                        className="submit"
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