import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MainLayout from "./layouts/MainLayout"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/SignUp"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} >
      <Route index element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Route>
    
  )
)

function App() {

  return <RouterProvider router={router}/>
}

export default App
