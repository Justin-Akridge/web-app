import { Login } from "./pages/Login";
import { useState } from "react";

function App() {
  const [currentForm, setCurrentForm] = useState('login')
  return (
    <div >
      {
        currentForm === login ? <Login /> : <Register />
      }
      <Login/>
    </div>
  );
}

export default App;
