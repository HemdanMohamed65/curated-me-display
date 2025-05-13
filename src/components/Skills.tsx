
import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skills = [
    { name: 'Front-End Development', level: 95, description: 'Creating responsive and interactive user interfaces using React, Next.js, HTML5, CSS3/SCSS, and Tailwind CSS' },
    { name: 'Back-End Development', level: 85, description: 'Building robust server-side applications with Node.js, Express, Python, and database management' },
    { name: 'UI/UX Design', level: 80, description: 'Designing user-friendly interfaces and experiences with tools like Figma and Adobe XD' },
    { name: 'Mobile Development', level: 75, description: 'Developing cross-platform mobile applications with React Native and Flutter' }
  ];

  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Next.js', 'GraphQL', 'MongoDB', 
    'PostgreSQL', 'Tailwind CSS', 'Express', 'Docker', 'AWS', 'Git'
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          Here are my technical skills and the technologies I work with
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium mb-2">{skill.name}</h3>
              <p className="text-muted-foreground mb-4">{skill.description}</p>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-medium text-center mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="bg-secondary text-foreground px-4 py-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
