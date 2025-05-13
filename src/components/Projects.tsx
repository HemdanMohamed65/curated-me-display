
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with user authentication, product listings, cart functionality, and payment processing.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity app designed to help users organize tasks with features like drag-and-drop prioritization and team collaboration.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      category: 'app',
      technologies: ['React Native', 'Firebase', 'Redux'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 3,
      title: 'Finance Dashboard',
      description: 'An interactive dashboard for visualizing financial data with real-time updates, charts, and analytics reporting.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      category: 'web',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 4,
      title: 'Social Media Mobile App',
      description: 'A feature-rich social networking app with real-time messaging, post sharing, and user profiles.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      category: 'app',
      technologies: ['Flutter', 'Firebase', 'GetX'],
      demoLink: '#',
      codeLink: '#'
    }
  ];

  const categories = ['all', 'web', 'app', 'design'];
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-secondary">
      <div className="container-custom">
        <h2 className="section-title">Portfolio Projects</h2>
        <p className="section-subtitle">
          Check out some of my featured work from recent projects
        </p>

        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-center">
            <TabsList>
              {categories.map(category => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="capitalize"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <TabsContent value={activeCategory} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredProjects.map(project => (
                <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video relative overflow-hidden group">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity">
                      <Button variant="secondary" asChild>
                        <a href={project.demoLink} target="_blank" rel="noreferrer">Live Demo</a>
                      </Button>
                      <Button variant="outline" className="border-white text-white" asChild>
                        <a href={project.codeLink} target="_blank" rel="noreferrer">View Code</a>
                      </Button>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-2 pt-0">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-background px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
