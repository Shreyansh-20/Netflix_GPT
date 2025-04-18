import { useState } from "react";
import Header from "./Header";
const Login=()=>{
  const[isSignedIn,setSignIn]=useState(true)
   const toggleSignIn=()=>{
    setSignIn(!isSignedIn)
  }
  return (
  
    <div>
          <Header/>
          <div className="absolute"><img src="https://assets.nflxext.com/ffe/siteui/vlv3/69bec183-9cc8-49d4-8fc2-08228d3c91b4/web/IN-en-20250414-TRIFECTA-perspective_c8273fb1-8860-4ff5-bd1c-c2c4b44d5f2a_large.jpg" alt="logo" /></div>
          <form action="" className= "bg-black w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black/80">
          <h1 className="font-bold text-3xl p-4">{isSignedIn?"Sign-In":"Sign-Up"}</h1>
          {!isSignedIn &&( <input type="text" placeholder="Full-name"  className="p-4 my-4 w-full bg-gray-700"/>)}
            <input type="text" placeholder="Email Address"  className="p-4 my-4 w-full bg-gray-700"/>
           
             <input type="password" placeholder="password"  className="p-4 my-4 w-full bg-gray-700"/>
            <button className="p-4 my-4 bg-red-700 w-full">{isSignedIn?"Sign-In":"Sign-Up"}</button>
            <p className="py-4 cursor-pointer" onClick={toggleSignIn}>{isSignedIn?"New to Netflix? Sign Up Now ":"Already registered?Sign In Now"}</p>
          </form>




    </div>

  );
}
export default Login;