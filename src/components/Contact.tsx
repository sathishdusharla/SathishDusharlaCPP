import React from 'react';
import { Mail, Phone, Instagram, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="bg-card rounded-lg shadow-md p-8 max-w-lg mx-auto">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <Mail className="h-6 w-6" />
            <span className="text-xl">Email: <a href="mailto:23eg105a16@anurag.edu.in" className="text-primary hover:underline">23eg105a16@anurag.edu.in</a></span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-6 w-6" />
            <span className="text-xl">Phone: 9948XXXXXX</span>
          </div>
          <h2 className="text-2xl font-semibold mt-6">Follow me on social media</h2>
          <div className="flex items-center space-x-6">
            <a href="https://instagram.com/thedusharla" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              <Instagram className="h-8 w-8" />
            </a>
            <a href="https://github.com/Sathishdusharla" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              <Github className="h-8 w-8" />
            </a>
            <a href="https://www.linkedin.com/in/sathish-dusharla-176374314/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              <Linkedin className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;