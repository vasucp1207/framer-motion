import './App.css';
import { motion, useViewportScroll } from "framer-motion";

function App() {

  const { scrollYProgress } = useViewportScroll()

  return (
    <div className='app'>

    
      <motion.div className='circle' 
        // whileHover={{scale: 1.3}}
        drag="x"
        dragConstraints={{left: -100, right: 100}}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 90, 180, 270, 0],
          borderRadius: ["20%", "30%", "0%", "50%", "50%"]
        }}
        transition={{
          duration: 2
        }}
      />
    </div>
  );
}

export default App;
