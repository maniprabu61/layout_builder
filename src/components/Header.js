import React,{useState} from 'react'
import '../styles/header.scss'
import {SidemenuL, SidemenuR} from './Sidemenu'
import { useSelector } from 'react-redux';


function Header() {
  const {  leftSideMenu,  rightSideMenu,logo_position,preset_color} = useSelector(state=>state.header.value);
  const posi = logo_position==='left'?{marginRight: 'auto'}:
                logo_position==='right'?{marginLeft: 'auto'}:
                logo_position==='center'?{margin: '0 auto'}:{display : 'none'};
                
  const themeColor = { background: preset_color};
  return (
    <div className='nav' style={themeColor}>
          {leftSideMenu && <SidemenuL className={'menu_icon_left'} />}
          <img style={posi} className='logo' src="/logo/tigeen_computing_logo.png" alt="logo" />
          {/* <img className='menu_icon menu_icon_right' src="/logo/hamburger-menu.svg" alt="menu_icon" /> */}
          {rightSideMenu && <SidemenuR className={'menu_icon_right'} />}
    </div>
  )
}

export default Header