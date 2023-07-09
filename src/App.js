import React from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Body/Sidebar'
import Feed from './components/Body/Feed'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>

      <div className='app-body'>
        <Sidebar/>
        <Feed />
      </div>

    </div>
  )
}

export default App