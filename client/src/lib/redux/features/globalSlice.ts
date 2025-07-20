import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type globalSliceTypes = {
    isSideBarCollapsed:boolean;
    isDarkMode:boolean
}

const initialState:globalSliceTypes={
    isSideBarCollapsed:false,
    isDarkMode:false
}

const globalSlice=createSlice({
    name:'globalSlice',
    initialState,
    reducers:{
        setIsSidebarCollapsed:(state,action:PayloadAction<boolean>)=>{
            state.isSideBarCollapsed=action.payload
        },
        setIsDarkMode:(state,action:PayloadAction<boolean>)=>{
            state.isSideBarCollapsed=action.payload
        }
    }
})

export const {setIsSidebarCollapsed,setIsDarkMode} = globalSlice.actions;

export default globalSlice.reducer