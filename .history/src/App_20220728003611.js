import './App.css';
import { motion } from "framer-motion";

function App() {
  return (
    <div >
      <motion.div className='circle' 
        whileHover={{scale: 1.3}}
        drag="x"
      />
    </div>
  );
}

export default App;
