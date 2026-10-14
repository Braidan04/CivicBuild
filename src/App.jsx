
import { useState } from 'react'
import './index.css'
import GovernmentLogin from './government/GovernmentLogin'
import GovernmentDashboard from './government/GovernmentDashboard'
import GovernmentPortal from './government/GovernmentPortal'
import RoleSelection from './RoleSelection'

function App() {
  const [showRegistration, setShowRegistration] = useState(false)
  const [fullName, setFullName] = useState('')
  const [registered, setRegistered] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  const [showGovernmentLogin, setShowGovernmentLogin] = useState(false)
  const [governmentLoggedIn, setGovernmentLoggedIn] = useState(false)

  const [showRequestForm, setShowRequestForm] = useState(false)

  const [projectName, setProjectName] = useState('')
  const [projectType, setProjectType] = useState('')
  const [province, setProvince] = useState('')
  const [projectLocation, setProjectLocation] = useState('')
  const [municipality, setMunicipality] = useState('')
  const [ward, setWard] = useState('')
  const [communityArea, setCommunityArea] = useState('')
  const [projectDescription, setProjectDescription] = useState('')

  const [projectPhotos, setProjectPhotos] = useState([])
  const [communityProposal, setCommunityProposal] = useState(null)
  const [projectDocument, setProjectDocument] = useState(null)

  const [urgencyLevel, setUrgencyLevel] = useState('')
  const [communityBenefit, setCommunityBenefit] = useState('')

  const [communityRepresentativeName, setCommunityRepresentativeName] =
    useState('')
  const [communityRepresentativePhone, setCommunityRepresentativePhone] =
    useState('')
  const [communityRepresentativeId, setCommunityRepresentativeId] =
    useState('')

const currentPath = window.location.pathname

if (currentPath === '/') {
  return <RoleSelection />
}

if (currentPath === '/government') {
  return <GovernmentPortal />
}

  function login() {
    if (email === '' || password === '') {
      alert('Please enter your email and password.')
      return
    }

    setLoggedIn(true)
  }

  function register() {
    if (fullName === '') {
      alert('Please enter your full name.')
      return
    }

    setRegistered(true)
  }

  function submitProject(e) {
    e.preventDefault()

    if (
      projectName === '' ||
      projectType === '' ||
      province === '' ||
      projectLocation === '' ||
      municipality === '' ||
      communityArea === '' ||
      projectDescription === '' ||
      urgencyLevel === '' ||
      communityBenefit === '' ||
      communityRepresentativeName === '' ||
      communityRepresentativePhone === ''
    ) {
      alert('Please complete all required fields.')
      return
    }

    alert(
      'Project proposal submitted. Government review and permanent storage are not connected yet.'
    )

    setShowRequestForm(false)
  }

  // Government dashboard
  if (governmentLoggedIn) {
    return (
      <GovernmentDashboard
        onLogout={() => setGovernmentLoggedIn(false)}
      />
    )
  }

  // Government login
  if (showGovernmentLogin) {
    return (
      <GovernmentLogin
        onLogin={() => setGovernmentLoggedIn(true)}
      />
    )
  }

  // Community registration page
  if (showRegistration) {
    return (
      <div className="auth-page">
        <div className="auth-card">
          <div className="brand">
            <div className="brand-icon">CB</div>
            <h1>CivicBuild</h1>
          </div>

          <h2>Create your account</h2>

          <p className="muted">
            Register as a community member to submit infrastructure requests.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              register()
            }}
          >
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter phone number" />
            </div>

            <div className="form-group">
              <label>ID Number</label>
              <input type="text" placeholder="Enter ID number" />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Create a password"
                required
              />
            </div>

            <button type="submit" className="primary-button full-button">
              Register
            </button>
          </form>

          {registered && (
            <div className="success-message">
              Registration form completed successfully. Account creation is
              currently a demonstration only.
            </div>
          )}

          <button
            type="button"
            className="text-button full-button"
            onClick={() => {
              setShowRegistration(false)
              setRegistered(false)
            }}
          >
            Back to Login
          </button>
        </div>
      </div>
    )
  }

  // Community dashboard
  if (loggedIn) {
    return (
      <div className="page">
        <header className="topbar">
          <div className="brand">
            <div className="brand-icon">CB</div>
            <h1>CivicBuild</h1>
          </div>

          <button
            className="secondary-button"
            onClick={() => {
              setLoggedIn(false)
              setShowRequestForm(false)
            }}
          >
            Log Out
          </button>
        </header>

        <main className="content">
          <div className="welcome-panel">
            <p className="eyebrow">COMMUNITY PORTAL</p>
            <h2>Welcome to CivicBuild</h2>

            <p>
              Help improve your community by reporting infrastructure needs
              and submitting project proposals.
            </p>
          </div>

          {!showRequestForm && (
            <section className="card request-card">
              <div className="request-icon">＋</div>

              <h3>Community Project Requests</h3>

              <p className="muted">
                Submit a request for roads, bridges, schools, clinics, water,
                electricity and other community infrastructure.
              </p>

              <button
                className="primary-button"
                onClick={() => setShowRequestForm(true)}
              >
                Submit Project Request
              </button>
            </section>
          )}

          {showRequestForm && (
            <form className="project-form card" onSubmit={submitProject}>
              <div className="form-heading">
                <p className="eyebrow">NEW PROJECT PROPOSAL</p>
                <h2>Submit a Community Project</h2>

                <p className="muted">
                  Complete each section below. Fields marked with * are
                  required.
                </p>
              </div>

              <section className="form-section">
                <h3>
                  <span className="section-number">1</span>
                  Project Information
                </h3>

                <p className="section-description">
                  Tell us about the infrastructure project your community needs.
                </p>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Project Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Mawa Community Bridge"
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Project Type *</label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      required
                    >
                      <option value="">Select project type</option>
                      <option value="Bridge">Bridge</option>
                      <option value="Road">Road</option>
                      <option value="School">School</option>
                      <option value="Clinic">Clinic</option>
                      <option value="Water Infrastructure">
                        Water Infrastructure
                      </option>
                      <option value="Electricity">Electricity</option>
                      <option value="Community Hall">Community Hall</option>
                      <option value="Community Library">
                        Community Library
                      </option>
                      <option value="Community Sports">
                        Community Sports Facilities
                      </option>
                      <option value="Waste Removal">Waste Removal</option>
                      <option value="Sanitation">Sanitation</option>
                      <option value="Public Transport">Public Transport</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Province *</label>
                    <select
                      value={province}
                      onChange={(e) => setProvince(e.target.value)}
                      required
                    >
                      <option value="">Select province</option>
                      <option value="Eastern Cape">Eastern Cape</option>
                      <option value="Free State">Free State</option>
                      <option value="Gauteng">Gauteng</option>
                      <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                      <option value="Limpopo">Limpopo</option>
                      <option value="Mpumalanga">Mpumalanga</option>
                      <option value="Northern Cape">Northern Cape</option>
                      <option value="North West">North West</option>
                      <option value="Western Cape">Western Cape</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Municipality *</label>
                    <input
                      type="text"
                      placeholder="Enter municipality"
                      value={municipality}
                      onChange={(e) => setMunicipality(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Ward Number</label>
                    <input
                      type="text"
                      placeholder="Enter ward number"
                      value={ward}
                      onChange={(e) => setWard(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Community / Area *</label>
                    <input
                      type="text"
                      placeholder="Enter community or area"
                      value={communityArea}
                      onChange={(e) => setCommunityArea(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group full-width">
                    <label>Specific Project Location *</label>
                    <input
                      type="text"
                      placeholder="Street, landmark or exact area"
                      value={projectLocation}
                      onChange={(e) => setProjectLocation(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group full-width">
                    <label>Project Description *</label>
                    <textarea
                      placeholder="Describe the problem, what needs to be built or repaired, and why it is needed."
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                      rows="4"
                      required
                    />
                  </div>
                </div>
              </section>

              <section className="form-section">
                <h3>
                  <span className="section-number">2</span>
                  Urgency and Community Benefit
                </h3>

                <p className="section-description">
                  Explain how urgent the project is and who will benefit.
                </p>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Urgency Level *</label>
                    <select
                      value={urgencyLevel}
                      onChange={(e) => setUrgencyLevel(e.target.value)}
                      required
                    >
                      <option value="">Select urgency level</option>
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                      <option value="Critical">Critical</option>
                    </select>
                  </div>

                  <div className="form-group full-width">
                    <label>Expected Community Benefit *</label>
                    <textarea
                      placeholder="Explain how this project will improve people's lives."
                      value={communityBenefit}
                      onChange={(e) => setCommunityBenefit(e.target.value)}
                      rows="3"
                      required
                    />
                  </div>
                </div>
              </section>

              <section className="form-section">
                <h3>
                  <span className="section-number">3</span>
                  Community Representative
                </h3>

                <p className="section-description">
                  Provide contact details for the person representing the
                  community.
                </p>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Representative Full Name *</label>
                    <input
                      type="text"
                      placeholder="Enter full name"
                      value={communityRepresentativeName}
                      onChange={(e) =>
                        setCommunityRepresentativeName(e.target.value)
                      }
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      value={communityRepresentativePhone}
                      onChange={(e) =>
                        setCommunityRepresentativePhone(e.target.value)
                      }
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>ID Number</label>
                    <input
                      type="text"
                      placeholder="Enter ID number"
                      value={communityRepresentativeId}
                      onChange={(e) =>
                        setCommunityRepresentativeId(e.target.value)
                      }
                    />
                  </div>
                </div>
              </section>

              <section className="form-section">
                <h3>
                  <span className="section-number">4</span>
                  Photos and Supporting Documents
                </h3>

                <p className="section-description">
                  Add photos and documents that help explain the community's
                  needs.
                </p>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Photos of the Problem</label>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) =>
                        setProjectPhotos(Array.from(e.target.files))
                      }
                    />
                    <small>Choose one or more images.</small>
                  </div>

                  <div className="form-group">
                    <label>Community Proposal</label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) =>
                        setCommunityProposal(
                          e.target.files.length > 0
                            ? e.target.files[0]
                            : null
                        )
                      }
                    />
                    <small>PDF or Word document.</small>
                  </div>

                  <div className="form-group full-width">
                    <label>Other Supporting Document</label>
                    <input
                      type="file"
                      onChange={(e) =>
                        setProjectDocument(
                          e.target.files.length > 0
                            ? e.target.files[0]
                            : null
                        )
                      }
                    />
                  </div>
                </div>
              </section>

              <div className="form-actions">
                <p>* Please complete all required fields.</p>

                <div className="button-row">
                  <button
                    type="button"
                    className="secondary-button"
                    onClick={() => setShowRequestForm(false)}
                  >
                    Cancel
                  </button>

                  <button type="submit" className="primary-button">
                    Submit Project Request
                  </button>
                </div>
              </div>
            </form>
          )}
        </main>
      </div>
    )
  }

  // Main login page
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="brand">
          <div className="brand-icon">CB</div>
          <h1>CivicBuild</h1>
        </div>

        <p className="tagline">
          Infrastructure Financial Accountability System
        </p>

        <h2>Welcome Back</h2>

        <p className="muted">
          Sign in to access your community dashboard.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            login()
          }}
        >
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="primary-button full-button">
            Login
          </button>
        </form>

        
        <div className="auth-divider">
          <span>New to CivicBuild?</span>
        </div>

        <button
          type="button"
          className="secondary-button full-button"
          onClick={() => setShowRegistration(true)}
        >
          Register as Community Member
        </button>
      </div>
    </div>
  )
}


export default App
