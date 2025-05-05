
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'SASS']
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'REST API', 'MongoDB', 'PostgreSQL', 'Firebase', 'GraphQL']
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Jest', 'Docker', 'CI/CD', 'Agile Methodology']
    }
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-navy/5"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy/10 rounded-full blur-[80px] -z-10"></div>
      
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">My Skills</h2>
          <div className="w-20 h-1.5 bg-navy mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80">
            I've worked with a range of technologies in the web development world, from frontend to backend.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-8 hover-lift">
              <h3 className="text-xl font-semibold mb-6 text-navy">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="outline" className="bg-white/50 backdrop-blur-sm text-foreground px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
