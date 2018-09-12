import React from 'react';
import { SidenavComponent } from './SidenavComponent';
import Sidebar from "react-sidebar";
import Button from '@material-ui/core/Button';
import {list2} from 'react-icons-kit/icomoon/list2';
import {shoppingCart} from 'react-icons-kit/fa/shoppingCart';
import {signOut} from 'react-icons-kit/fa/signOut';
import Icon from 'react-icons-kit';
import './Main.css';
import { Profile } from '../../Profile';

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
            <div id="menu">
                <Button onClick={() => this.onSetSidebarOpen(true)}>
                  <div id="open-menu"><Icon icon={list2}/></div>
                </Button>
                <div id="logo">QuicklyShop<Icon icon={shoppingCart}/></div>
                <span id="spacer"></span>
                <Button>
                  <div id="logout"><Icon icon={signOut}/></div>
                </Button>
            </div>
            <Profile></Profile>
          </Sidebar>
        );
    }

}