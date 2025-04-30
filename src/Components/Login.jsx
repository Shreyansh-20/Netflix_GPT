import { useState,useRef } from "react";
import { addUser } from "../utils/userSlice.jsx";
import Header from "./Header";
import { checkValidData } from "../utils/validate.jsx";
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase.jsx"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const Login=()=>{
  const[isSignedIn,setSignIn]=useState(true)
  const[errorMessage,setErrorMessage]=useState(null)
  const navigate=useNavigate();
   const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);
  const dispatch=useDispatch()
  

   const toggleSignIn=()=>{
    setSignIn(!isSignedIn)
  }
  const handleButtonClick=()=>{
    //Validate the form data
    console.log(email.current.value)
    console.log(password.current.value)
    const message=checkValidData(email.current.value,password.current.value)
    setErrorMessage(message)
    //Sign In/Sign Up
    if(message){
      //if any email or password is invalid then return
      return;
      
    }
    if(!isSignedIn){
      //this is the sign up form
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
     
    const user = userCredential.user;
   updateProfile(user, {
  displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/123804973?s=400&u=4ea2de000ab09af7ecc7a6b52b55a8dd1095ac36&v=4"
}).then(() => {
  console.log(auth)
  const {uid,email,displayName,photoURL} =auth.currentUser;
      dispatch(addUser({uid: uid,email:email,displayName:displayName,photoURL:photoURL}))
     navigate("/browse")
  // ...
}).catch((error) => {
setErrorMessage(error.message)
});
  
    
  // ...
})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+ errorMessage)
    // ..
  });

    }
    else{
      //this is sign in logic
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
     const { uid, email, displayName, photoURL } = user;
    dispatch(addUser( {uid: uid,email:email,displayName:displayName,photoURL:photoURL} ));

    navigate("/browse");
   

    console.log(user)
 
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+ errorMessage)
  });
    }
    

  }
  return (
  
    <div>
          <Header/>
          <div className="absolute"><img src="https://assets.nflxext.com/ffe/siteui/vlv3/69bec183-9cc8-49d4-8fc2-08228d3c91b4/web/IN-en-20250414-TRIFECTA-perspective_c8273fb1-8860-4ff5-bd1c-c2c4b44d5f2a_large.jpg" alt="logo" /></div>
          <form onSubmit={(e)=>e.preventDefault()}action="" className= "bg-black w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black/80">
          <h1 className="font-bold text-3xl p-4">{isSignedIn?"Sign-In":"Sign-Up"}</h1>
          {!isSignedIn &&( <input type="text" placeholder="Full-name" ref={name} className="p-4 my-4 w-full bg-gray-700"/>)}
            <input type="text" ref ={email}placeholder="Email Address"  className="p-4 my-4 w-full bg-gray-700"/>
           
             <input type="password" ref={password} placeholder="password"  className="p-4 my-4 w-full bg-gray-700"/>
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg " onClick={handleButtonClick}>{isSignedIn?"Sign-In":"Sign-Up"}</button>
            <p className="text-red-700 w-full font-bold text-lg py-2">{errorMessage}</p>
            <p className="py-4 cursor-pointer" onClick={toggleSignIn}>{isSignedIn?"New to Netflix? Sign Up Now ":"Already registered?Sign In Now"}</p>
          </form>




    </div>

  );
}
export default Login;