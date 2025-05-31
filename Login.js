import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [creds, setCreds] = useState({ username: '', password: '' });

  const handleLogin = async () => {
    const res = await axios.post("http://localhost:8080/auth/login", creds);
    localStorage.setItem("token", res.data.token);
    window.location.href = "/chat";
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Username" onChange={e => setCreds({ ...creds, username: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setCreds({ ...creds, password: e.target.value })} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
