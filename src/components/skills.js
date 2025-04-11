import React from 'react';
import './skills.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function SkillsSection({ skills }) {
  // Separate ref and inView hook for the whole section
  // This ensures animation triggers when the section becomes visible
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger animation slightly earlier/later if needed
  });

  return (
    <section id="skills" ref={sectionRef}>
      <h2>Meine Skills</h2>
      {/* Apply grid layout to the ul */}
      <ul className="skills-grid">
        {skills.map((skill, index) => (
          // Each li is a grid item
          <li key={index}>
            {/* Skill name and percentage above the bar */}
            <div className="skill-info">
              <span>{skill.name}</span>
              {/* Display percentage only when section is in view for consistency */}
              {sectionInView && (
                <span className="skill-percentage">{skill.level}%</span>
              )}
            </div>
            <div className="skill-bar">
              <motion.div
                className="skill-level"
                initial={{ width: 0 }}
                // Animate only when the section is in view
                animate={{ width: sectionInView ? `${skill.level}%` : 0 }}
                transition={{
                  duration: 1.0, // Slightly longer duration can look smoother
                  delay: sectionInView ? index * 0.1 : 0, // Stagger animation
                  ease: [0.17, 0.67, 0.83, 0.67], // Keep your custom ease
                }}
                // No inline styles needed for text inside the bar anymore
                style={{
                  background: 'linear-gradient(90deg, #64b5f6, #42a5f5)', // Keep gradient here
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SkillsSection;