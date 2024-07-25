import Maze from "../assets/projects/Maze.png";
import seamCarver from "../assets/projects/SeamCarver.png";
import huskyLaundry from "../assets/projects/huskyLaundry.png";

export const HERO_CONTENT = `My name is Vivian Zou and I am a current sophomore at Northeastern University studying Computer Science and Mathematics. Some of my interests include: Software Engineering, Backend Design and Cybersecurity. I love to learn about the tech field and am willing to try new things!`

export const ABOUT_TEXT = `Some of my passions include: backend development, cybersecurity and SWE! Feel free to reach out`

export const EXPERIENCES = [
  {
    year: "Summer 2024",
    role: "Computer Specialist Intern",
    company: "Computer Care and Learning",
    description: `Learned about computer and security issues. Helped clients solve problems regarding their devices. Collaborated on an Intern Website`,
    technologies: ["HTML", "PHP", "Bash"],
  },
  {
    year: "Summer 2022",
    role: "Research Assistant in Orthopedic Data Analysis and Processing",
    company: "Hospital of Special Surgery",
    description: `Collaborated with Dr. Hollis Potter at the Hospital for Special Surgery. Cleaned and sourced data related to the degradation of knee implants. Learned about the physics behind MRI machinery and how it is utilized in a professional setting. 
    Utilized mesh segmentation tools to highlight key parts of deregulation then used inbuilt functions in Matlab to process and analyze the data. 
    `,
    technologies: ["MatLab", "MeshLab"],
  },
  {
    year: "Sept 2020 - Jun 2022",
    role: "Research Assistant in Geochemistry and Mathematical Modeling",
    company: "Michigan State University",
    description: `Collaborated with Professor W.W. Wood in the geochemistry department at Michigan State University, reviewing mathematical calculations for research projects and textbook information. 
    Conducted an independent research project focused on mathematically modeling groundwater qualifying for the preliminary round at the NYC Terra Engineering Fair.
    `,
    technologies: ["Python", "Jupyter Notebook", "Excel"],
  },
  {
    year: "2020 - 2021",
    role: "Co-leader/Organizer",
    company: "CodeHers",
    description: `Coordinated and led a summer camp for 30 middle school students while managing schedules for over 10 volunteers.
    Authored and delivered lessons on computer science (python and scratch), research, and medical-based subjects. Facilitated an engaging learning environment for students. 
    `,
    technologies: ["Python", "Teaching"],
  },
];

export const PROJECTS = [
  {
    title: "Husky Laundry",
    image: huskyLaundry,
    description:
      "Developed a dynamic web application using Flask and React.js to facilitate real-time monitoring of laundry machines across Northeastern Dorms. Integrated the backend with the frontend using Axios to ensure smooth communication. Implemented features such as a search bar and navigation pages in the frontend to enhance user experience and facilitate easy access to information",
    technologies: ["React", "Axios", "Python", "Flask", "JavaScript"],
  },
  {
    title: "Seam Carver",
    image: seamCarver,
    description:
      "The goal of this project was to make a photo editor that can shrink an image while keeping the most important parts. By calculating the brightness and weight of each pixel, we were able to remove a seam (which is either a string of pixels from each row of the image or each column of the image).",
    technologies: ["Java", "IntelliJ"],
  },
  {
    title: "Maze Game",
    image: Maze,
    description:
      "Implemented Kruskal's algorithm to construct a perfect maze by eliminating walls and creating a minimum spanning tree. Animated the algorithm using a prebuilt image and world library. Offeried users the option to engage in gameplay or utilize automated maze-solving techniques such as breadth-first search and depth-first search to find optimal solutions.",
    technologies: ["Java", "IntelliJ"],
  },
];

