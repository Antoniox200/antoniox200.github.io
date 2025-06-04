import React, { useState, useEffect } from 'react';

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
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSkills, setVisibleSkills] = useState(3); // Number of skills visible at a time

  const updateVisibleSkills = () => {
    if (window.innerWidth < 768) {
      setVisibleSkills(1);
    } else if (window.innerWidth < 1024) {
      setVisibleSkills(2);
    } else {
      setVisibleSkills(3);
    }
  };

  useEffect(() => {
    updateVisibleSkills();
    window.addEventListener('resize', updateVisibleSkills);
    return () => window.removeEventListener('resize', updateVisibleSkills);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? skillCategories.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === skillCategories.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="skills">
      <div className="section-content">
        <h2 className="section-headline">Technical Expertise</h2>
        <p className="section-subhead">
          Comprehensive skills across the full technology stack.
        </p>        <div className="skills-carousel-container">
          <div className="skills-carousel-wrapper" style={{ transform: `translateX(-${(currentIndex * 100) / visibleSkills}%)` }}>
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-card" style={{ flex: `0 0 ${100 / visibleSkills}%` }}>
                <div className="skill-card-content">
                  <h3 className="skill-card-title">{category.title}</h3>
                  <div className="skill-list">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-controls">
          <button onClick={goToPrevious} className="carousel-arrow prev-arrow" aria-label="Previous skill category">
            &#x276E;
          </button>
          <button onClick={goToNext} className="carousel-arrow next-arrow" aria-label="Next skill category">
            &#x276F;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Skills;