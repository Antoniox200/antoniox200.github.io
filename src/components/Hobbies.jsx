function Hobbies() {
  const interests = [
    {
      title: "Photography",
      description: "Capturing moments and exploring visual storytelling through digital and film photography."
    },
    {
      title: "Custom Mechanical Keyboards",
      description: "Building and customizing mechanical keyboards with unique switches, keycaps, and layouts."
    },
    {
      title: "Fashion & Design",
      description: "Exploring fashion trends, design principles, and the intersection of technology and style."
    },
    {
      title: "Architecture",
      description: "Studying architectural design, urban planning, and the relationship between form and function."
    },
    {
      title: "Entrepreneurship",
      description: "Building innovative solutions, leading teams, and creating value through business ventures."
    },
    {
      title: "Science Fiction",
      description: "Exploring futuristic concepts, space exploration, and the impact of technology on society."
    }
  ]

  return (
    <section id="hobbies">
      <div className="section-content">
        <h2 className="section-headline">Interests & Passions</h2>
        <p className="section-subhead">
          Exploring creativity, innovation, and design beyond the digital realm.
        </p>
        
        <div className="feature-list">
          {interests.map((interest, index) => (
            <div key={index} className="feature-item">
              <h3 className="feature-headline">{interest.title}</h3>
              <p>{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hobbies