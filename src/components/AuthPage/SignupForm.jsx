import React,{useState} from 'react'

const SignupForm = ({ onClose }) => {
  const [name, setName]=useState('')
  const [email, setEmail]=useState('')  
const [password, setPassword]=useState('')
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" style={{ backgroundColor: 'blue' }} onClick={onClose}>×</button>

        <h2>Register</h2>
        <form>
          <input type="text" placeholder="Name" value={name}
            onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email"  value={email}
            onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} required />
          <input type="password" placeholder="Re-Enter Password" required />
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  )
}

export default SignupForm