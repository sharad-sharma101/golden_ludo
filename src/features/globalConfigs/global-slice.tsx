import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface globalConfig {
    isAppLoading:boolean
}

const initialState: globalConfig = {
	isAppLoading:false,
}

const globalConfigs = createSlice({
	name: "globalStates",
	initialState,
	reducers: {
        setAlertVisible:(state,action)=>{
            state.isAppLoading=action.payload
        },
	},
})

export const { setAlertVisible } = globalConfigs.actions
export default globalConfigs.reducer