import { Navigate } from "react-router-dom";

const privateRoute = (children: any) => {
    const isLoggedIn = localStorage.getItem('access_token') !== ''
    if (!isLoggedIn) {
      return <Navigate to='/login' />
    }
    return children
  };
export default privateRoute