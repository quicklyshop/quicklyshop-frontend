import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';

import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import {happy2} from 'react-icons-kit/icomoon/happy2'


//specify the base color/background of the parent container if needed
export const SidenavComponent = () => (
    <div style={{background: '#2c3e50', color: '#FFF', width: 220}}>
        <SideNav highlightColor='white' highlightBgColor='#89c34b' defaultSelected='profile'>
            <Nav id='profile'>
                <NavIcon><SvgIcon size={20} icon={happy2}/></NavIcon>
                <NavText> Profile </NavText>
            </Nav>
            <Nav id='sales'>
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText> Sales </NavText>
            </Nav>
        </SideNav>
    </div>
);
