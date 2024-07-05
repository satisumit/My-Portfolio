import "./App.css";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main>
      <Home></Home>
      <Navbar></Navbar>
      <Skills></Skills>
      <Projects></Projects>
      <Contacts></Contacts>
    </main>
  );
}

export default App;
