import React, { useState } from 'react'
import { LoadingScreen } from './components/loading-screen/LoadingScreen'
import "./index.css"
const App = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <>
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
    </>
  )
}

export default App
