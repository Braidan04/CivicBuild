
import { useState } from 'react'
import './government.css'

function GovernmentLogin({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(e) {
    e.preventDefault()

    if (email === '' || password === '') {
      alert('Please enter your government email and password.')
      return
    }

    onLogin()
  }

  return (
    <div className="government-login-page">
      <div className="government-login-card">
        <div className="government-brand">
          <div className="government-brand-icon">CB</div>
          <h1>CivicBuild</h1>
        </div>

        <p className="government-portal-label">GOVERNMENT PORTAL</p>

        <h2>Government Official Login</h2>

        <p className="government-login-description">
          Sign in to review and manage community infrastructure projects.
        </p>

        <form onSubmit={handleLogin}>
          <div className="government-form-group">
            <label>Government Email Address</label>
            <input
              type="email"
              placeholder="Enter your official email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="government-form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="government-login-button">
            Sign In to Government Portal
          </button>
        </form>
      </div>
    </div>
  )
}

export default GovernmentLogin
