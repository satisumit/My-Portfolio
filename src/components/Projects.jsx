import { useState } from "react";
import useScrollIntoView from "./CustomHook";
import { useRef } from "react";
const Projects = () => {
  const [listProjects] = useState([
    {
      name: " Fastest Sorting Algorithm Finder",
      des: "The Fastest Sorting Algorithm Finder is a C++ Windows GUI application designed to identify the most efficient sorting algorithm for a given input array. By leveraging various sorting techniques, this tool benchmarks their performance and highlights the optimal choice for your specific dataset.",
      languagesUsed: "C++, GUI ",
      img: "../src/assets/img/fsaf.png",
    },
    {
      name: " To-Do Website",
      des: "The ToDo App is a simple yet functional task management application built using React and Vite, with Tailwind CSS for styling. This app allows users to add and remove tasks , helping them manage their daily activities efficiently.",
      languagesUsed: "HTML5, CSS3, Javascript , ReactJs , TailwindCss ",
      img: "../src/assets/img/todo.png",
    },
    {
      name: " Scientific Calculator(Android)",
      des: "This is a scientific calculator Android app developed using Java. It provides both basic arithmetic operations and advanced scientific functions.",
      languagesUsed: "Java , Xml ",
      img: "../src/assets/img/ac.png",
    },
    {
      name: " Google Classroom Clone (Classes Page)",
      des: "This project is a simple clone of the Google Classroom classes page, created using only HTML and CSS. The data for the classes is extracted from a JavaScript file, allowing easy customization and addition of new classes. ",
      languagesUsed: "HTML5, CSS3, Javascript  ",
      img: "../src/assets/img/gc.png",
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
