"use client";

import {
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { FaLaptopCode, FaBriefcase, FaGraduationCap, FaAward } from "react-icons/fa";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow">
              Christian Okyere
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-blue-300 mb-6 text-shadow">
              Computer Science & Mathematics Student
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Building innovative solutions through code and mathematics at Colby College
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                href="/aboutMe" 
                className="btn-primary bg-blue-600 hover:bg-blue-700"
              >
                About Me
              </Link>
              <Link 
                href="/projects" 
                className="btn-outline text-white border-white hover:bg-white/20"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Highlights Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-6 text-center">
              <FaLaptopCode className="text-blue-400 text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-shadow">Technical Skills</h3>
              <p className="text-gray-300">Python, Java, VHDL, React, TypeScript</p>
            </div>
            <div className="glass-card p-6 text-center">
              <FaBriefcase className="text-blue-400 text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-shadow">Work Experience</h3>
              <p className="text-gray-300">Software Engineering, Teaching, Leadership</p>
            </div>
            <div className="glass-card p-6 text-center">
              <FaGraduationCap className="text-blue-400 text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-shadow">Education</h3>
              <p className="text-gray-300">Colby College, Class of 2026</p>
            </div>
            <div className="glass-card p-6 text-center">
              <FaAward className="text-blue-400 text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-shadow">Achievements</h3>
              <p className="text-gray-300">Harvard Aspire Leaders, HackMIT, Bloomberg</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Summary Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0 md:pr-8">
                <img 
                  src="/images/profile.jpeg" 
                  alt="Christian Okyere" 
                  className="rounded-lg shadow-lg w-64 h-64 object-cover mx-auto"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4 text-shadow">About Me</h2>
                <p className="text-gray-300 mb-4">
                  I'm a Computer Science and Mathematics student at Colby College with a passion for 
                  developing innovative solutions to complex problems. My experience spans software 
                  engineering, teaching, and technical project development.
                </p>
                <p className="text-gray-300 mb-6">
                  I've worked as a Software Engineering Intern at Bismuth Technologies and serve as 
                  a Calculus Teaching Assistant, where I've helped improve student performance by 23%.
                </p>
                <Link 
                  href="/aboutMe" 
                  className="btn-primary bg-blue-600 hover:bg-blue-700 inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-shadow">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6 hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold text-blue-300 mb-2 text-shadow">Lingua Explorer</h3>
              <p className="text-gray-400 text-sm mb-3">Python, Unity(C#), Vuforia Engine(AR)</p>
              <p className="text-gray-300 mb-4">
                Language learning application with augmented reality capabilities that converts 
                2D models to 3D through scanning, showcased at MITHacks.
              </p>
              <a 
                href="https://christianokyere07_hackmit-linguaexplorer" 
                className="text-blue-300 hover:text-blue-100 font-medium inline-flex items-center"
                target="_blank"
              >
                View Project <span className="ml-1">→</span>
              </a>
            </div>
            
            <div className="glass-card p-6 hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold text-blue-300 mb-2 text-shadow">Sudoku Solver</h3>
              <p className="text-gray-400 text-sm mb-3">Java, Python Tkinter</p>
              <p className="text-gray-300 mb-4">
                Advanced algorithm for solving nxn Sudoku puzzles that outperforms online 
                solvers by 20%, with an interactive GUI for visual display of puzzles.
              </p>
              <a 
                href="https://github.com/Christian-Kofi-Okyere/Sudoku_Solver" 
                className="text-blue-300 hover:text-blue-100 font-medium inline-flex items-center"
                target="_blank"
              >
                View Project <span className="ml-1">→</span>
              </a>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/projects" 
              className="btn-outline text-white border-white hover:bg-white/20"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-shadow">Let's Connect</h2>
          <p className="text-gray-300 mb-8">
            Interested in collaboration or have questions about my work? 
            I'd love to hear from you.
          </p>
          <div className="flex justify-center space-x-6">
            <Link 
              href="/contact" 
              className="btn-primary bg-blue-600 hover:bg-blue-700"
            >
              Contact Me
            </Link>
            <a 
              href="mailto:christian.okyere@colby.edu" 
              className="btn-outline text-white border-white hover:bg-white/20"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}



