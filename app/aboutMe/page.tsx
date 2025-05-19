"use client";
import React from "react";
import { useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
const prefix = process.env.NODE_ENV === "production" ? "/Christian-Kofi-Okyere" : "";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

export default function aboutMe() {
  const Path = ({ d, text }: { d: string; text: string }) => {
    const [hover, setHover] = useState(false);

    return (
      <>
        <path
          d={d}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          stroke="black"
        />
        {hover && <div className=" text-4xl font-semibold">{text}</div>}
      </>
    );
  };

  return (
    <div className="px-8 xl:px-40 2xl:px-60 py-10 md:py-16">
      <div className="glass-card p-8 md:p-12 mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-300 text-shadow">About Me</h1>
        
        <div className="flex flex-col md:flex-row md:space-x-10 mb-10">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <img
              src={'../../public/images/profile.jpeg'}
              alt="Christian Okyere"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/christianokyere07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-100 transition-colors"
              >
                <AiFillLinkedin size={30} />
              </a>
              <a
                href="https://github.com/Christian-Kofi-Okyere"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-100 transition-colors"
              >
                <AiFillGithub size={30} />
              </a>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <p className="text-lg mb-4 text-gray-300">
              I am a dedicated Computer Science and Mathematics student at Colby College in Waterville, Maine, expected to graduate in May 2026. With a passion for technology and problem-solving, I've developed a strong foundation in both theoretical concepts and practical applications.
            </p>
            <p className="text-lg mb-4 text-gray-300">
              My academic journey has been complemented by practical experiences in software engineering, teaching, and leadership roles, allowing me to develop a well-rounded skill set that bridges technical expertise with effective communication and collaboration abilities.
            </p>
            <p className="text-lg text-gray-300">
              I am particularly interested in leveraging technology to create innovative solutions to real-world problems, with experience spanning web development, game design, educational technology, and environmental applications.
            </p>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4 text-blue-300 mt-10 text-shadow">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="glass-card p-6">
            <h3 className="font-bold mb-2 text-white text-shadow">Proficient</h3>
            <p className="text-gray-300">Python, Java, VHDL, Git, Microsoft Suite, Adobe Photoshop</p>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-bold mb-2 text-white text-shadow">Familiar</h3>
            <p className="text-gray-300">Javascript, CSS/HTML, React, TypeScript, MATLAB, Web Applications, AutoCAD, Figma, Unity</p>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4 text-blue-300 text-shadow">Professional Journey</h2>
        
        <div className="experience-card mb-6">
          <h3 className="text-xl font-bold text-white text-shadow">Remote Software Engineering Intern / IT Specialist</h3>
          <p className="text-gray-400">Bismuth Technologies Inc., Kumasi, Ghana | June 2023 - September 2023</p>
          <p className="mt-2 text-gray-300">
            During my time at Bismuth Technologies, I managed Python coursework for over 40 clients, significantly improving their academic performance and course grades. I also authored more than 50 unit and integration tests for various projects, which enhanced software robustness and reliability. This experience allowed me to apply my technical knowledge in a real-world setting while developing crucial skills in software testing and client management.
          </p>
        </div>
        
        <div className="experience-card mb-6">
          <h3 className="text-xl font-bold text-white text-shadow">Calculus Teaching Assistant</h3>
          <p className="text-gray-400">Colby College, Waterville, ME | September 2023 - Present</p>
          <p className="mt-2 text-gray-300">
            As a Teaching Assistant for Calculus courses, I've crafted study aids like review sheets and concept maps to bolster student understanding and memory of course material. I guide students through hands-on concept engagement, which has resulted in a remarkable 23% improvement in students' final exam performance. This role has strengthened my ability to explain complex concepts clearly and to adapt my teaching approach to different learning styles.
          </p>
        </div>
        
        <div className="experience-card mb-6">
          <h3 className="text-xl font-bold text-white text-shadow">SumCamp Counselor</h3>
          <p className="text-gray-400">Waterville, ME | August 2023 - September 2023</p>
          <p className="mt-2 text-gray-300">
            Working in a team environment, I helped design innovative math games that boosted camper engagement while aligning with educational goals. I actively engaged with campers in interactive learning sessions, focusing on skill development and educational enrichment. This experience enhanced my ability to make mathematics accessible and enjoyable for young learners.
          </p>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4 text-blue-300 mt-10 text-shadow">Awards & Certifications</h2>
        <ul className="list-disc pl-6 mb-10 text-gray-300">
          <li className="mb-2">International Youth Math Challenge</li>
          <li className="mb-2">Harvard Aspire Leaders Program</li>
          <li>Virtual Experience Program Participant (JPMorgan Chase & Co.)</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4 text-blue-300 text-shadow">Education Philosophy</h2>
        <p className="text-lg mb-4 text-gray-300">
          I believe in the power of education as a transformative force. My approach combines rigorous academic study with practical application and creative problem-solving. I value collaborative learning environments that encourage diverse perspectives and innovative thinking.
        </p>
        <p className="text-lg text-gray-300">
          As I continue my academic and professional journey, I remain committed to ongoing learning and growth, always seeking new challenges that will expand my knowledge and skills in the rapidly evolving fields of computer science and mathematics.
        </p>
      </div>
    </div>
  );
}
