"use client";

import React from "react";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaMapMarkerAlt, FaUniversity } from "react-icons/fa";


export default function Contact() {
  return (
    <div className="text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-shadow">Get in Touch</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-semibold mb-6 text-shadow">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <AiOutlineMail className="text-blue-400 text-2xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-shadow">Email</h3>
                  <p className="text-gray-300">
                    <a 
                      href="mailto:christian.okyere@colby.edu" 
                      className="hover:text-blue-300 transition-colors"
                    >
                      christian.okyere@colby.edu
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <AiFillLinkedin className="text-blue-400 text-2xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-shadow">LinkedIn</h3>
                  <p className="text-gray-300">
                    <a 
                      href="https://www.linkedin.com/in/christianokyere07" 
                      className="hover:text-blue-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/christianokyere07
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <AiFillGithub className="text-blue-400 text-2xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-shadow">GitHub</h3>
                  <p className="text-gray-300">
                    <a 
                      href="https://github.com/Christian-Kofi-Okyere" 
                      className="hover:text-blue-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/Christian-Kofi-Okyere
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FaUniversity className="text-blue-400 text-2xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-shadow">Academic Institution</h3>
                  <p className="text-gray-300">Colby College</p>
                  <p className="text-gray-300">Computer Science & Mathematics</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FaMapMarkerAlt className="text-blue-400 text-2xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-shadow">Location</h3>
                  <p className="text-gray-300">Waterville, Maine</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8">
            <h2 className="text-2xl font-semibold mb-6 text-shadow">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full btn-primary bg-blue-600 hover:bg-blue-700"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-gray-300 mb-4">
            Let's discuss your project ideas, potential collaborations, or talk about technology and mathematics.
          </p>
          <p className="text-gray-400">
            * I typically respond within 24-48 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
