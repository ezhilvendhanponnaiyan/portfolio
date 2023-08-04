import Header from "./components/header";
import "./App.scss";
import Middle from "./components/middle";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Middle />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
