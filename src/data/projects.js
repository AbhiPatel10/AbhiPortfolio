import img1 from "../assets/image/MERN_Project.jpg";
import img2 from "../assets/image/smart_converter.jpg";
import FMSimage from "../assets/image/FMS.jpg"

export const ProjectData = [
  {
    id: 1,
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
    id: 2,
    title: "Digital Notebook",
    about:
      "INotebook is used to right notes on cloud. we can access that notes from anywhere. this Digital notebook is secure to use for your notes..",
    tags: ["Bootstrap", "React.Js", "Node.Js", "Express.Js", "MongoDb"],
    demo: "https://digitalnotebook.herokuapp.com/",
    image: img1,
    // aos:"fade-right",
  },
  {
    id: 3,
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
