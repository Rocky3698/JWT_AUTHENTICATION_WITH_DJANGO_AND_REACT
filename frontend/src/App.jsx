import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import Registration from "./pages/Registration"
import Login from "./pages/Login"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProjectedRoute';

function Logout(){
  localStorage.clear();
  return <Login></Login>
}

function RegisterAndLogout(){
  localStorage.clear();
  return <Registration></Registration>
}

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <ProtectedRoute>
          <Home></Home>
        </ProtectedRoute>
      } />
      <Route path="/login" element={<Login/>}/>
      <Route path="/logout" element = {<Logout/>}/>
      <Route path="/register" element={<RegisterAndLogout/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
