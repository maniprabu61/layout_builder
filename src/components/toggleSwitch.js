import React,{useState} from 'react'
import '../styles/toggleswitch.scss'
import { useDispatch, useSelector } from 'react-redux';
import { updateState } from '../features/layout';

function ToggleSwitch(props){
    const value = useSelector(state=> state.header.value);
    const { preset_color } = useSelector(state=>state.header.value);
    const header = useDispatch();

    const [ischecked, setischecked] = useState(false);
    const checked =(e)=>{   
        const name = e.target.name;
        const isChecked = e.target.checked;
        if(name === 'headerTab'){
            if(value.header){
                setischecked(isChecked)
                header(updateState({
                    ...value,
                    [name] : isChecked
                }))  
               
            }else{
                alert('header required'); 
                setischecked(false);
            }
        }else if(name === 'bottomMenu'){
            if(value.footer){
                setischecked(isChecked)
                header(updateState({
                    ...value,
                    [name] : isChecked
                }))  
               
            }else{
                alert('footer required');
                setischecked(false);
                
            }
        }else if(name === 'drawer'){
            if(value.footer || value.header){
                setischecked(isChecked)
                header(updateState({
                    ...value,
                    [name] : isChecked
                }))  
               
            }else{
                alert('header or footer required');
                setischecked(false)
                
            }
        }else{
            setischecked(isChecked)
            header(updateState({
                ...value,
                [name] : isChecked
            })) 
        }
 
       
    }
    const color = preset_color==='#1976d2'?'blue':'red';
    return (
      <div className='toggle'>
          <label className="switch">
              <input name={props.name} type="checkbox" checked={ischecked} onClick={checked} />
              <span className={"slider round "+color}></span>
          </label>
          <span className='sName'>{props.text}</span>
      </div>
    )
  }

export default ToggleSwitch;