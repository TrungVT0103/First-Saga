import LoginPage from "features/auth/pages/LoginPage"
import { Navigate, redirect, Route } from "react-router-dom"

const PrivateRouter = (children: any) => {
    let isLoggedIn = localStorage.getItem('access_token') !== ''
    if (!isLoggedIn) {
        return <Navigate to={'login'} />
    }
    return children
}

export default PrivateRouter