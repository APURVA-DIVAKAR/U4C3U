import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Login } from "./Login";
import { Logout } from "./Logout";
export const Div = styled.div`
display:flex;
justify-content:center;
gap:30px;
background-color:lightcoral
`;


export const Navbar = () => {
   const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <nav>
        <Div>
        {/* keep all the NavLinks here */}
        <Link to ='/' >Home</Link>
        <Link to ='/about' >About</Link>
        {token=="" ? 
        <Link to ='/login'>Login</Link> 
        : 
        <Link to ='/logout'>Logout</Link>
        }

        <Link to ='/books' >Books</Link>

        </Div>
        
      </nav>
    </>
  );
};
