import React from "react"
import { Provider } from "react-redux"
import store from "./redux/store"
import MainComponent from "./components/Index/MainComponent.jsx"

function App() {
  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  )
}

export default App
