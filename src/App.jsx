import "./App.scss";
import { Navbar, Home, About, Contact, Projects, Skills } from "./components";
import styles from './style.js'

function App() {
  return (
    <div className="bg-black w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-black ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Home />
        </div>
      </div>

      <div className={`bg-black ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Skills />
          <Projects />
          <About />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
