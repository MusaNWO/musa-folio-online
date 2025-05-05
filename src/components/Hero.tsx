
import React from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container-custom">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-navy font-medium mb-4 animate-fade-in">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Musa
          </h1>
          <h2 className="text-2xl md:text-3xl text-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
            Professional <span className="text-navy">Web Developer</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-xl mb-10 animate-fade-in" style={{ animationDelay: '600ms' }}>
            I create beautiful, functional web experiences that help businesses achieve their goals. 
            My focus is on building responsive, user-friendly websites with clean code.
          </p>
          <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '800ms' }}>
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="border border-navy text-navy hover:bg-navy hover:text-white px-6 py-3 rounded-md transition-colors duration-200 inline-flex items-center justify-center font-medium">
              See My Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-navy hover:text-navy-dark transition-colors">
          <ArrowDownCircle size={36} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
