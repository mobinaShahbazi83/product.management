import {BrowserRouter} from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import defaultOptions from "./configs/reactQuery"
import Router from "./router/Router"
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";


function App() {
  const queryClient = new QueryClient({defaultOptions: defaultOptions})
   
  
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Router/>
    </BrowserRouter>
    <ReactQueryDevtools/> 
    <Toaster   position="top-center" reverseOrder={false} />
    </QueryClientProvider>
   

  )
}

export default App
