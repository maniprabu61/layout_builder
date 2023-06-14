import React,{useState} from 'react'
import '../styles/sidebar.scss'
import { useSelector } from 'react-redux';

export function SidemenuL(props) {
    const { preset_color } = useSelector(state=>state.header.value);
    const [Open, setOpen] = useState(false);
    const menu=()=>{
      setOpen(!Open);
    }
    const color = preset_color==='#1976d2'?'blueBg':'redBg';
  return (
    <div className='sidemenu_container'>
        <img onClick={menu} className={`menu_icon ${props.className}`}src="/logo/hamburger-menu.svg" alt="menu_icon" />
          <div className={'sidebar '+color} style={!Open?{ left:'-300px'}:{ left:'0px'}}>
            <div className='sidebar_header'><span>Menu</span><img src='/logo/close.svg' onClick={menu} alt='close'/></div>
            <ul>
              <li>TAB ONE</li>
              <li>TAB TWO</li>
              <li>TAB THREE</li>
            </ul>
          </div>
    </div>
  )
}

export function SidemenuR(props) {
    const { preset_color } = useSelector(state=>state.header.value);
    const [Open, setOpen] = useState(false);
    const menu=()=>{
      setOpen(!Open);
    }
    const color = preset_color==='#1976d2'?'blueBg':'redBg';
  return (
    <div className='sidemenu_container'>
        <img onClick={menu} className={`menu_icon ${props.className}`}src="/logo/hamburger-menu.svg" alt="menu_icon" />
          <div className={'sidebar '+color} style={!Open?{ right:'-300px'}:{ right:'0px'}}>
            <div className='sidebar_header'><span>Menu</span><img src='/logo/close.svg' onClick={menu} alt='close'/></div>
            <ul>
              <li>TAB ONE</li>
              <li>TAB TWO</li>
              <li>TAB THREE</li>
            </ul>
          </div>
    </div>
  )
}

 