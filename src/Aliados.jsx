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


export class Aliados extends React.Component{
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
                            <Typography variant="headline">Nuestros Aliados</Typography>
                            <FormControl margin="normal">
                                <Container>
                                    <Row>
                                        <Col  xs={6} md={4}>
                                            <Image
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Almacenes_exito_logo.svg/1028px-Almacenes_exito_logo.svg.png"
                                            />
                                            <br></br>
                                            <MuiThemeProvider theme={theme}>
                                                <Button
                                                    type="submit"
                                                    fullWidth
                                                    variant="raised"
                                                    color="primary"
                                                    className="submit"
                                                >
                                                Seleccionar
                                                </Button>
                                            </MuiThemeProvider>
                                        </Col>
                                        <Col  xs={6} md={4}>
                                            <Image
                                                src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Carulla.png"
                                            />
                                            <br></br>
                                            <MuiThemeProvider theme={theme}>
                                                <Button
                                                    type="submit"
                                                    fullWidth
                                                    variant="raised"
                                                    color="primary"
                                                    className="submit"
                                                >
                                                Seleccionar
                                                </Button>
                                            </MuiThemeProvider>
                                        </Col>
                                        <Col  xs={6} md={4}>
                                            <Image
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Logo_Jumbo_Cencosud.png/200px-Logo_Jumbo_Cencosud.png"
                                            />
                                            <br></br>
                                            <MuiThemeProvider theme={theme}>
                                                <Button
                                                    type="submit"
                                                    fullWidth
                                                    variant="raised"
                                                    color="primary"
                                                    className="submit"
                                                >
                                                Seleccionar
                                                </Button>
                                            </MuiThemeProvider>
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col  xs={6} md={4}>
                                            <Image
                                                src="https://s3-eu-west-1.amazonaws.com/tpd/logos/4c91874300006400050dde6a/0x0.png"
                                            />
                                            <br></br>
                                            <MuiThemeProvider theme={theme}>
                                                <Button
                                                    type="submit"
                                                    fullWidth
                                                    variant="raised"
                                                    color="primary"
                                                    className="submit"
                                                >
                                                Seleccionar
                                                </Button>
                                            </MuiThemeProvider>
                                        </Col>
                                        <Col  xs={6} md={4}>
                                            <Image
                                                src="http://www.conmarca.com/archivos/espectacles_foto_gran/280614125626_pull-and-bear_gr.jpg"
                                            />
                                            <br></br>
                                            <MuiThemeProvider theme={theme}>
                                                <Button
                                                    type="submit"
                                                    fullWidth
                                                    variant="raised"
                                                    color="primary"
                                                    className="submit"
                                                >
                                                Seleccionar
                                                </Button>
                                            </MuiThemeProvider>
                                        </Col>
                                        <Col  xs={6} md={4}>
                                            <Image
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/245px-H%26M-Logo.svg.png"
                                            />
                                            <br></br>
                                            <MuiThemeProvider theme={theme}>
                                                <Button
                                                    type="submit"
                                                    fullWidth
                                                    variant="raised"
                                                    color="primary"
                                                    className="submit"
                                                >
                                                Seleccionar
                                                </Button>
                                            </MuiThemeProvider>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col  xs={6} md={4}>
                                            <Image
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Falabella.svg/1280px-Falabella.svg.png"
                                            />
                                            <br></br>
                                            <MuiThemeProvider theme={theme}>
                                                <Button
                                                    type="submit"
                                                    fullWidth
                                                    variant="raised"
                                                    color="primary"
                                                    className="submit"
                                                >
                                                Seleccionar
                                                </Button>
                                            </MuiThemeProvider>
                                        </Col>
                                        <Col  xs={6} md={4}>
                                            <Image
                                                src="https://pbs.twimg.com/profile_images/971352713517821952/SvetxMXi_400x400.jpg"
                                            />
                                            <br></br>
                                            <MuiThemeProvider theme={theme}>
                                                <Button
                                                    type="submit"
                                                    fullWidth
                                                    variant="raised"
                                                    color="primary"
                                                    className="submit"
                                                >
                                                Seleccionar
                                                </Button>
                                            </MuiThemeProvider>
                                        </Col>
                                        <Col  xs={6} md={4}>
                                            <Image
                                                src="http://unicentrodearmenia.com/wp-content/uploads/2016/06/gef.png"
                                            />
                                            <br></br>
                                            <MuiThemeProvider theme={theme}>
                                                <Button
                                                    type="submit"
                                                    fullWidth
                                                    variant="raised"
                                                    color="primary"
                                                    className="submit"
                                                >
                                                Seleccionar
                                                </Button>
                                            </MuiThemeProvider>
                                        </Col>
                                    </Row>
                                </Container>                            
                            </FormControl>
                        </Paper>
                    </main>
                <br></br><br></br><br></br><br></br><br></br>
            </React.Fragment>

        );
    }



}
