import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { changeTabActive } from "../redux/action";

const Navbar = ({ activeTab }) => {
  const [listNav] = useState(["home", "skills", "projects", "contacts"]);
  const dispath = useDispatch();
  const changeTab = (item) => {
    dispath(changeTabActive(item));
  };
  return (
    <>
      <header>
        <nav>
          {listNav.map((item, key) => (
            <span
              key={key}
              className={activeTab === item ? "active" : ""}
              onClick={() => changeTab(item)}
            >
              {item}
            </span>
          ))}
        </nav>
      </header>
    </>
  );
};
const mapStateToProps = (state) => ({
  activeTab: state.activeTab,
});
export default connect(mapStateToProps, { changeTabActive })(Navbar);
