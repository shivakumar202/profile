'use client'

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ConnectForm from "@/components/ConnectForm";
import { Cedarville_Cursive } from "next/font/google";
import { Github, Instagram, Linkedin } from "lucide-react";
import Projects from "@/components/Projects";
gsap.registerPlugin(ScrollTrigger);

const cedarville = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
});

const skills = [
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    desc: "The foundation of every web page — defining structure and semantic layout for modern websites.",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    desc: "Used for styling and designing beautiful, responsive, and animated web interfaces.",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    desc: "The core scripting language for interactive web experiences and dynamic applications.",
  },
  {
    name: "jQuery",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
    desc: "A lightweight JavaScript library that simplifies DOM manipulation and event handling.",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    desc: "A popular open-source relational database system for structured data storage and queries.",
  },
  {
    name: "PHP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    desc: "A powerful backend scripting language used for dynamic web applications and APIs.",
  },
  {
    name: "Slim Framework",
    logo: "https://avatars.githubusercontent.com/u/1087554?s=200&v=4",
    desc: "A lightweight PHP micro-framework for building simple yet robust RESTful web applications.",
  },
  {
    name: "Laravel",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg",
    desc: "A modern PHP framework focused on elegant syntax, MVC architecture, and developer productivity.",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    desc: "A React-based framework for fast, SEO-friendly, and full-stack web applications.",
  },
];

const experience = [
  {
    title: "Full Stack Developer at Andaman Bliss",
    period: "Dec 2024 - Dec 2025",
    image: "/images/companies/andaman_bliss.png",
    description:
      "Developed and maintained web applications using Laravel and React. Collaborated with cross-functional teams to deliver high-quality software solutions.",
  },
  {
    title: "Junior Developer at Three Geeks Web Solutions",
    period: "Jun 2023 - Dec 2024",
    image: "/images/companies/three_geeks.png",
    description:
      "Assisted in building responsive websites and web applications. Gained experience in frontend and backend development using PHP, JavaScript, and MySQL.",
  },
];

export default function Home() {
  // Refs for GSAP sections
  const profileRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);

  useEffect(() => {
    const fadeInUp = (elem) => {
      gsap.fromTo(
        elem,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
          },
        }
      );
    };

    fadeInUp(profileRef.current);
    fadeInUp(skillsRef.current);
    fadeInUp(experienceRef.current);
  }, []);

  return (
    <main className="@container bg-gradient-to-t from-indigo-950 via-black to-indigo-950 min-h-screen text-white">
      {/* Profile Section */}
      <section ref={profileRef} className="row" id="home">
        <div className="flex flex-col lg:flex-row lg:space-x-1 justify-around p-6 lg:p-10">
          <div className="w-full lg:w-1/3 p-4 bg-white rounded-4xl shadow-lg mb-6 lg:mb-0">
            <img
              src="https://avatars.githubusercontent.com/u/137149601?v=4"
              className="img-fluid rounded-4xl h-100 w-full object-cover"
              alt="profile"
            />
          </div>

          <div className={`w-full lg:w-2/3 items-start ps-0 lg:ps-10 pt-2 lg:pt-10`}>
            <p className={`${cedarville.className} text-4xl lg:text-5xl p-0 font-bold`}>
              Shiva Kumar
            </p>

            <div className={`text-base lg:text-0.5xl font-extralight p-0 mt-5 text-justify`}>
              <p>
                I’m a Full-Stack Developer with over 2<sup>+</sup> years of
                hands-on experience in building scalable, user-focused web
                applications. I specialize in developing modern, responsive, and
                efficient solutions using technologies like Laravel, React,
                Next.js, and Node.js
              </p>
              <p className="mt-3">
                I enjoy turning complex problems into elegant, maintainable code
                and crafting seamless digital experiences from frontend design
                to backend logic. I’m passionate about clean architecture,
                performance optimization, and intuitive UI/UX design.
              </p>
              <p className="mt-3">
                When I’m not coding, I love exploring new tech stacks, improving
                my development workflow, and contributing to creative projects
                that make an impact
              </p>
            </div>
            <div className="mt-5">
              <p className={` text-2xl`}>Connect </p>
              <ul className="flex space-x-4 mt-2">
                <li>
                  <a
                    href="https://www.linkedin.com/in/shivakumar-h-p-927b621b4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    <Linkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/shivakumar202"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    <Github />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/_7ncognito?igsh=NHVqdWlzcGxua3Vh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600"
                  >
                    <Instagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="mt-1 @container px-4 py-4" id="skills">
        <div className="text-center mb-5 pe-3">
          <h1 className={`${cedarville.className} text-4xl lg:text-5xl font-bold`}>
            Tech Stacks
          </h1>
          <p>some small achievements</p>
        </div>

        {/* Desktop / Tablet: grid */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2 text-black">
                {skill.name}
              </h3>
              <p className="text-gray-600 text-center text-sm">{skill.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile: horizontal snap carousel */}
        <div className="block sm:hidden mt-2">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-2 py-2">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="snap-start flex-shrink-0 w-72 sm:w-auto bg-white rounded-xl shadow-lg p-5"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="flex flex-col items-center">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-16 h-16 mb-4 object-contain"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-black text-center">
                    {skill.name}
                  </h3>
                  <p className="text-gray-600 text-center text-sm">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="mt-1 py-4 px-4" id="projects">
        <div className="text-center mb-5">
          <h1 className={`${cedarville.className} text-4xl lg:text-5xl font-bold`}>
            Work Experience
          </h1>
          <p>some small achievements</p>
        </div>

        {/* Desktop / Tablet grid */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="w-16 h-16 mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2 text-black text-center">
                {exp.title}
              </h3>
              <p className="text-red-500 text-start">{exp.period}</p>
              <p className="text-gray-600 text-sm text-justify">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: horizontal snap carousel */}
        <div className="block sm:hidden mt-2">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-2 py-2">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="snap-start flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-5"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="flex flex-col items-center">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-20 h-20 mb-4 object-contain"
                  />
                  <h3 className="text-lg font-semibold mb-2 text-black text-center">
                    {exp.title}
                  </h3>
                  <p className="text-red-500 mb-2">{exp.period}</p>
                  <p className="text-gray-600 text-sm text-justify">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Projects />
      <ConnectForm id="contact" />
    </main>
  );
}
