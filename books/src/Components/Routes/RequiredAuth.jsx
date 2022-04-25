import { useContext } from "react"
import { Link} from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import {useLocation,Navigate} from "react-router-dom"

export const RequiredAuth = ({children})=>{

//   get the token from auth context and if token exists return the children otherwise return the follwoing
const {token} = useContext(AuthContext);
const location = useLocation();
// { token ? }
// return <h3>Please <Link to = "/login">login</Link> to access this page</h3>
if(token) return children;

return <Navigate to = "/login" state={{from: location}} replace /> 
}