import { motion } from 'motion/react'

import './App.css'
import { SpaceContainer } from './components/SpaceContainer'

function App() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
        }}
        style={{ width: '800px', height: '500px' }}
        className="relative"
      >
        <SpaceContainer>
          <h1>Space Rocks</h1>
        </SpaceContainer>
      </motion.div>
    </>
  )
}

export default App
