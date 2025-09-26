import React from 'react'
import './skills.scss'

export default function Skills() { 
  
  const skills =[	'Agile', 'AI', 'AJAX', ' Analysis skills', 
  'Analytics', 'Application development', 'Back-end development', 'Bash', 'Bootstrap', 'Cloud development', 
  'Communication skills ', 'Computer networking', 'Computer science', 'Content management systems', 
  'Continuous improvement', 'Continuous integration', 'Cost control', 'CSS ', 'Customer service', 
  'Data collection', 'Database management', 'Databases', 'Debugging', 'Design patterns', 'Django', 
  'E-commerce', 'Encryption', 'Enterprise software', 'Express.js', 'Figma', 'Full-stack development',
  'Google Analytics', 'Google Cloud Platform', 'Google Suite ', 'Heroku', 'HTML ', 'interpersonal communication',
   'IT', 'JavaScript ', 'JSON', 'Linux', 'Machine learning', 'Management ', 'Mentoring ', 'Microservices', 
   'Mobile applications', 'MongoDB', 'Natural language processing', 'Node.js', 'NoSQL', 'Office management', 
   'OOP ', 'Operating systems', 'Operations management ', 'Performance testing', 'PHP', 'PostgreSQL', 
   'Product development', 'Project management', 'Project management software', 'Python', 'Quality systems',
    'React ', 'Redux ', 'Relational databases', 'Responsive web design', 'REST API', 'SASS ', 'Scripting', 
    'Scrum', 'SCSS', 'SDKs', 'SEO', 'Software development', 'Software troubleshooting', 'SQL', 'Teaching', 
    'Test-driven development', 'TypeScript', 'UI development', 'UX', 'Web accessibility', 'Web analytics', 
    'Web design', 'Web development ', 'Web services', 'Wireframing ','WordPress'];
    
  return (
    <section className="skills">

    <h3 className="Title"> Skills </h3>

        <ul className="skillsList">
        {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
            
        </ul>
    </section>
  )
}
