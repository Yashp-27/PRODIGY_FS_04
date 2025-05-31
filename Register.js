import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [creds, setCreds] = useState({ username: '', password: '' });

  const handleRegister = async () => {
    await axios.post("http://localhost:8080/auth/register", creds);
    alert("Registered successfully!");
    window.location.href = "/";
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Username" onChange={e => setCreds({ ...creds, username: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setCreds({ ...creds, password: e.target.value })} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
