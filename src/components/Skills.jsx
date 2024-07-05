import { useRef, useState } from "react";
import { FaHtml5, FaReact, FaCss3, FaJs, FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import useScrollIntoView from "./CustomHook";

const Skills = () => {
  const refTab = useRef(null);
  const divs = useRef([]);
  useScrollIntoView(refTab, divs);
  const [listSkills] = useState([
    {
      name: "C++",
      des: "C++ is a powerful language I use for system programming and performance-critical applications. I appreciate its versatility and control over system resources.",
      icon: <TbBrandCpp />,
    },
    {
      name: "HTML5",
      des: "I have a strong command of HTML5, the backbone of web development, allowing me to create well-structured and semantic web pages.",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS3",
      des: "With CSS3, I can design responsive and visually appealing websites, utilizing advanced features like flexbox, grid, animations, and transitions.",
      icon: <FaCss3 />,
    },
    {
      name: "JavaScript",
      des: "JavaScript is my go-to language for adding interactivity to web pages. I excel at writing clean and efficient code to create dynamic and engaging user experiences.",
      icon: <FaJs />,
    },
    {
      name: "ReactJS",
      des: "ReactJS is my preferred library for building modern web applications. I enjoy using its component-based architecture to develop scalable and high-performance user interfaces.",
      icon: <FaReact />,
    },
    {
      name: "Java",
      des: "I am proficient in Java, which I use for building robust and scalable backend systems, as well as for Android app development.",
      icon: <FaJava />,
    },
  ]);
  return (
    <>
      <section className="skills mt-32 " id="skills" ref={refTab}>
        <div className="title" ref={(el) => el && divs.current.push(el)}>
          These are my Skills
        </div>
        <div className="des" ref={(el) => el && divs.current.push(el)}>
          I am proficient in a variety of programming languages and technologies
          that enable me to build robust and dynamic web applications. Below are
          some of the key skills I excel in, each playing a crucial role in my
          development process.
        </div>

        <div className="list">
          {listSkills.map((value, key) => (
            <div
              key={key}
              className="item"
              ref={(el) => el && divs.current.push(el)}
            >
              {value.icon}
              <h3>{value.name}</h3>
              <p className="des">{value.des}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Skills;
