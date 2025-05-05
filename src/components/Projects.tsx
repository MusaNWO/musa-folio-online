
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with product catalog, shopping cart, and secure checkout.',
      image: '/placeholder.svg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team functionality.',
      image: '/placeholder.svg',
      tags: ['Next.js', 'Firebase', 'Tailwind CSS'],
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing creative work and professional accomplishments.',
      image: '/placeholder.svg',
      tags: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      link: '#'
    },
  ];

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 w-80 h-80 bg-navy/5 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">My Projects</h2>
          <div className="w-20 h-1.5 bg-navy mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80">
            Here are some of my recent projects. Each one was built to solve specific problems and showcase different skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card overflow-hidden border-0 hover-lift">
              <div className="aspect-video bg-navy/10 backdrop-blur-sm">
                {/* Replace with actual image */}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-navy">Image Placeholder</span>
                </div>
              </div>
              
              <CardHeader>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </CardHeader>
              
              <CardContent>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs bg-white/50 backdrop-blur-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter>
                <a 
                  href={project.link} 
                  className="text-navy hover:text-navy-light flex items-center gap-2 font-medium"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Project <Link size={16} />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
