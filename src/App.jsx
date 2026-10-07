import React from 'react'
import { Outlet } from 'react-router'
import Header from './pages/Header'

function App() {
  return (
    <div>
      <Header />
      <main className="relative z-10 flex flex-1 justify-center">
        <Outlet />
      </main>
    </div>
  )
}


export default App