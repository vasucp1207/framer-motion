import './App.css';
import { motion, useScroll, useSpring } from "framer-motion";

function App() {

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className='app'>

      <motion.path className='progress-bar'
        style={{ scaleX }}
      />

      <motion.div className='circle'
        // whileHover={{scale: 1.3}}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 90, 180, 270, 0],
          borderRadius: ["20%", "30%", "0%", "50%", "50%"]
        }}
        transition={{
          duration: 2
        }}

        layout
        
      />
    </div>
  );
}

export default App;
