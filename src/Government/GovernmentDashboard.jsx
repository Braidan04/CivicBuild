
import './government.css'

function GovernmentDashboard({ 
  projectProposals = [],
  setProjectProposals,
  onLogout,
  official
}) {
    
const totalProposals = projectProposals.length

const pendingProposals = projectProposals.filter(
  (proposal) => proposal.status === 'Pending Review'
).length

const approvedProjects = projectProposals.filter(
  (proposal) => proposal.status === 'Approved'
).length

  return (
    <div className="government-dashboard-page">
      <header className="government-dashboard-header">
        <div className="government-dashboard-brand">
        <div className="government-brand-icon">CB</div>
  <div>
    <h1>CivicBuild </h1>
    <p>Government Administration Portal</p>

    
<p className="government-official-welcome">
  <strong>Welcome back:</strong>{' '}
  {official?.fullName || 'Government Official'}
</p>

<p className="government-official-department">
  <strong>Department:</strong>{' '}
  {official?.department || 'Not specified'}
</p>

  </div>
</div>

        <div className="government-header-actions">
          <span className="government-role-badge">
            Government Official
          </span>

          <button
            className="government-logout-button"
            onClick={onLogout}
          >
            Log Out
          </button>
        </div>
      </header>

      <main className="government-dashboard-content">
        <div className="government-dashboard-heading">
          <p className="government-portal-label">
            PROJECT MANAGEMENT
          </p>

          <h2>Government Dashboard</h2>

          <p>
            Review community proposals, manage approved budgets,
            and oversee public infrastructure projects.
          </p>
        </div>

        <section className="government-statistics">
          <div className="government-stat-card">
            <span>Proposals Received</span>
            <strong>{totalProposals}</strong>
            <p>Total community submissions</p>
          </div>

          <div className="government-stat-card">
            <span>Awaiting Review</span>
            <strong>{pendingProposals}</strong>
            <p>Proposals requiring a decision</p>
          </div>

          <div className="government-stat-card">
            <span>Approved Projects</span>
            <strong>{approvedProjects}</strong>
            <p>Projects approved by government</p>
          </div>

          <div className="government-stat-card">
            <span>Approved Budget</span>
            <strong>R0.00</strong>
            <p>Total approved project budget</p>
          </div>
        </section>

        
<section id= "community-proposals" className="government-dashboard-panel">
  <div className="government-panel-heading">
    <div>
      <h3>Community Project Proposals</h3>
      <p>
        Review submissions received from community members.
      </p>
    </div>

    <span className="government-count-badge">
      {projectProposals.length} proposals
    </span>
  </div>

  {projectProposals.length === 0 ? (
    <div className="government-empty-state">
      <div className="government-empty-icon">📋</div>

      <h4>No Project Proposals Yet</h4>

      <p>
        Community project submissions will appear here once
        proposals have been submitted.
      </p>
    </div>
  ) : (
    <div className="government-proposal-list">
      {projectProposals.map((proposal) => (
        <div className="government-responsibility-card" key={proposal.id}>
          <h4>{proposal.projectName}</h4>

          <p>
            <strong>Type:</strong> {proposal.projectType}
          </p>

          <p>
            <strong>Location:</strong> {proposal.communityArea},{' '}
            {proposal.municipality}, {proposal.province}
          </p>

          <p>
            <strong>Urgency:</strong> {proposal.urgencyLevel}
          </p>

          <p>
            <strong>Description:</strong> {proposal.projectDescription}
          </p>

          <p>
            <strong>Community benefit:</strong> {proposal.communityBenefit}
          </p>

          <p>
            <strong>Representative:</strong>{' '}
            {proposal.communityRepresentativeName}
          </p>

          <p>
            <strong>Status:</strong> {proposal.status}
          </p>

          {proposal.status === 'Pending Review' && (
            <div className="button-row">
              <button
                type="button"
                className="primary-button"
                onClick={() => {
                  setProjectProposals((previousProposals) =>
                    previousProposals.map((item) =>
                      item.id === proposal.id
                        ? { ...item, status: 'Approved' }
                        : item
                    )
                  )
                }}
              >
                Approve
              </button>

              <button
                type="button"
                className="secondary-button"
                onClick={() => {
                  setProjectProposals((previousProposals) =>
                    previousProposals.map((item) =>
                      item.id === proposal.id
                        ? { ...item, status: 'Rejected' }
                        : item
                    )
                  )
                }}
              >
                Reject
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  )}
</section>

<section id="community-proposals" className="government-dashboard-panel">
          <h3>Government Responsibilities</h3>

          <div className="government-responsibility-grid">
            <div className="government-responsibility-card">
              <h4>Review Proposals</h4>
              <p>
                Examine project needs, locations, supporting documents,
                and expected community benefits.
              </p>

              <button type="button" className="primary-button" onClick={() => {
                document.getElementById('community-proposals')
                ?.scrollIntoView({behavior: 'smooth'})
              }
              }
              >
                Review Community Proposals
              </button>
            </div>

            <div className="government-responsibility-card">
              <h4>Manage Budgets</h4>
              <p>
                Record proposed and approved budgets and monitor
                public project finances.
              </p>
            </div>

            <div className="government-responsibility-card">
              <h4>Assign Oversight</h4>
              <p>
                Refer projects to the Special Investigation Unit
                for compliance checks and monitoring.
              </p>
            </div>

            <div className="government-responsibility-card">
              <h4>Manage Tender Assignments</h4>
              <p>
                Record authorised tender decisions and project-holder
                assignments after the required approvals.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default GovernmentDashboard
