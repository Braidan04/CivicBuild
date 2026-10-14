import { useState } from 'react'
import GovernmentLogin from './GovernmentLogin'
import GovernmentDashboard from './GovernmentDashboard'
import './government.css'

function GovernmentPortal({ projectProposals, setProjectProposals }) {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegistration, setShowRegistration] = useState(false)
  const [governmentLoggedIn, setGovernmentLoggedIn] = useState(false)
  const [loggedInOfficial, setLoggedInOfficial] = useState(null)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [department, setDepartment] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [generatedGovernmentId, setGeneratedGovernmentId] = useState('')

  function generateGovernmentId(accounts) {
    let governmentId = ''

    do {
      const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
      let randomCode = ''

      for (let i = 0; i < 8; i++) {
        randomCode += characters.charAt(
          Math.floor(Math.random() * characters.length)
        )
      }

      governmentId = 'GOV-' + randomCode
    } while (
      accounts.some((account) => account.governmentId === governmentId)
    )

    return governmentId
  }

  function handleRegistration(e) {
    e.preventDefault()

    if (
      fullName.trim() === '' ||
      email.trim() === '' ||
      department.trim() === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      alert('Please complete all registration fields.')
      return
    }

    if (password.length < 8) {
      alert('Your password must contain at least 8 characters.')
      return
    }

    if (password !== confirmPassword) {
      alert('Your passwords do not match.')
      return
    }

    const accounts = JSON.parse(
      localStorage.getItem('civicBuildGovernmentAccounts') || '[]'
    )

    const existingAccount = accounts.find(
      (account) =>
        account.email.toLowerCase() === email.trim().toLowerCase()
    )

    if (existingAccount) {
      alert('An account with this email already exists.')
      return
    }

    const governmentId = generateGovernmentId(accounts)

    const newAccount = {
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      department: department.trim(),
      governmentId: governmentId,
      password: password
    }

    accounts.push(newAccount)

    localStorage.setItem(
      'civicBuildGovernmentAccounts',
      JSON.stringify(accounts)
    )

    setGeneratedGovernmentId(governmentId)
    setFullName('')
    setEmail('')
    setDepartment('')
    setPassword('')
    setConfirmPassword('')
  }

  if (governmentLoggedIn) {
  return (
    <GovernmentDashboard
      projectProposals={projectProposals}
      setProjectProposals={setProjectProposals}
      official={loggedInOfficial}
      onLogout={() => {
        setGovernmentLoggedIn(false)
        setLoggedInOfficial(null)
        setShowLogin(false)
      }}
    />
  )
}

  if (showLogin) {
  function verifyGovernmentLogin(credentials) {
    const accounts = JSON.parse(
      localStorage.getItem('civicBuildGovernmentAccounts') || '[]'
    )

    const official = accounts.find(
      (account) =>
        account.governmentId === credentials.governmentId &&
        account.email === credentials.email &&
        account.password === credentials.password
    )

    if (!official) {
      alert('Incorrect Government ID, email or password.')
      return
    }

    setLoggedInOfficial(official)
    setGovernmentLoggedIn(true)
  }

  return (
    <GovernmentLogin onLogin={verifyGovernmentLogin} />
  )
}

  if (generatedGovernmentId !== '') {
    return (
      <div className="government-login-page">
        <div className="government-login-card">
          <div className="government-brand">
            <div className="government-brand-icon">CB</div>
            <h1>CivicBuild</h1>
          </div>

          <p className="government-portal-label">
            REGISTRATION SUCCESSFUL
          </p>

          <h2>Your Government ID</h2>

          <p className="government-login-description">
            Your account has been registered. Save this ID because
            you will need it to log in.
          </p>

          <div className="government-id-display">
            {generatedGovernmentId}
          </div>

          <button
            type="button"
            className="government-login-button"
            onClick={() => {
              setGeneratedGovernmentId('')
              setShowRegistration(false)
              setShowLogin(true)
            }}
          >
            Continue to Login
          </button>

          <button
            type="button"
            className="government-login-button"
            style={{ marginTop: '12px' }}
            onClick={() => {
              navigator.clipboard.writeText(generatedGovernmentId)
              alert('Government ID copied.')
            }}
          >
            Copy Government ID
          </button>
        </div>
      </div>
    )
  }

  if (showRegistration) {
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

          <h2>Register an Official</h2>

          <p className="government-login-description">
            Create your account to receive a unique Government ID.
          </p>

          <form onSubmit={handleRegistration}>
            <div className="government-form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="government-form-group">
              <label>Government Work Email</label>
              <input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="government-form-group">
              <label>Department</label>
              <input
                type="text"
                placeholder="Enter your department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
              />
            </div>

            <div className="government-form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="At least 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={8}
                required
              />
            </div>

            <div className="government-form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Enter your password again"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                minLength={8}
                required
              />
            </div>

            <button type="submit" className="government-login-button">
              Register and Generate ID
            </button>
          </form>

          <button
            type="button"
            className="government-login-button"
            style={{ marginTop: '12px' }}
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
          style={{ marginTop: '12px' }}
          onClick={() => setShowRegistration(true)}
        >
          Government Registration
        </button>
      </div>
    </div>
  )
}

export default GovernmentPortal