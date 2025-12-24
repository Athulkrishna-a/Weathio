import React,{useState} from 'react'
import '../AuthPage/Authform.css'
const LoginForm = ({onClose}) => {

const [email, setEmail]=useState('')  
const [password, setPassword]=useState('')

const handleForm=(e)=>{
  // e.preventDefault()
  alert(`Email:${email} Password:${password}`)
}

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>

        <h2 className='login-label'>Login</h2>
        <form onSubmit={handleForm}>
          
          <input type="email" placeholder="Email"  value={email}
            onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm