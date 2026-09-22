import { useState } from 'react'

function App() {
  const [showRegistration, setShowRegistration] = useState(false)
  const [registered, setRegistered] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)
  const [showRequestForm, setShowRequestForm] = useState(false)
  const [projectName, setProjectName] = useState("")
  const [projectType, setProjectType] = useState("")
  const [projectLocation, setProjectLocation] = useState("")
  const [projectDescription, setProjectDescription] = useState("")
  const [projectDocument, setProjectDocument] = useState(null)
  const [urgencyLevel, setUrgencyLevel] = useState("")
  const [communityBenefit, setCommunityBenefit] = useState("")
  const [communityRepresentativeName, setCommunityRepresentativeName] = useState("")
  const [communityRepresentativePhone, setCommunityRepresentativePhone] = useState("")
  const [communityRepresentativeId, setCommunityRepresentativeId] = useState("")


 function login() {
  console.log("Email:", email)
  console.log("Password:", password)

  setLoggedIn(true)
}

if (showRegistration) {
  return (
    <div>
      <h1>CivicBuild Registration</h1>

      <p>Register as a Community Member</p>

      <label>Full Name</label>

      <input
        type="text"
        placeholder="Enter your full name"
      />

      <label>Phone Number</label>

      <input
        type="tel"
        placeholder="Enter phone number"
      />

      <label>ID Number</label>

      <input
        type="text"
        placeholder="Enter ID number"
      />

      <label>Email</label>

      <input
        type="email"
        placeholder="Enter your email"
      />

      <label>Password</label>

      <input
        type="password"
        placeholder="Create a password"
      />

      <button onClick={() => setRegistered(true)}>
      Register
      </button>

      {registered && (
        <p>User registered successfully!</p>
       )}


      <button onClick={() => setShowRegistration(false)}>
        Back to Login
      </button>
    </div>
  )
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
                <option value="Water Infrastructure">Water Infrastructure</option>
                <option value="Electricity">Electricity</option>
                <option value="Community Hall">Community Hall</option>
                <option value="Community Library">Community Library</option>
                <option value ="Community Sports">Sports</option>
                <option value ="Waste removal">Waste removal</option>
              </select>

              <label>Province</label>
              <input type="text"
              placeholder="Enter province"
              />

             <label>Project Location</label>
              <input type="text" 
                placeholder="Enter project location"
                value={projectLocation}
                onChange={(e) => setProjectLocation(e.target.value)}
              />

              <label>Municipality</label>
              <input
              type="text" 
              placeholder="Enter municipality"
              />

              <label>Ward</label>
              <input type="text" 
              placeholder="Enter ward"
              />
              <label>Community / Area</label>
              <input type="text" 
              placeholder="Enter community or area" 
              />


              <label>Project Description</label>
              <textarea
                 placeholder="Describe the project and the community need"
                 value={projectDescription}
                 onChange={(e) => setProjectDescription(e.target.value)}
              ></textarea>

              <label>Photos of the Problem</label>
              <input type="file" 
              multiple accept="image/*"
              />

              <label>Community Proposal</label>
              <input type="file" accept=".pdf,.doc,.docx"
              />

              <label>Supporting Document</label>
              <input type="file" 
              onChange={(e) => setProjectDocument(e.target.files[0])}
              />

              <h2>More information</h2>

              <label>Urgency Level</label>
              <select
                value={urgencyLevel}
                onChange={(e) => setUrgencyLevel(e.target.value)}
                >
                  <option value="">Select urgency level</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Critical">Critical</option>
                </select>

                <label>Expected Community Benefit</label>
                <textarea
                  placeholder="Explain how this project will benefit the community"
                  value={communityBenefit}
                   onChange={(e) => setCommunityBenefit(e.target.value)}
                ></textarea>

                <h2>Community Representative information</h2>

                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter representative name"
                  value={communityRepresentativeName}
                  onChange={(e) => setCommunityRepresentativeName(e.target.value)}
                  />

                  <label>Phone Number</label>
                  <input type="tel" 
                  placeholder="Enter phone number" 
                  value={communityRepresentativePhone} 
                  onChange={(e) => setCommunityRepresentativePhone(e.target.value)}
                  />


                  <label>ID Number</label>
                    <input type="text" 
                    placeholder="Enter ID number" 
                    value={communityRepresentativeId} 
                    onChange={(e) => setCommunityRepresentativeId(e.target.value)}
                  />
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

          <button onClick={() => setShowRegistration(true)}>
            Register as Community Member
          </button>

        </div>

      </div>

    </div>
  )
}

export default App