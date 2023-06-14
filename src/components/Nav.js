import React from 'react'
import '../styles/nav.scss'
import { useSelector } from 'react-redux';

function Nav() {
  const {  leftSideMenu,  rightSideMenu,logo_position,preset_color} = useSelector(state=>state.header.value);
  const themeColor = { background: preset_color};
  return (
    <div className='header_' style={themeColor}>
          <ul>
            <li className='active'>TAB ONE</li>
            <li>TAB TWO</li>
            <li>TAB THREE</li>
          </ul>
    </div>
  )
}

export default Nav