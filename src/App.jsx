import { useState } from 'react'

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)
  const [showRequestForm, setShowRequestForm] = useState(false)
  const [projectName, setProjectName] = useState("")
  const [projectType, setProjectType] = useState("")

  function login() {
    console.log("Email:", email)
    console.log("Password:", password)

    setLoggedIn(true)
  }

  if (loggedIn) {
    return (
      <div>
        <h1>CivicBuild Dashboard</h1>

        <p>Welcome to CivicBuild</p>

        <h2>Community Project Requests</h2>

        <button onClick ={() => setShowRequestForm(true)}>
          Submit Project Request
        </button>

        {showRequestForm && (
          <div>
            <h2>Submit Community Project Request</h2>
            <label>Project Name</label>

            <input type="text"
             placeholder="Enter project name"
             value={projectName}
             onChange={(e) => setProjectName(e.target.value)}/>


              {/*<p>Project Name: {projectName}</p>*/}

              <label>Project Type</label>

              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
              >
                <option value= "">Select project type</option>
                <option value="Bridge">Bridge</option>
                <option value="Road">Road</option>
                <option value="School">School</option>
                <option value="Clinic">Clinic</option>
                <option value="Water">Water Infrastructure</option>
                <option value="Electricity">Electricity</option>
                <option value="Community Hall">Community Hall</option>
                <option value="Community Library">Community Library</option>
                <option value ="Community Sports">Sports</option>
                <option value ="Waste removal">Waste removal</option>
              </select>
              <p>Project Type: {projectType}</p>
            </div>
        )
        }
      </div>
    )
  }

  return (
    <div className="app">

      <div className="login-container">

        <h1>CivicBuild</h1>

        <p>Infrastructure Financial Accountability System</p>

        <div className="login-form">

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={login}>Login</button>

        </div>

      </div>

    </div>
  )
}

export default App