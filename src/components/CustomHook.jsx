import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTabActive } from "../redux/action";

const useScrollIntoView = (refTab = null, refDivs = null) => {
  const listNav = ["home", "skills", "projects", "contacts"];
  const activeTab = useSelector((state) => state.activeTab);
  const dispatch = useDispatch();

  const changeTab = (item) => {
    dispatch(changeTabActive(item));
  };

  useEffect(() => {
    if (refTab !== null && refTab.current.classList.contains(activeTab)) {
      if (activeTab === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        refTab.current.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (refDivs !== null) {
      refDivs.current.forEach((div) => {
        div.classList.add("animation");
      });

      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const refTabOffsetTop =
          refTab.current.getBoundingClientRect().top + scrollPosition;
        const refTabOffsetBottom =
          refTab.current.getBoundingClientRect().bottom + scrollPosition;
        // if (scrollPosition < window.innerHeight / 2) changeTab("home");
        // else if (
        //   scrollPosition >= refTabOffsetTop - (window.innerHeight / 4) * 3 &&
        //   scrollPosition <= refTabOffsetBottom - window.innerHeight / 1.3
        // ) {
        //   listNav.forEach((item) => {
        //     if (refTab.current.classList.contains(item)) {
        //       changeTab(item);
        //       console.log(activeTab);
        //     }
        //   });
        // }
        refDivs.current.forEach((div) => {
          const offsetTop = div.getBoundingClientRect().top + scrollPosition;
          if (scrollPosition >= offsetTop - window.innerHeight / 1.3) {
            div.classList.add("active");
          } else {
            div.classList.remove("active");
          }
        });
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup function to remove the event listener
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [activeTab, refTab, refDivs, dispatch]);
};

export default useScrollIntoView;
