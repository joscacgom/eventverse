import React, { createContext, useState, ReactNode } from 'react'
import { Web3Auth } from '@web3auth/modal'

type Web3AuthContextType = {
  web3auth: Web3Auth | null;
  setWeb3auth: React.Dispatch<React.SetStateAction<Web3Auth | null>>;
};

type Web3AuthProviderProps = {
  children: ReactNode;
};

const Web3AuthContext = createContext<Web3AuthContextType>({
  web3auth: null,
  setWeb3auth: () => {}
})

export const Web3AuthProvider: React.FC<Web3AuthProviderProps> = ({
  children
}) => {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null)

  return (
    <Web3AuthContext.Provider value={{ web3auth, setWeb3auth }}>
      {children}
    </Web3AuthContext.Provider>
  )
}

export default Web3AuthContext
