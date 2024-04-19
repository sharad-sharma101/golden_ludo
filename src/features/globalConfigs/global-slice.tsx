import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface globalConfig {
    userAuth:boolean,
	walletBalnceState: any,
	userObjectState: any,
}

const initialState: globalConfig = {
	userAuth:true,
	walletBalnceState: {},
	userObjectState: {},
}

const globalConfigs = createSlice({
	name: "globalStates",
	initialState,
	reducers: {
        setUserAuth:(state,action)=>{
            state.userAuth=action.payload;
        },
		setWalletBalnceState:(state,action)=>{
            state.walletBalnceState=action.payload;
        },
		setUserObjectState:(state,action)=>{
            state.userObjectState=action.payload;
        },
	},
})

export const { setUserAuth, setWalletBalnceState, setUserObjectState } = globalConfigs.actions
export default globalConfigs.reducer