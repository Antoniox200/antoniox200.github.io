import { useState, useEffect } from 'react'

function Header() {
  const [activeSection, setActiveSection] = useState('')
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark'
    }
    return false
  })
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsDrawerOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    const sections = document.querySelectorAll('section')
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isDrawerOpen])

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode)
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'hobbies', label: 'Hobbies' },
    { id: 'contact', label: 'Contact Info' }
  ]

  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Antonio_Iadicicco_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>      <header>
        <div className="header-content">
          <h1 
            onClick={scrollToTop}
            style={{ cursor: 'pointer' }}
            title="Back to top"
          >
            AI
          </h1>
          <nav className="desktop-nav">
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={activeSection === item.id ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.id)
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <button 
              className="resume-button"
              onClick={handleResumeDownload}
              aria-label="Download Resume"
            >
              Download Resume
            </button>
            <label className="theme-toggle">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={() => setIsDarkMode(!isDarkMode)}
                aria-label="Toggle dark mode"
              />
              <span className="switch"></span>
            </label>
          </nav>
          <button 
            className="menu-button"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            aria-label="Menu"
          >
            <span className="menu-icon">
              <span className="menu-line"></span>
              <span className="menu-line"></span>
              <span className="menu-line"></span>
            </span>
          </button>
        </div>
      </header>
      
      <div className={`drawer-backdrop ${isDrawerOpen ? 'open' : ''}`} onClick={() => setIsDrawerOpen(false)} />
      
      <nav className={`mobile-drawer ${isDrawerOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <button 
            className="close-button"
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Close menu"
          >
            <span className="close-icon">×</span>
          </button>
        </div>
        <ul className="drawer-nav">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="drawer-resume-button">
            <button
              className="resume-button mobile"
              onClick={() => {
                handleResumeDownload()
                setIsDrawerOpen(false)
              }}
              aria-label="Download Resume"
            >
              Download Resume
            </button>
          </li>
          <li>
            <label className="theme-toggle">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={() => setIsDarkMode(!isDarkMode)}
                aria-label="Toggle dark mode"
              />
              <span className="switch"></span>
            </label>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header