import { Project, Education, Internship, Certification, Achievement, SkillCategory } from './types';

export const RESUME_DATA = {
  name: "Eswar V",
  role: "Electrical & Electronics Engineer | Data Science Enthusiast",
  location: "Madurai, Tamilnadu",
  contact: {
    phone: "+91 9488304457",
    email: "eswarvmb25@gmail.com",
    linkedin: "LinkedIn",
    github: "Github"
  },
  summary: "My objective is to build my career in a well-reputed company where my potential can be explored and effectively utilized for the success of the organization as well as my personal growth. As a fresher, I am a self-motivated, target-oriented individual with a positive attitude, eager to learn and contribute. I am a good team player, a fast learner, and easily adaptable to new environments, capable of working both independently and as part of a team.",
  skills: [
    {
      category: "Programming Languages",
      skills: ["Python", "SQL"]
    },
    {
      category: "Tools & Technologies",
      skills: ["Power BI", "Machine Learning", "Arduino", "IoT", "Embedded Systems", "Raspberry Pi"]
    },
    {
      category: "Soft Skills",
      skills: ["Communication Skills", "Leadership Quality", "Teamwork", "Adaptability"]
    },
    {
      category: "Languages",
      skills: ["English", "Tamil"]
    }
  ] as SkillCategory[],
  internships: [
    {
      company: "Volkswagen Cars Madurai",
      role: "Human Resources Management",
      location: "Madurai",
      duration: "1 week"
    }
  ] as Internship[],
  education: [
    {
      institution: "Sethu Institute of Technology, Virudhunagar",
      degree: "B.E. in Electrical and Electronics Engineering",
      duration: "Apr 2021 – May 2025",
      score: "CGPA: 8.1"
    },
    {
      institution: "St Joseph Matriculation Hr. Sec. School, Madurai",
      degree: "HSC",
      duration: "Jun 2020 – Apr 2021",
      score: "Percentage: 77.37%"
    },
    {
      institution: "St Joseph Matriculation Hr. Sec. School, Madurai",
      degree: "SSLC",
      duration: "Jun 2018 – May 2019",
      score: "Percentage: 69.4%"
    }
  ] as Education[],
  projects: [
    {
      title: "Bus Identification using RFID for Blind People",
      techStack: ["Arduino", "RFID", "IoT", "Embedded Systems", "Speaker Module"],
      description: "Designed a system to assist visually impaired individuals in identifying buses using RFID technology. The system announces the bus route/ID through speakers. Showcased at the YI Club Innovation Contest 2024.",
      year: "2024"
    },
    {
      title: "IoT Based Water Monitoring System in Village",
      techStack: ["IoT", "Arduino", "Ultrasonic Sensor", "ESP8266 Wi-Fi"],
      description: "An UBA (Unnat Bharat Abhiyan) project implemented in Kallikudi village. The system monitors water tank levels remotely using ultrasonic sensors and transmits data via Wi-Fi for real-time tracking.",
      year: "Jan 2025"
    },
    {
      title: "Chat Bot",
      techStack: ["Python", "NLP"],
      description: "Developed a mini-guide to AI and algorithms. The bot uses Natural Language Processing to understand user queries and provide simple, educational answers about Artificial Intelligence."
    }
  ] as Project[],
  certifications: [
    { title: "AI WITH DATA SCIENTIST", description: "3 months course in Data Science with practical projects" },
    { title: "CORIZO Internship", description: "Basic Python and Data Science training with internship experience" },
    { title: "INTERNET OF THINGS", description: "3 weeks course covering Arduino and Raspberry Pi" }
  ] as Certification[],
  achievements: [
    { title: "Vertical Chairperson of YI Club of SIT", description: "Awarded by: YI Club of Madurai" },
    { title: "Treasurer", description: "Electrical and Electronics Student Organisation and Research. Given by: EEE Department of SIT" }
  ] as Achievement[]
};

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Eswar V's personal portfolio website.
Your role is to answer questions about Eswar's professional background, skills, and projects based strictly on the following resume data.

RESUME DATA:
${JSON.stringify(RESUME_DATA)}

GUIDELINES:
1. Be polite, professional, and concise.
2. If asked about contact info, provide the email or phone number.
3. If asked about skills, summarize his key technical strengths (Python, IoT, ML).
4. Highlight his projects like the RFID system for the blind and Water Monitoring.
5. If the user asks something unrelated to Eswar or his resume, politely decline and steer the conversation back to his professional profile.
6. Keep answers under 3-4 sentences unless a detailed explanation of a project is requested.
`;