import React from 'react'
import '../styles/footer.scss'
import { SidemenuL, SidemenuR } from './Sidemenu'
import { useSelector } from 'react-redux';

function Footer() {
    const { bottomMenu } = useSelector(state=>state.header.value);
  return (
    <div className='footer'>
        <div className='footer_left_section'>
            {/* <img className='menu_icon menu_icon_left' src="/logo/hamburger-menu.svg" alt="menu_icon" /> */}
            <SidemenuL className={'menu_icon_left'} />

        </div>
        {bottomMenu && 
        <div className='footer_center_section'>
            <div className='mail'>
                <img src='/logo/mail.png' alt='mail_icon' className='mail_icon'/>
                <span>MAILS</span>
            </div>
            <div className='alarm'>
                <img src='/logo/alarm.svg' alt='alarm_icon' className='alarm_icon'/>
                <span>ALARMS</span>
            </div>
            <div className='video active'>
                <img src='/logo/movie.svg' alt='movie_icon' className='movie_icon'/>
                <span>MOVIES</span>
            </div>
        </div>}
        <div className='footer_right_section'>
            {/* <img className='menu_icon menu_icon_left' src="/logo/hamburger-menu.svg" alt="menu_icon" /> */}
            <SidemenuR className={'menu_icon_left'} />
        </div>
    </div>
  )
}

export default Footer