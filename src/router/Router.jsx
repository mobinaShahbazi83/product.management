
import { Route, Routes } from 'react-router-dom'
import ProductPage from '../components/templates/ProductPage'
import RegisterPage from '../components/templates/RegisterPage'
import LoginPage from '../components/templates/LoginPage'
import PageNotFound from '../components/templates/404'

function Router() {
   
  return (
   <Routes>
      <Route path="/" element={<ProductPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/*" element={<PageNotFound/>}/> 
    </Routes>
  )
}

export default Router