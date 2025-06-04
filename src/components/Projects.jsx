function Projects() {
  const projects = [
    {
      title: "RFID Tag Geolocation System",
      year: "2022",
      description: [
        "Utilized novel radar system methodology to facilitate accurate geolocation of passive UHF RFID tags for retail applications.",
        "Developed sophisticated algorithm for matching tags with shopping carts using proximity detection and motion path analysis."
      ]
    },
    {
      title: "Speed Camera Data Science Project",
      year: "2023",
      link: "http://www.antonioiadicicco.com/speedcamera/",
      description: [
        "Analyzed 10 years of traffic violation and collision data to develop comprehensive datasets for speed camera optimization.",
        "Created predictive ML models to forecast revenue and collision prevention statistics for NYC's camera network."
      ]
    },
    {
      title: "GPTColab",
      year: "2023",
      description: [
        "Built multi-chat web application for enhanced ChatGPT interactions using React and Python Flask.",
        "Implemented Python interpreter, OCR, web browsing, and multi-modal functionality months before official release.",
        "Designed secure containerized environment for AI code execution with comprehensive user management system.",
        "Transitioned to serverless AWS architecture using Amplify, API Gateway, Lambda, DynamoDB, and ECR."
      ]
    },
    {
      title: "EchoNote",
      year: "2023",
      link: "https://github.com/KyleGrande/EchoNote",
      description: [
        "Developed AI-powered note-taking web application with real-time speech-to-text transcription capabilities.",
        "Built custom JavaScript implementation for live audio streaming to speech recognition models.",
        "Utilized Session Storage for enhanced security and reduced backend overhead."
      ]
    },
    {
      title: "LuminaSYNC",
      year: "2024",
      link: "https://github.com/HanifMDjamiludin/LuminaSYNC",
      description: [
        "Created Flutter Android app and custom Debian-based Raspberry Pi distribution for smart LED control.",
        "Implemented mDNS device discovery for seamless account pairing and MQTT protocol for device communication.",
        "Enabled custom lighting pattern creation at significantly lower cost than commercial alternatives."
      ]
    }
  ]

  return (
    <section id="projects">
      <div className="section-content">
        <h2 className="section-headline">Featured Projects</h2>
        <p className="section-subhead">
          Innovative solutions spanning AI, IoT, data science, and web technologies.
        </p>
        
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className="project-year">{project.year}</p>
              <ul>
                {project.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects