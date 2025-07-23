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
            <h3 className='text-3xl font-semibold text-primary'>Passionate Software Developer</h3>
            <p className='text-muted-foreground'>
              I am a front-end developer with a passion for creating engaging, user-friendly web experiences.
              As I continue to grow, I am broadening my expertise to include back-end technologies, striving
              to become a versatile full-stack developer. Alongside this journey, I am also exploring the
              exciting fields of artificial intelligence and machine learning.
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
