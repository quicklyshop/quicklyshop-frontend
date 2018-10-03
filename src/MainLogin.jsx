import React from 'react';
import { SidenavComponent } from './SidenavComponent';
import Sidebar from "react-sidebar";
import Button from '@material-ui/core/Button';
import {shoppingCart} from 'react-icons-kit/fa/shoppingCart';
import Icon from 'react-icons-kit';
import './css/Main.css';


export class MainLogin extends React.Component {

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
                <div></div>
                <Button title="QuicklyShop">
                  <div id="logo">
                  Quickly Shop
                  <Icon icon={shoppingCart}/>
                  </div>
                </Button>
                <div></div>
            </div>
          </Sidebar>
        );
    }

}
