
import { Route, Routes } from 'react-router-dom'
import ProductPage from '../components/templates/ProductPage'
import RegisterPage from '../components/templates/RegisterPage'
import LoginPage from '../components/templates/LoginPage'
import PageNotFound from '../components/templates/404'
import { getCookie } from '../utils/cookie'

function Router() {
   const token = getCookie("token")
  return (
   <Routes>
      <Route path="/" element={!token ? <LoginPage/> : <ProductPage/>}/>
      <Route path="/register" element={!token? <RegisterPage/> : <ProductPage/>}/>
      <Route path="/login" element={!token? <LoginPage/> : <ProductPage/> }/>
      <Route path="/*" element={<PageNotFound/>}/> 
    </Routes>
  )
}

export default Router