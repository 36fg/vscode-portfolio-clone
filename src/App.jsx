import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import AppRouters from './routes/index';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <AppRouters />
      </BrowserRouter>
  )
}

export default App
