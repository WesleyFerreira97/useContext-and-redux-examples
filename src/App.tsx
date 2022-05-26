import { useState } from 'react'
import { Home } from './pages/Home'
import { StoreProvider } from './providers/StoreProvider'

function App() {

  return (
    <StoreProvider>
      <Home />
    </StoreProvider>
  )
}

export default App
