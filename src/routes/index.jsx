import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import ProtectedRoute from "./ProtectedRoute"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route element={<ProtectedRoute />}>
                    <Route path="/home" element={<Home />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router