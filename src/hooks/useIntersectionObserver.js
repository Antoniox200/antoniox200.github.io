import { useEffect } from 'react'

export const useIntersectionObserver = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    // Observe all sections with a small delay to ensure they're rendered
    const observeSections = () => {
      const sections = document.querySelectorAll('section')
      sections.forEach((section) => {
        observer.observe(section)
      })
    }

    // Small delay to ensure sections are rendered
    const timeoutId = setTimeout(observeSections, 100)

    return () => {
      clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [])
}

export default useIntersectionObserver