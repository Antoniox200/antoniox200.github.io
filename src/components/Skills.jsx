function Skills() {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      skills: ["Keras", "TensorFlow", "PyTorch", "scikit-learn", "Langchain", "Langflow", "Stable Diffusion", "OpenAI"]
    },
    {
      title: "Web Development",
      skills: ["React", "JavaScript", "Node.js", "HTML", "CSS", "Flask", "REST APIs"]
    },
    {
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "Dart"]
    },
    {
      title: "Data Science",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Visualization"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Lambda", "EC2", "DynamoDB", "Docker", "Cloud9"]
    },
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "C++", "C#", "C", "SQL", "Bash"]
    },
    {
      title: "Business & Design",
      skills: ["Operations Management", "Team Management", "Adobe Creative Suite", "Figma", "Marketing"]
    }
  ]

  return (
    <section id="skills">
      <div className="section-content">
        <h2 className="section-headline">Technical Expertise</h2>
        <p className="section-subhead">
          Comprehensive skills across the full technology stack.
        </p>
        <div className="feature-list">
          {skillCategories.map((category, index) => (
            <div key={index} className="feature-item">
              <h3 className="feature-headline">{category.title}</h3>
              <ul className="simple-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills