import React from 'react';



import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD27EFMpChpPEoTdwoN61TOzm9aU39K7f0",
    authDomain: "bday-mailer-62c96.firebaseapp.com",
    databaseURL: "https://bday-mailer-62c96-default-rtdb.firebaseio.com",
    projectId: "bday-mailer-62c96",
    storageBucket: "bday-mailer-62c96.appspot.com",
    messagingSenderId: "767480013407",
    appId: "1:767480013407:web:201a8d7b38a0f7c4c971ea",
    measurementId: "G-YSG0R407MB"
  };
	
	const app = initializeApp(firebaseConfig);
  

  const auth = getAuth();
  const database = getDatabase(app);
  
  const buttonElement = document.getElementById("sign-up");

  
  
  function signUp(event){
	 event.preventDefault();
	const newEmail=document.getElementById("newEmail").value;
	const newPassword=document.getElementById("newPassword").value;
  
  
  
  if(validatePassword(newPassword) == false){
	  alert('Please make sure password is atleast 6 character')
  }
  
  if(validateEmail(newEmail) == false ){
	  alert('Please enter valid mail ')
  }
  
  
  
  createUserWithEmailAndPassword(auth, newEmail, newPassword)
  .then(function(userCredential){
	  var user = userCredential.user;
    console.log("then-ex");
	  // window.location.href = "interface.html"
/*	 const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    email: newEmail,
  });*/
 
  })
  .catch(function(error){
    console.log(error)
  })
  console.log("out-then-ex");
  }
  
  // buttonElement.addEventListener("click", signUp);
  
  
  function validateEmail(newEmail){
	  var expression = /^[^@]+@\w+(\.\w+)+\w$/
	 
	  if(expression.test(newEmail) == true){
		  return true
	  }
	  else{
		  return false
	  }
  }
  
    function validatePassword(newPassword){
	 if(newPassword < 6){
		  return false
	  }
	  else{
		  return true
	  }
    }
	










const SignUp = () => {
  const styles = {
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const leftSectionStyles = {
    width: '50%',
    textAlign: 'center',
  };

  const rightSectionStyles = {
    width: '21%',
    height: '60%',
    textAlign: 'center',
    border: '1px solid #ccc',
    padding: '20px',
    background: '#fbf9f9',
  };

  const inputStyles = {
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '10px',
    padding: '5px',
  };

  const buttonStyles = {
    width: '100%',
    cursor: 'pointer',
    boxSizing: 'border-box',
    marginBottom: '10px',
    padding: '5px',
    background: '#d9d9d9',
  };

  return (
    <div style={styles}>
      {/* Left Section (60%) */}
      <div style={leftSectionStyles}>
        <h1>Wish your friends and family <br />Happy Birthday!</h1>
      </div>

      {/* Right Section (40%) */}
      <div style={rightSectionStyles}>
        <h2>Sign up</h2>
        <form>
          <input
            type="email"
            id="newEmail"
            name="email"
            placeholder="Enter your email"
            style={inputStyles}
          />

          <input
            type="password"
            id="newPassword"
            name="password"
            placeholder="Enter your password"
            style={inputStyles}
          />

          <button onClick={signUp} id="sign-up" type="button" style={buttonStyles}>
            Sign Up 
          </button>

          <br />

          <button type="submit" style={buttonStyles}>
            Sign Up with Google
          </button>
        </form>

        <br />
        <a href="index.html">Sign in</a>
      </div>
    </div>
  );
};

export default SignUp;
