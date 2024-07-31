import { FC } from 'react'

import { DashboardPage } from './components/pages/DashboardPage/DashboardPage'
import { Toaster } from './components/ui/toaster/toaster'
import { DashboardProvider } from './contexts/DashboardContext'
import './App.css'

const App: FC = () => {
  return (
    <DashboardProvider>
      <DashboardPage />
      <Toaster />
    </DashboardProvider>
  )
}

export default App
