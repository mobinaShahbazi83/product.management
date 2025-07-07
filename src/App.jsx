import {BrowserRouter, Route, Routes} from "react-router-dom"
import ProductPage from "./components/templates/ProductPage"
import RegisterPage from "./components/templates/RegisterPage"
import LoginPage from "./components/templates/LoginPage"
import PageNotFound from "./components/templates/404"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"


function App() {
  const queryClient = new QueryClient()
  
  return (
    <QueryClientProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProductPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/*" element={<PageNotFound/>}/> 
    </Routes>
    </BrowserRouter>
    </QueryClientProvider>
   

  )
}

export default App
