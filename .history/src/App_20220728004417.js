import './App.css';
import { motion } from "framer-motion";

function App() {
  return (
    <div className='app'>
      <motion.div className='circle' 
        whileHover={{scale: 1.3}}
        drag="x"
        dragConstraints={{left: 0, right: 0}}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: []
        }}
      />
    </div>
  );
}

export default App;
