import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Discussion } from "@orbisclub/components";
import "@orbisclub/components/dist/index.modern.css";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
        <a href="https://useorbis.com" target="_blank">
          <svg width="92" height="120" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo">
            <circle cx="11.5" cy="11.5" r="10.4" stroke="white" stroke-width="2.2"/>
            <circle cx="11.5" cy="22.5" r="6.4" stroke="white" stroke-width="2.2"/>
          </svg>
        </a>
      </div>
      <h1>Vite + React + Orbis</h1>
      <div className="DiscussionContainer">
        <Discussion
          theme="kjzl6cwe1jw149wbqi4g5wrcc7dynyidmz2bvokqxc3r90l1g6mhslqjtpehqac"
          context="kjzl6cwe1jw14a8nr2sf0v0ac72sfyk70uu3n51zt3geif82adf6zonzvkke8xe"  />
      </div>
    </div>
  )
}

export default App
