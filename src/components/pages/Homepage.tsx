import { motion } from "framer-motion";
import "../../styles/pages.css";

function Homepage() {
  return (
    <div
      className="page-wrapper"
      style={{ background: "#ff343f", height: "100vh", width: "100vw" }}
    >
      <motion.div
        className="home"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 1 } }}
      >
        <div className="home-content">
          <h1>Homepage</h1>
        </div>
      </motion.div>
    </div>
  );
}

export default Homepage;
