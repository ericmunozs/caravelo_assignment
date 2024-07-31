import { createContext, useState, FC, ReactNode } from 'react'

interface IUserFlightsContextType {
  quota: number
  setQuota: (quota: number) => void
}

const defaultContextValue: IUserFlightsContextType = {
  quota: 2,
  setQuota: () => {},
}

export const DashboardContext = createContext<IUserFlightsContextType>(defaultContextValue)

interface DashboardProviderProps {
  children: ReactNode
}

export const DashboardProvider: FC<DashboardProviderProps> = ({ children }) => {
  const [quota, setQuota] = useState<number>(2)

  return (
    <DashboardContext.Provider value={{ quota, setQuota }}>
      {children}
    </DashboardContext.Provider>
  )
}
