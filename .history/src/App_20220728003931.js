import './App.css';
import { motion } from "framer-motion";

function App() {
  return (
    <div className=''>
      <motion.div className='circle' 
        whileHover={{scale: 1.3}}
        drag="x"
        dragConstraints={{left: -100, right: 100}}
      />
    </div>
  );
}

export default App;
