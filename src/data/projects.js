import img1 from "../assets/image/MERN_Project.jpg";
import img2 from "../assets/image/smart_converter.jpg";
import FMSimage from "../assets/image/FMS.jpg"
import Jaliyan from "../assets/image/Jaliyan Healthcare.jpg"
import Golden from '../assets/image/Goldengate.jpg'

export const ProjectData = [
  {
    id: 1,
    title: "Jaliyan Health Care Clinic",
    about: "Jaliyan clinic is webaite for patients who can check the clinic details and book appoinment online, if they have any emmergency they can also call a doctor for help.",
    tags: ["Next.js","React.js", "Tailwind CSS" ],
    demo: "https://jaliyanhealthcare.vercel.app/",
    // github: "https://github.com/KishanfrontendArmy/FMS.git",
    image: Jaliyan,
    // aos:"fade-left",
  },
  {
    id: 2,
    title: "Golden Gate Capital",
    about: "Golden Gate Capital is a website for invest in the largest financial market.",
    tags: ["Next.js","React.js", "Tailwind CSS" ],
    demo: "https://goldengatecapital.netlify.app/",
    // github: "https://github.com/KishanfrontendArmy/FMS.git",
    image: Golden,
    // aos:"fade-left",
  },
  {
    id: 3,
    title: "FMS Management System",
    about:
      "FMS System (Frontend army Management System) which is develop in MERN stack. The aim of our project is to manage our company projects, tasks, roles, attendance, work hours, employee leaves etc.",
    tags: ["Bootstrap", "React.Js", "Node.Js", "Express.Js", "MongoDb"],
    demo: "https://fams.netlify.app/",
    // github: "https://github.com/KishanfrontendArmy/FMS.git",
    image: FMSimage,
    // aos:"fade-left",
  },
  {
    id: 4,
    title: "Digital Notebook",
    about:
      "INotebook is used to right notes on cloud. we can access that notes from anywhere. this Digital notebook is secure to use for your notes.",
    tags: ["Bootstrap", "React.Js", "Node.Js", "Express.Js", "MongoDb"],
    demo: "https://digitalnotebook.herokuapp.com/",
    image: img1,
    // aos:"fade-right",
  },
  {
    id: 5,
    title: "Smart Converter",
    about:
      "Smart Converter is the small and basic project which is build in react.js where i use some JavaScript to Uppercase, lowercase, copy things and so on...",
    tags: ["Bootstrap","ReactJs"],
    demo: "https://abhipatel10.github.io/smartconverter/",
    github: "https://github.com/AbhiPatel10/smartconverter",
    image: img2,
    // aos: "fade-left"
  },
];
