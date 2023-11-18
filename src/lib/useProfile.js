import { createContext, useContext, useEffect, useState } from 'react'
import { buildRandomProfile } from '@/data/profile'

export const ProfileGenerationContext = createContext(null)

export const ProfileProvider = ({ children }) => {
  const [data, setData] = useState(null)
  const regenerateData = () => setData(buildRandomProfile())
  console.log('Provider')

  useEffect(() => {
    console.log('Generating profile')
    setData(buildRandomProfile())
  }, [])

  return <ProfileGenerationContext.Provider value={{ data, regenerateData }}>{children}</ProfileGenerationContext.Provider>
}

export const useProfile = () => {
  const context = useContext(ProfileGenerationContext)
  return context ?? {}
}
