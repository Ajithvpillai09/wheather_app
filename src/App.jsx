import Card from './components/card'
import ErrorBoundary from './components/ErrorBoundary'
import NotFound from './components/NotFound'
import { Suspense } from 'react'

import './App.css'

function App() {
  

  return (
    <>
    <ErrorBoundary fallback={<NotFound/>} >
      <Suspense fallback="loading">
          <Card/>
      </Suspense>     
    </ErrorBoundary>
    
    </>
  )
}

export default App
