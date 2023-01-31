import { useState } from 'react';

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  return (
    <form>
      <label for="email">email</label>
      <input 
        value={email}
        type="email" 
        placeholder="youremail@gmail.com" 
        id="email" 
        name="email" 
      />
      <label for="password">password</label>
      <input 
        value={password}
        type="password" 
        placeholder="" 
        id="password" 
        name="password" 
      />
      <button>Sign up</button>
    </form>
  )
}