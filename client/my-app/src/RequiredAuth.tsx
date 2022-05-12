import { Navigate } from "react-router-dom";

function RequireAuth({children} : {children:any}){

    const authed = localStorage.getItem("isAuthenticated");
    return authed == "true" ? children : <Navigate to="/" replace/>;
}

export default RequireAuth;
