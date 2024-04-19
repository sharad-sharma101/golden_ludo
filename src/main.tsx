import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./app/store"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import Authentication from "./route/Authentication"


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store} >
			<BrowserRouter>
			<Authentication />
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
