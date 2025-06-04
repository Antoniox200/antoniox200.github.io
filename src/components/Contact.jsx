function Contact() {
  const contactInfo = [
    {
      label: "Phone",
      value: "+1-917-589-0324",
      link: "tel:+19175890324"
    },
    {
      label: "Email",
      value: "antonio.s.iadicicco@gmail.com",
      link: "mailto:antonio.s.iadicicco@gmail.com"
    },
    {
      label: "Academic Email",
      value: "antonio.iadicicco90@myhunter.cuny.edu",
      link: "mailto:antonio.iadicicco90@myhunter.cuny.edu"
    },
    {
      label: "GitHub",
      value: "Antoniox200",
      link: "https://github.com/Antoniox200"
    },
    {
      label: "LinkedIn",
      value: "www.linkedin.com/in/antonio-iadicicco-46389a195",
      link: "https://www.linkedin.com/in/antonio-iadicicco-46389a195/"
    }
  ]

  return (
    <section id="contact">
      <div className="section-content">
        <h2 className="section-headline">Get In Touch</h2>
        <p className="section-subhead">
          Let's connect and explore opportunities for collaboration.
        </p>
        
        <div className="feature-list">
          {contactInfo.map((contact, index) => (
            <div key={index} className="feature-item">
              <h3 className="feature-headline">{contact.label}</h3>
              <p>
                <a href={contact.link} target={contact.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  {contact.value}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact