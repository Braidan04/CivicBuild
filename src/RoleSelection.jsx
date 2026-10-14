
import './RoleSelection.css'

function RoleSelection() {
  const portals = [
    {
      title: 'Community Access',
      description:
        'Submit infrastructure proposals and track community projects.',
      icon: 'users',
      className: 'community',
      path: '/community',
    },
    {
      title: 'Government Access',
      description:
        'Review proposals, approve projects and manage public budgets.',
      icon: 'landmark',
      className: 'government',
      path: '/government',
    },
    {
      title: 'Tender Taker Access',
      description:
        'Manage assigned projects, report progress and record expenditure.',
      icon: 'hard-hat',
      className: 'tender',
      path: '/tender-taker',
    },
    {
      title: 'Special Unit Access',
      description:
        'Monitor project activities, review evidence and record findings.',
      icon: 'shield-check',
      className: 'special-unit',
      path: '/special-unit',
    },
  ]

  const icons = {
    users: '♧',
    landmark: '▥',
    'hard-hat': '⚒',
    'shield-check': '⬡',
  }

  function openPortal(path) {
    window.location.href = path
  }

  return (
    <div className="role-selection-page">
      <header className="role-header">
        <div className="role-brand">
          <div className="role-brand-icon">CB</div>

          <div>
            <h1>CivicBuild</h1>
            <p>Infrastructure Accountability Platform</p>
          </div>
        </div>

        <span className="role-header-label">
          PUBLIC INFRASTRUCTURE
        </span>
      </header>

      <main className="role-main">
        <div className="role-intro">
          <span className="role-eyebrow">
            TRANSPARENCY STARTS HERE
          </span>

          <h2>Welcome to CivicBuild</h2>

          <p>
            A platform connecting communities, government,
            project holders and independent oversight to promote
            accountability in public infrastructure.
          </p>

          <h3>Choose your access portal</h3>
        </div>

        <div className="role-card-grid">
          {portals.map((portal) => (
            <button
              type="button"
              key={portal.path}
              className={`role-card ${portal.className}`}
              onClick={() => openPortal(portal.path)}
            >
              <div className="role-card-top">
                <div className="role-card-icon">
                  {icons[portal.icon]}
                </div>

                <span className="role-card-arrow">↗</span>
              </div>

              <h3>{portal.title}</h3>

              <p>{portal.description}</p>

              <span className="role-card-link">
                Continue to portal
                <span> →</span>
              </span>
            </button>
          ))}
        </div>

        <div className="role-security-note">
          <span>🔒</span>
          <p>
            Each portal is intended for its designated users.
            Access to protected information requires authorised
            sign-in.
          </p>
        </div>
      </main>

      <footer className="role-footer">
        <p>
          CivicBuild © 2026 · Transparency · Accountability · Development
        </p>
      </footer>
    </div>
  )
}

export default RoleSelection
