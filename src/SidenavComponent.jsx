import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import {cart} from 'react-icons-kit/icomoon/cart';
import {office} from 'react-icons-kit/icomoon/office';
import {user} from 'react-icons-kit/icomoon/user'


//specify the base color/background of the parent container if needed
export const SidenavComponent = () => (
    <div style={{background: '#2c3e50', color: '#FFF', width: 220}}>
        <SideNav highlightColor='white' highlightBgColor='#89c34b' defaultSelected='profile'>
            <Nav id='profile'>
                <NavIcon><SvgIcon size={20} icon={user}/></NavIcon>
                <NavText> Mi perfil </NavText>
            </Nav>
            <Nav id='sales'>
                <NavIcon><SvgIcon size={20} icon={cart}/></NavIcon>
                <NavText> Mis compras </NavText>
            </Nav>
            <Nav id='stores'>
                <NavIcon><SvgIcon size={20} icon={office}/></NavIcon>
                <NavText> Aliados </NavText>
            </Nav>
        </SideNav>
    </div>
);
