import { useState } from "react";
import Swal from 'sweetalert2';
import './LoginSignup.css';

function LoginSignup() {
   const [state, setState] = useState("Signup");
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [loginEmail, setLEmail] = useState("");
   const [loginpass, setLoginpass] = useState("");
   const [arr, setArr] = useState([]);

   const handleClick = () => {
       let obj = {
           username: name,
           email: email,
           pass: password
       };
       setArr([...arr, obj]);
       Swal.fire({
        title: "Signup SucessFull!",
        imageUrl: "https://img.freepik.com/free-vector/privacy-engineering-abstract-concept-illustration_335657-3829.jpg",
        imageWidth: 320,
        imageHeight: 320,
        imageAlt: "Custom image"
      }).then(() => {
           setState("Login");
       });
       setName("");
       setEmail("");
       setPassword("");
   };

   const handleLoginClick = () => {
       let data = arr.filter((match) => {
           return match.email === loginEmail && match.pass === loginpass;
       });
       if (data.length > 0) {
        Swal.fire({
            title: "Login Sucessful!",
            imageUrl: "https://img.freepik.com/free-vector/digital-gift-card-abstract-concept-illustration_335657-3879.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707436800&semt=ais",
            imageWidth: 320,
            imageHeight: 320,
            imageAlt: "Custom image"
          })
       } else {
        Swal.fire({
            title: "Login Unsucessful!",
            imageUrl: "https://img.freepik.com/premium-vector/comic-speech-bubble-with-expression-text-oops-vector-bright-dynamic-cartoon-illustration-retro-pop-art-style-isolated-purple-background-vector-illustration_662353-1023.jpg",
            imageWidth: 320,
            imageHeight: 320,
            imageAlt: "Custom image"
          })
       }
   };

   return (
       <div className="login-signup-container">
           {state === "Signup" ? (
               <div className="form-container">
                   <h1>Signup</h1>
                   <input 
                       type="text" 
                       placeholder="User Name" 
                       value={name} 
                       onChange={(input) => setName(input.target.value)} 
                   /><br /><br />
                   <input 
                       type="email" 
                       placeholder="Email" 
                       value={email} 
                       onChange={(input) => setEmail(input.target.value)} 
                   /><br /><br />
                   <input 
                       type="password" 
                       placeholder="Password" 
                       value={password} 
                       onChange={(input) => setPassword(input.target.value)} 
                   /><br /><br />
                   <button onClick={handleClick}>Signup</button>
                   <p onClick={() => setState("Login")}>Already have an account? Login</p>
               </div>
           ) : (
               <div className="form-container">
                   <h1>Login</h1>
                   <input 
                       type="email" 
                       placeholder="Email" 
                       onChange={(element) => setLEmail(element.target.value)} 
                   /><br /><br />
                   <input 
                       type="password" 
                       placeholder="Password" 
                       onChange={(element) => setLoginpass(element.target.value)} 
                   /><br /><br />
                   <button onClick={handleLoginClick}>Login</button>
                   <p onClick={() => setState("Signup")}>Create an account</p>
               </div>
           )}
       </div>
   );
}

export default LoginSignup;
