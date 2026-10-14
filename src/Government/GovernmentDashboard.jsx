
import './government.css'

function GovernmentDashboard({ onLogout }) {
  return (
    <div className="government-dashboard-page">
      <header className="government-dashboard-header">
        <div className="government-dashboard-brand">
          <div className="government-brand-icon">CB</div>

          <div>
            <h1>CivicBuild</h1>
            <p>Government Administration Portal</p>
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
            <strong>0</strong>
            <p>Total community submissions</p>
          </div>

          <div className="government-stat-card">
            <span>Awaiting Review</span>
            <strong>0</strong>
            <p>Proposals requiring a decision</p>
          </div>

          <div className="government-stat-card">
            <span>Approved Projects</span>
            <strong>0</strong>
            <p>Projects approved by government</p>
          </div>

          <div className="government-stat-card">
            <span>Approved Budget</span>
            <strong>R0.00</strong>
            <p>Total approved project budget</p>
          </div>
        </section>

        <section className="government-dashboard-panel">
          <div className="government-panel-heading">
            <div>
              <h3>Community Project Proposals</h3>
              <p>
                Review submissions received from community members.
              </p>
            </div>

            <span className="government-count-badge">
              0 proposals
            </span>
          </div>

          <div className="government-empty-state">
            <div className="government-empty-icon">📋</div>

            <h4>No Project Proposals Yet</h4>

            <p>
              Community project submissions will appear here once
              the Community and Government sections are connected.
            </p>
          </div>
        </section>

        <section className="government-dashboard-panel">
          <h3>Government Responsibilities</h3>

          <div className="government-responsibility-grid">
            <div className="government-responsibility-card">
              <h4>Review Proposals</h4>
              <p>
                Examine project needs, locations, supporting documents,
                and expected community benefits.
              </p>
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
