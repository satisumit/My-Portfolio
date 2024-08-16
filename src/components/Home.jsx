import Navbar from "./Navbar";
import useScrollIntoView from "./CustomHook";
import "../App.css";
import { useRef } from "react";
const Home = () => {
  const refTab = useRef(null);
  useScrollIntoView(refTab);
  return (
    <>
      <section
        className="md:h-[70vh] lg:h-[75vh] sm:h-[65vh] h-[60vh] overflow-hidden w-[min(1300px,100%)] relative top-[10vh] home"
        id="home"
        ref={refTab}
      >
        <div className="bg-rose-300 min-h-screen">
          <main className=" h-max pt-[30vh] w-full transition-all delay-500">
            <div
              className="upper-img 
            h-[200px] w-[200px] absolute top-[-20px] left-[-20px] bg-contain bg-[url('../src/assets/img/grid.drawio.svg')] opacity-35 shadow-custom-yellow-up"
            ></div>
            <div
              className="main-img 
            h-[280px] w-[280px] opacity-80  absolute top-16 right-16"
            >
              <img
                className="h-[55px] absolute right-[-25px] top-[-20px] rotate-12 z-10"
                src="https://res-console.cloudinary.com/djhehoyxl/media_explorer_thumbnails/4e08e171864bba5042149b7e18ab8ac7/detailed"
                alt=""
              />
              <img
                className="h-[55px] absolute left-[-35px]  top-[80px] -rotate-12 -z-10"
                src="https://res-console.cloudinary.com/djhehoyxl/media_explorer_thumbnails/26da393c875c735ad4e81ed298829d48/detailed"
                alt=""
              />
              <img
                className="w-[55px] absolute top-[-40px] -z-10 left-14 rotate-12"
                src="https://res-console.cloudinary.com/djhehoyxl/media_explorer_thumbnails/95169debda5f945044abf91773be925e/detailed"
                alt=""
              />
              <div className="code-snap-div h-[280px] w-[280px] bg-contain bg-[url('../src/assets/img/code_bgrd.png')] shadow-custom-yellow rounded-r-lg overflow-hidden "></div>
            </div>

            <div className="text-rose-950 leading-none relative flex flex-col justify-center px-[10vw]">
              <p className="sm:text-[25px] text-[20px] md:text-[30px] lg:text-[40px] font-semibold text-left w-full font-londrina-outline">
                " Hi, my name is
              </p>
              <h1
                className="w-full text-center text-[40px] lg:text-[100px] sm:text-[60px] md:text-[80px]  font-[700] name bg-purple-600
              "
              >
                SUMIT SATI
              </h1>
              <p className="w-full sm:text-[25px] md:text-[30px] lg:text-[40px] text-[20px] font-[700] px-10 py-3 border-b-4 text-center border-rose-950 font-londrina-solid">
                I am a Web and C++ Developer
              </p>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};
export default Home;
