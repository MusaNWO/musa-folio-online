
import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy/80 to-navy-dark/90"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-navy-light/20 rounded-full blur-[100px] -z-5"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-light/10 rounded-full blur-[80px] -z-5"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-white mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-white/80">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2">
            <form className="glass-dark p-8 md:p-10 text-white space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-navy-dark/50 backdrop-blur-md border border-navy-light/30 rounded-md text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/25"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-navy-dark/50 backdrop-blur-md border border-navy-light/30 rounded-md text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/25"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-navy-dark/50 backdrop-blur-md border border-navy-light/30 rounded-md text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/25"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-navy-dark/50 backdrop-blur-md border border-navy-light/30 rounded-md text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/25"
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-white/90 backdrop-blur-sm text-navy hover:bg-white/100 px-6 py-3 rounded-md transition-all duration-200 font-medium hover-lift"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="glass-dark p-8 md:p-10 h-full text-white">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 hover-lift p-2">
                  <div className="bg-navy-dark/70 p-3 rounded-md">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:hello@musa.dev" className="text-white/80 hover:text-white transition-colors">
                      hello@musa.dev
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 hover-lift p-2">
                  <div className="bg-navy-dark/70 p-3 rounded-md">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+11234567890" className="text-white/80 hover:text-white transition-colors">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="pt-6">
                  <p className="font-medium mb-4">Connect with me</p>
                  <div className="flex gap-4">
                    <a href="#" className="bg-navy-dark/70 p-3 rounded-full hover:bg-navy transition-colors hover-lift">
                      <Github size={24} />
                    </a>
                    <a href="#" className="bg-navy-dark/70 p-3 rounded-full hover:bg-navy transition-colors hover-lift">
                      <Linkedin size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
