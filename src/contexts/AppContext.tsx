import React, { createContext, useContext, useState } from 'react';
import { Language } from '@/lib/i18n';

interface WalletState {
  isConnected: boolean;
  address?: string;
  provider?: string;
  network?: 'mainnet' | 'fuji';
}

interface AppContextType {
  // Language
  language: Language;
  setLanguage: (lang: Language) => void;
  
  // Theme
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  
  // Wallet
  wallet: WalletState;
  setWallet: (wallet: WalletState) => void;
  
  // Network
  network: 'mainnet' | 'fuji';
  setNetwork: (network: 'mainnet' | 'fuji') => void;
  
  // Product Tour
  tourActive: boolean;
  setTourActive: (active: boolean) => void;
  
  // Cookies consent
  cookiesAccepted: boolean;
  setCookiesAccepted: (accepted: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [wallet, setWallet] = useState<WalletState>({ isConnected: false });
  const [network, setNetwork] = useState<'mainnet' | 'fuji'>('fuji');
  const [tourActive, setTourActive] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  // Apply theme to document
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const value: AppContextType = {
    language,
    setLanguage,
    theme,
    setTheme,
    wallet,
    setWallet,
    network,
    setNetwork,
    tourActive,
    setTourActive,
    cookiesAccepted,
    setCookiesAccepted,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};