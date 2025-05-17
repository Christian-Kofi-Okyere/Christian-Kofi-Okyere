"use client";

import React from "react";
import Link from 'next/link';

export default function Projects() {
  return (
    <div className="text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center text-shadow">Projects Portfolio</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="glass-card p-6 hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-semibold text-blue-300 mb-3 text-shadow">Lingua Explorer</h2>
            <p className="text-gray-400 text-sm mb-3">Python, Unity(C#), Vuforia Engine(AR)</p>
            <p className="text-gray-300 mb-4">
              I collaborated in a team of three to develop an innovative language learning application 
              designed to ease language acquisition, which was showcased at MITHacks. The application 
              leverages augmented reality technology to convert 2D models to 3D through scanning, 
              providing users with an immersive learning experience that includes multilingual display 
              capabilities.
            </p>
            <div className="flex justify-between items-center mt-6">
              <a 
                href="https://christianokyere07_hackmit-linguaexplorer" 
                className="text-blue-300 hover:text-blue-100 font-medium inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project <span className="ml-1">→</span>
              </a>
              <span className="text-gray-400 text-sm">Sept 2023</span>
            </div>
          </div>
          
          <div className="glass-card p-6 hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-semibold text-blue-300 mb-3 text-shadow">Sudoku Solver</h2>
            <p className="text-gray-400 text-sm mb-3">Java, Python Tkinter</p>
            <p className="text-gray-300 mb-4">
              I created a sophisticated Depth-First Search based algorithm for solving nxn Sudoku puzzles, 
              which outperformed existing online solvers by 20% in solution time. The project involved 
              extensive testing of the algorithm on over 100 grids with thousands of permutations, ensuring 
              robust performance across various puzzle complexities.
            </p>
            <div className="flex justify-between items-center mt-6">
              <a 
                href="https://github.com/Christian-Kofi-Okyere/Sudoku_Solver" 
                className="text-blue-300 hover:text-blue-100 font-medium inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project <span className="ml-1">→</span>
              </a>
              <span className="text-gray-400 text-sm">Jan 2023</span>
            </div>
          </div>
          
          <div className="glass-card p-6 hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-semibold text-blue-300 mb-3 text-shadow">Gods Of Olympus</h2>
            <p className="text-gray-400 text-sm mb-3">Python - Pygame</p>
            <p className="text-gray-300 mb-4">
              Working in a five-person team, I contributed to the creation of a Python-based Greek 
              mythology-themed multiplayer action game. My responsibilities included engineering game 
              sound effects using GarageBand, which significantly elevated gameplay immersion and 
              auditory experience.
            </p>
            <div className="flex justify-between items-center mt-6">
              <a 
                href="https://github.com/zaynabtariq/Gods_Of_Olympus" 
                className="text-blue-300 hover:text-blue-100 font-medium inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project <span className="ml-1">→</span>
              </a>
              <span className="text-gray-400 text-sm">Mar 2023</span>
            </div>
          </div>
          
          <div className="glass-card p-6 hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-semibold text-blue-300 mb-3 text-shadow">Climate Change Visualization</h2>
            <p className="text-gray-400 text-sm mb-3">Python Tkinter, Zelle Module Graphics</p>
            <p className="text-gray-300 mb-4">
              I developed an interactive environmental art piece addressing climate change using 
              top-down Object-Oriented Programming principles. The project features a user-friendly 
              GUI built with Tkinter that integrates dynamic animations using Python's turtle module 
              and Zelle Graphics to depict climate data trends.
            </p>
            <div className="flex justify-between items-center mt-6">
              <a 
                href="#" 
                className="text-blue-300 hover:text-blue-100 font-medium inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project Details <span className="ml-1">→</span>
              </a>
              <span className="text-gray-400 text-sm">Nov 2022</span>
            </div>
          </div>
          
          <div className="glass-card p-6 hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-semibold text-blue-300 mb-3 text-shadow">Automated EV3 Tennis Ball Collector</h2>
            <p className="text-gray-400 text-sm mb-3">LEGO Mindstorms, Robotics</p>
            <p className="text-gray-300 mb-4">
              Built a cutting-edge automated system using EV3 Lego Mindstorms to efficiently collect 
              tennis balls. This project combined mechanical design, sensor integration, and programming 
              to create an autonomous solution for tennis practice facilities.
            </p>
            <div className="flex justify-between items-center mt-6">
              <a 
                href="#" 
                className="text-blue-300 hover:text-blue-100 font-medium inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project Details <span className="ml-1">→</span>
              </a>
              <span className="text-gray-400 text-sm">Sep 2018</span>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            href="/contact" 
            className="btn-primary bg-blue-600 hover:bg-blue-700 inline-block"
          >
            Discuss a Project
          </Link>
        </div>
      </div>
    </div>
  );
} 