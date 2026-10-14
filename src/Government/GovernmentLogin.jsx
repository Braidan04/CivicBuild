import { useState } from 'react'
import './government.css'

function GovernmentLogin({ onLogin }) {
  const [governmentId, setGovernmentId] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(e) {
    e.preventDefault()

    if (
      governmentId.trim() === '' ||
      email.trim() === '' ||
      password === ''
    ) {
      alert('Please enter your Government ID, email and password.')
      return
    }

    onLogin({
      governmentId: governmentId.trim().toUpperCase(),
      email: email.trim().toLowerCase(),
      password: password
    })
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
          Sign in using your Government ID, work email and password.
        </p>

        <form onSubmit={handleLogin}>
          <div className="government-form-group">
            <label>Government ID</label>
            <input
              type="text"
              placeholder="Example: GOV-7K4P92MX"
              value={governmentId}
              onChange={(e) => setGovernmentId(e.target.value)}
              required
            />
          </div>

          <div className="government-form-group">
            <label>Government Work Email</label>
            <input
              type="email"
              placeholder="Enter your registered email"
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