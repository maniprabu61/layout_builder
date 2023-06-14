import { createSlice } from "@reduxjs/toolkit";


export const layoutSlice = createSlice({
    name : 'layout',
    initialState: {value:{
        header : false,
        footer : false,
        headerTab : false,
        leftSideMenu : false,
        rightSideMenu : false,
        bottomMenu : false,
        preset_color: '#1976d2',
        logo_position: 'left'
    }},
    reducers : {
        updateState : (state, action)=>{
            state.value = action.payload
        }
    }
})

export const {updateState} = layoutSlice.actions;

export default layoutSlice.reducer;