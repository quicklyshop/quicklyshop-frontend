import React from 'react';
import { SidenavComponent } from './SidenavComponent';
import Sidebar from "react-sidebar";
import Button from '@material-ui/core/Button';
import { Profile } from './content/Profile';

export class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sidebarOpen: false,
            onSetSidebarOpen: this.onSetSidebarOpenHandle
        }

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    sidebarOpenHandle() {
        console.log('llama funcion');
    }

    onSetSidebarOpenHandle() {
        console.log('llama funcion');
    }

    onSetSidebarOpen(open) {
        console.log('changes state of sidebar to', open);
        this.setState({ sidebarOpen: open });
    }

    render() {
        return (
        <Sidebar
            sidebar={<SidenavComponent />}
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{ sidebar: { background: "white" } }}
            >
            <Button onClick={() => this.onSetSidebarOpen(true)}>
              Open sidebar
            </Button>
            <Profile></Profile>
          </Sidebar>
        );
    }

}