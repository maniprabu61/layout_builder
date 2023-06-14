import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './styles/view.scss'
import ToggleSwitch from './components/toggleSwitch';
import { updateState } from './features/layout';


function View() {
    const { preset_color } = useSelector(state=>state.header.value);
    const themeColor = { background: preset_color};
    const stateValue = useSelector(state=> state.header.value)
    const header = useDispatch();
    const logoPosition=(e)=>{
        const {name ,value} = e.target;
        console.log('val',name ,value)
        header(updateState({
            ...stateValue,
            [name] : value
        }))  
        
    }
    const color = preset_color==='#1976d2'?'blueBg_':'redBg_';

  
  return (
    <div className='view_container'>
        <div className='frame_box'>
            <div className='view_header'>
                <div className='pencil_icon active'>
                    <img src='/logo/pencil-fill-white.svg' className='pencil' alt='pencil'/>
                </div>
                <hr className='line'/>
                <div className='setting_icon'>
                    <img src='/logo/gear.svg' className='setting' alt='setting'/>
                </div>
                <hr className='line'/>
                <div className='video_icon'>
                    <img src='/logo/play-circle-white.svg' className='video' alt='video'/>
                </div>
            </div>
            <div className='view_body'>
                <div className='body_content'>
                    <p>I want a company logo</p>
                    <div className='logo_radio'>
                        <input className={color} type="radio" id="left" defaultChecked={true} name="logo_position" value="left" onClick={logoPosition} />
                        <label for="left">Left</label>
                        <input className={color} type="radio" id="right" name="logo_position" value="right" onClick={logoPosition}/>
                        <label for="right">Right</label>
                        <input className={color} type="radio" id="center" name="logo_position" value="center" onClick={logoPosition}/>
                        <label for="center">Center</label>
                        <input className={color} type="radio" id="disable" name="logo_position" value="disable" onClick={logoPosition}/>
                        <label for="disable">Disable</label>
                    </div>
                </div>
                <div className='body_content'>
                    <p>Preset Color</p>
                    <div className='preset_radio'>
                        <input className={color} type="radio" defaultChecked={true} id="blue" name="preset_color" value="#1976d2"  onClick={logoPosition}/>
                        <label for="blue">Blue (#1976d2)</label>
                        <input className={color} type="radio" id="red" name="preset_color" value="#ff0000" onClick={logoPosition}/>
                        <label for="red">Red (#ff0000)</label>
                    </div>
                    <p>Preset Apply only: Header Background, Button, Radio Button & Switch</p>
                </div>
                <div className='body_content'>
                    <ToggleSwitch name='header'  text={'I want a Header'}/>
                    <ToggleSwitch name='footer' text={'I want a Footer'}/>
                    <ToggleSwitch name='drawer' text={'I want a Drawer Overlay Mode (requires Header or Footer)'}/>
                    <ToggleSwitch name='leftSideMenu' text={'I want a left-side Drawer'}/>
                    <ToggleSwitch name='rightSideMenu' text={'I want a right-side Drawer'}/>
                    <ToggleSwitch name='headerTab' text={'I want navigation tabs (requires Header)'}/>
                    <ToggleSwitch name='bottomMenu' text={'I want a Bottom Menu (requires Footer)'}/>
                </div>
                <hr className='line'/>
                <button style={themeColor}  className='btn'>CONTINUE</button>
            </div>
            {/* <h1>views</h1>
            <div>
                <h2>{valu.name}</h2>
                <button onClick={()=>{disp(login({name: 'mkp'}))}}>click</button>
            </div> */}
        </div>
       
    </div>
  )
}

export default View