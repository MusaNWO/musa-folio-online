
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-20 w-72 h-72 bg-navy/5 rounded-full blur-[80px]"></div>
      </div>
      
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative hover-lift">
              <div className="aspect-[3/4] bg-gradient-to-br from-navy to-navy-light rounded-xl glass-card p-1">
                {/* Placeholder for your image */}
                <div className="h-full rounded-lg overflow-hidden bg-navy-light/20 flex items-center justify-center text-navy">
                  Your Photo Here
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-navy/30 rounded-xl -translate-x-4 -translate-y-4 z-[-1]"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="glass-card p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
              <div className="w-20 h-1.5 bg-navy mb-8"></div>
              
              <p className="text-lg mb-6">
                Hello! I'm Musa, a passionate web developer with a keen eye for design and a 
                love for creating engaging digital experiences. With expertise in modern web technologies,
                I transform ideas into functional, beautiful websites.
              </p>
              
              <p className="text-lg mb-6">
                My journey in web development began five years ago, and since then, I've had the 
                opportunity to work on diverse projects ranging from personal blogs to 
                enterprise-level applications.
              </p>
              
              <p className="text-lg mb-8">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or enjoying outdoor activities to recharge my creative energy.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-3 backdrop-blur-sm bg-white/40 rounded-lg hover-lift">
                  <p className="font-semibold">Name:</p>
                  <p>Musa</p>
                </div>
                <div className="p-3 backdrop-blur-sm bg-white/40 rounded-lg hover-lift">
                  <p className="font-semibold">Email:</p>
                  <p>hello@musa.dev</p>
                </div>
                <div className="p-3 backdrop-blur-sm bg-white/40 rounded-lg hover-lift">
                  <p className="font-semibold">Location:</p>
                  <p>United States</p>
                </div>
                <div className="p-3 backdrop-blur-sm bg-white/40 rounded-lg hover-lift">
                  <p className="font-semibold">Availability:</p>
                  <p className="text-green-600">Available for hire</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
