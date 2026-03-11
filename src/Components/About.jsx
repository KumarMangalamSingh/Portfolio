import { Code, User, MonitorCog } from 'lucide-react';
import React from 'react';

function About() {
  return (
    <section id='about' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'>Me</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='py-6'>
            <h3 className='text-3xl font-semibold text-primary'>Software Engineer</h3>
            <p className='text-muted-foreground'>
            Hi, I’m Kumar Mangalam, a Full Stack Developer currently working at Midson Group. I enjoy building scalable, user-focused web applications and turning complex problems into clean, efficient solutions.

I work across the stack — from crafting responsive and accessible frontends to designing reliable backend APIs and databases. I’m particularly interested in writing clean, maintainable code and continuously improving system performance and user experience.

Beyond my day-to-day work, I actively explore new technologies, contribute to personal and collaborative projects, and stay up to date with modern development practices. I believe in learning by building and improving through feedback.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href="#contact" className='cosmic-button'>Get In Touch</a>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-6'>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Code className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Web Development</h4>
                  <p className='text-muted-foreground'>Creates User Friendly Websites with responsive design.</p>
                </div>
              </div>
            </div>

            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <User className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Problem Solving</h4>
                  <p className='text-muted-foreground'>Determination towards solving problems effectively.</p>
                </div>
              </div>
            </div>

            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <MonitorCog className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Debugging</h4>
                  <p className='text-muted-foreground'>Debugger at Work: Clean Code, Happy Users.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
