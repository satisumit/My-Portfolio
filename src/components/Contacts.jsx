import { useState } from "react";
import useScrollIntoView from "./CustomHook";
import { useRef } from "react";
const Contacts = () => {
  const [listContacts] = useState([
    {
      title: "Phone Number",
      value: "tel:+91-7878680899",
      anchor: "+91-7878680899",
    },
    {
      title: "Email",
      value: "mailto:sumit.sati2508@gmail.com",
      anchor: "sumit.sati2508@gmail.com",
    },
    {
      title: "Github",
      value: "https://github.com/satisumit",
      anchor: "satisumit",
    },
    {
      title: "Linkedin",
      value: "https://www.linkedin.com/in/sumit-sati-206039289/",
      anchor: "Sumit Sati",
    },
  ]);
  const refTab = useRef(null);
  const divs = useRef([]);
  useScrollIntoView(refTab, divs);
  return (
    <section className="contacts" ref={refTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        My Contacts
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        Feel free to reach out to me through any of the mediums below. Whether
        you have a question, a project idea, or just want to connect, I am
        always open to new opportunities and collaborations.
      </div>
      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {listContacts.map((value, key) => (
          <div className="item" key={key}>
            <h3>{value.title}</h3>
            <a href={value.value}>{value.anchor}</a>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Contacts;
