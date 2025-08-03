import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectedRoute from './ProtectedRoute'
import MyForm from './components/MyForm'
import Rahul from './components/Rahul'
import Hasan from './components/Hasan'
import Home from './components/Home'

function App() {

  return (
     <Routes>
      <Route path='/' element={<ProtectedRoute> <Home /></ProtectedRoute>} />
      <Route path='/rahul' element={<ProtectedRoute><Rahul /></ProtectedRoute>} />
      <Route path='/hasan' element={<ProtectedRoute><Hasan /></ProtectedRoute>} />
       <Route path='/form' element={<MyForm />} />
      <Route path='/login' element={<div>Login</div>} />
     </Routes>
  )
}

export default App
