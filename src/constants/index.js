import crypto2 from "../assets/projects/crypto2.jpg";
import quiz from "../assets/projects/quiz.jpg";
import gym from "../assets/projects/gym.jpg";
import edusity from "../assets/projects/edusity.jpg";
import jose from "../assets/projects/jose.jpg";
import portfolio from "../assets/projects/portfolio.jpg";

export const HERO_CONTENT = `I’m a Frontend Developer with a full-stack background. I’m skilled in React and focused on building great user interfaces and solving technical challenges. I’m known for my “get things done” attitude and commitment to continuous learning.`;

export const ABOUT_TEXT = `My journey in web development started with a natural curiosity about how things work and a desire to be part of the future. Over time, this curiosity has transformed into a full-fledged career. I’m driven by a passion for learning and I thrive in collaborative environments. Outside of coding, I enjoy communicating and brainstorming ideas. Just as muscles take time to build, so does the brain, and that’s why I’m always researching, exploring new technologies, and pushing myself to grow. I know how to make things work, and I believe that continuous research is key to growth.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - August 2024 ",
    role: "Frontend Developer",
    company: "HNG TECH",
    description: `Successfully completed a series of tasks across multiple stages, reaching level 5 and earning a certificate, while collaborating with a product designer and a remote team to develop and optimize frontend features for various projects using React, HTML, CSS, and JavaScript. `,
    technologies: ["HTML", "CSS", "Javascript", "React.Js", "API"],
  },
  {
    year: "January 2024 - July 2024 ",
    role: "FullStack Developer",
    company: "GOMYCODE",
    description: `Completed an intensive full-stack web development bootcamp with a strong focus on front-end technologies. Gained hands-on experience by building and deploying full-stack applications using JavaScript and React. Collaborated in teams on real-world projects, leveraging agile development practices and pair programming to deliver high-quality results. Enhanced problem-solving skills`,
    technologies: ["HTML", "CSS", "Javascript", "React", "Express.js", "MongoDB", "API"],
  },

];

export const PROJECTS = [
  {
    title: "Crypto-Tracker",
    image: crypto2,
    description:
      "A real-time cryptocurrency dashboard that allows users to track live cryptocurrency prices.the platform integrates real-time data using a cryptocurrency API to provide users with up-to-date market trends. The app features a responsive design for seamless use across devices and offers a clean, intuitive interface for tracking crypto assets effortlessly.",
    technologies: ["HTML", "CSS", "Tailwind", "Javascript",  "React"],
    url: "https://crypto-tracker-app-six-navy.vercel.app/"
  },
  {
    title: "Quiz-App",
    image: quiz,
    description:
      "the Quiz App is an interactive web application designed to engage users with a series of questions across various topics. Built using React, this app allows users to take quizzes, track their progress, and view their scores upon completion. Featuring a clean and user-friendly interface, the app ensures a smooth experience while offering an engaging way to test knowledge.",
    technologies: ["HTML", "CSS", "Javascript", "React"],
    url: "https://quiz-app-ten-lovat.vercel.app/"
  },
  {
    title: "Evo-gym",
    image: gym,
    description:
      "Evo Gym is a straightforward gym website where users can easily sign up through a form. The app features a clean, responsive design, making it accessible on any device. It provides a simple yet effective way for users to register and start their fitness journey.",
    technologies: ["HTML", "Tailwind", "Typescript", "React"],
    url: "https://gym-app-indol-phi.vercel.app/"
  },
  {
    title: "Edusity",
    image: edusity,
    description:
      "Edusity is a web platform built to represent a university, providing an online space for students and prospective learners to explore academic programs, campus information, and resources. With a user-friendly design, the website allows visitors to easily navigate through various departments, courses, and university services.",
    technologies: ["HTML", "Tailwind", "React",],
    url: "https://edusity-project-eight.vercel.app/"
  },
  {
    title: "Jose-Buddy",
    image: jose,
    description:
      "Jose Buddy is a personal AI assistant built using the OpenAI API. Inspired by models like GPT, this AI assistant is designed to help with various tasks, answer questions, and provide insights in a conversational manner.",
    technologies: ["HTML", "CSS", "React"],
    url: "https://jose-buddy-gpt.vercel.app/"
  },
  {
    title: "porfolio website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind", "React", ],
    url: "https://portfolio-website-react-hazel.vercel.app/"
  },
];

export const CONTACT = {
  address: "Lagos, Nigeria",
  phoneNo: "+234 704 992 4540",
  email: "josemaria14.work@gmail.com",
};
