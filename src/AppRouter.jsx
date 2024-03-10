import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import Register from "./Register"
import Home from "./Home"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index  path='/' element={<App/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter