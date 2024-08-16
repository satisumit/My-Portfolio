import { useState } from "react";
import useScrollIntoView from "./CustomHook";
import { useRef } from "react";
const Projects = () => {
  const [listProjects] = useState([
    {
      name: " Fastest Sorting Algorithm Finder",
      des: "The Fastest Sorting Algorithm Finder is a C++ Windows GUI application designed to identify the most efficient sorting algorithm for a given input array. By leveraging various sorting techniques, this tool benchmarks their performance and highlights the optimal choice for your specific dataset.",
      languagesUsed: "C++, GUI ",
      img: "https://res-console.cloudinary.com/djhehoyxl/media_explorer_thumbnails/1ac1089fe0c944f2fd694f0abcc6a0a6/detailed",
    },
    {
      name: " To-Do Website",
      des: "The ToDo App is a simple yet functional task management application built using React and Vite, with Tailwind CSS for styling. This app allows users to add and remove tasks , helping them manage their daily activities efficiently.",
      languagesUsed: "HTML5, CSS3, Javascript , ReactJs , TailwindCss ",
      img: "https://res-console.cloudinary.com/djhehoyxl/media_explorer_thumbnails/71b27f1118af7cbe1b32728de0f286fa/detailed",
    },
    {
      name: " Scientific Calculator(Android)",
      des: "This is a scientific calculator Android app developed using Java. It provides both basic arithmetic operations and advanced scientific functions.",
      languagesUsed: "Java , Xml ",
      img: "https://res-console.cloudinary.com/djhehoyxl/media_explorer_thumbnails/1c5addf0c95b49475d045e2448552c53/detailed",
    },
    {
      name: " Google Classroom Clone (Classes Page)",
      des: "This project is a simple clone of the Google Classroom classes page, created using only HTML and CSS. The data for the classes is extracted from a JavaScript file, allowing easy customization and addition of new classes. ",
      languagesUsed: "HTML5, CSS3, Javascript  ",
      img: "https://res-console.cloudinary.com/djhehoyxl/media_explorer_thumbnails/cd16aea696e97fefb2b6503dc5c9f870/detailed",
    },
  ]);
  const refTab = useRef(null);
  const divs = useRef([]);
  useScrollIntoView(refTab, divs);
  return (
    <>
      <section className="projects" id="projects" ref={refTab}>
        <div className="title" ref={(el) => el && divs.current.push(el)}>
          My projects
        </div>
        <div className="des" ref={(el) => el && divs.current.push(el)}>
          Here are some of the projects I've worked on, showcasing my skills in
          various technologies and my ability to solve complex problems. Each
          project highlights my dedication to creating efficient, scalable, and
          user-friendly applications.
        </div>
        <div className="list">
          {listProjects.map((value, key) => (
            <div
              key={key}
              className="item"
              ref={(el) => el && divs.current.push(el)}
            >
              <div className="images">
                <img className="img" src={value.img} alt="" />
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="languagesUsed">{value.languagesUsed}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Projects;
