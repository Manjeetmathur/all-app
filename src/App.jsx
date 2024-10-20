
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  
  const [loarder,setLoader] = useState(false)

  return (
    <div className='m-'>
      <Header/>
      <main>
        <Outlet>
        </Outlet>
      </main>
      <Footer/>
    </div>
  )
}

export default App
