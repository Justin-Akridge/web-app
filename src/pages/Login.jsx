import { useState } from 'react';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="email">email</label>
        <input 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          type="email" 
          placeholder="youremail@gmail.com" 
          id="email" 
          name="email" 
        />
        <label for="password">password</label>
        <input 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          type="password" 
          placeholder="" 
          id="password" 
          name="password" 
        />
        <button>Sign up</button>
      </form>
      <button>Don't have an account? Register here.</button>
    </>
  )
}