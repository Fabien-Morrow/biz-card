import React from "react"
import ReactDOM from "react-dom/client"

import "./index.css"

import Portrait from "./Portrait"
import Presentation from "./Presentation"
import Footer from "./Footer"

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return (
    <div className="App-background">
      <div className="App">
        <Portrait />
        <Presentation />
        <Footer />
      </div>
    </div>
  )
}

root.render(<App />)