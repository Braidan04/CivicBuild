
import { useState } from 'react'
import GovernmentLogin from './GovernmentLogin'
import GovernmentDashboard from './GovernmentDashboard'
import './government.css'

function GovernmentPortal() {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegistration, setShowRegistration] = useState(false)
  const [governmentLoggedIn, setGovernmentLoggedIn] = useState(false)

  if (governmentLoggedIn) {
    return (
      <GovernmentDashboard
        onLogout={() => {
          setGovernmentLoggedIn(false)
          setShowLogin(false)
        }}
      />
    )
  }

  if (showLogin) {
    return (
      <GovernmentLogin
        onLogin={() => setGovernmentLoggedIn(true)}
      />
    )
  }

  if (showRegistration) {
    return (
      <div className="government-login-page">
        <div className="government-login-card">
          <h1>Government Registration</h1>

          <p>
            Government officials must be authorised to access CivicBuild.
          </p>

          <p>
            Registration will be connected to an approval process.
          </p>

          <button
            type="button"
            className="government-login-button"
            onClick={() => setShowRegistration(false)}
          >
            Back
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="government-login-page">
      <div className="government-login-card">
        <div className="government-brand">
          <div className="government-brand-icon">CB</div>
          <h1>CivicBuild</h1>
        </div>

        <p className="government-portal-label">
          GOVERNMENT PORTAL
        </p>

        <h2>Government Officials</h2>

        <p className="government-login-description">
          Access community proposals, project finances and infrastructure
          oversight through the government portal.
        </p>

        <button
          type="button"
          className="government-login-button"
          onClick={() => setShowLogin(true)}
        >
          Government Login
        </button>

        <button
          type="button"
          className="government-login-button"
          onClick={() => setShowRegistration(true)}
          style={{ marginTop: '12px' }}
        >
          Government Registration
        </button>
      </div>
    </div>
  )
}

export default GovernmentPortal
