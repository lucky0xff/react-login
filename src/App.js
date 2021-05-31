import React, { useState } from 'react';
import axios from "axios";
import './App.css';

const login = ({username,password}) => {
  return new Promise((resolve,reject) => {
    axios.get(`http://localhost:8081/login?username=${username}&password=${password}`).then(response=>{
      switch (response.data) {
        case 0: // 错误
          reject()
          break;
        case 1: // 正确
          resolve()
          break;
        default:
          break;
      }
      console.log(response)
      resolve()
    },(error=>{
      console.log(error)
      reject()
    }))
  })
}

function App() {
  // hooks
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  // function
  const handleSubmit = async(e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await login({username,password})
      setUsername('')
      setPassword('')
      setError('')
      setIsLoading(false)
      setIsLogin(true)
      console.log('success')
    } catch (error) {
      setUsername('')
      setPassword('')
      setError('Incorrect username or password')
      setIsLoading(false)
      console.log('error')
    }
  }

  // render
  return (
    <div className="card container mt-5">
      {isLogin ? (
        <>
          <h1>Welcome {username} </h1>
          <button onClick={()=> setIsLogin(false)} className="btn btn-dark">LogOut</button>
        </>
      ):(
      <div className="card-body">
        <h1 className="card-title">React Login</h1>
        {error && <h3 className="text-danger">{error}</h3>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input 
              type="text" 
              className="form-control" 
              id="exampleInputUsername1"
              value={username}
              onChange={e=>setUsername(e.currentTarget.value)} 
              />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="exampleInputPassword1"
              value={password}
              onChange={e=>setPassword(e.currentTarget.value)} 
              />
          </div>
          {/* <button type="submit" className="btn btn-dark btn-block btn-primary">Submit</button> */}
          <div className="d-grid gap-2">
            <button 
              type="submit" 
              className="btn btn-dark btn-primary"
              disabled={isLoading ? true : false}
            >
              {isLoading ? 'Submitting' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
      )}
    </div>
  );
}

export default App;
