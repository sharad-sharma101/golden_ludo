import { configureStore } from "@reduxjs/toolkit"
import globalConfig from '../features/globalConfigs/global-slice'

export const store = configureStore({
	reducer: {
		features: globalConfig,

	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>