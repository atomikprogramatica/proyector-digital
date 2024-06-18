import { Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import SeccionFormatos from './Components/Formatos/Index'
import Home from './Components/Home/Index'

function App() {

  return (
    <Routes>
      <Route  path='/' element={<Navigate to='./proyector-digital' />} />
      <Route  path='/proyector-digital' element={<Home />} />
      <Route  path='/proyector-digital/ver-formatos' element={<SeccionFormatos />} /> 
    </Routes>
  )
}

export default App
