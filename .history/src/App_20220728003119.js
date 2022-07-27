import './App.css';
import { motion } from "framer-motion";

function App() {
  return (
    <div className='circle'>
      <motion.div animate={{x: 100}} />
    </div>
  );
}

export default App;
