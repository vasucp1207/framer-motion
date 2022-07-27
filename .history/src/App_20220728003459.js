import './App.css';
import { motion } from "framer-motion";

function App() {
  return (
    <div >
      <motion.div whileHover={{x: 100}}  />
    </div>
  );
}

export default App;
