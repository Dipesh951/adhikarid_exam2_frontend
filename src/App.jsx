import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ViewContact from './pages/ViewContact'
import EditContact from './pages/EditContact'

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts/:name" element={<ViewContact />} />
        <Route path="/contacts/:name/edit" element={<EditContact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
