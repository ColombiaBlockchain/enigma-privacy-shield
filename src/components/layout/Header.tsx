import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GlassButton } from '@/components/ui/glass-button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { WalletConnectModal } from '@/components/wallet/WalletConnectModal';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { Badge } from '@/components/ui/badge';
import { Globe, HelpCircle, Wallet, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Header: React.FC = () => {
  const { language, setLanguage, network, setNetwork, wallet } = useApp();
  const { t } = useTranslation(language);
  const [walletModalOpen, setWalletModalOpen] = useState(false);
  const location = useLocation();

  const languages = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' },
    { value: 'pt', label: 'Português' }
  ];

  const networks = [
    { value: 'mainnet', label: 'Mainnet', badge: 'LIVE' },
    { value: 'fuji', label: 'Fuji Testnet', badge: 'TEST' }
  ];

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <>
      <header className="sticky top-0 z-50 glass backdrop-blur-glass border-b border-glass-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">E</span>
            </div>
            <span className="text-lg font-bold">{t('app_title')}</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/dashboard" 
              className={cn(
                "text-sm font-medium transition-smooth hover:text-primary",
                location.pathname.startsWith('/dashboard') && "text-primary"
              )}
            >
              Dashboard
            </Link>
            <Link 
              to="/pricing" 
              className={cn(
                "text-sm font-medium transition-smooth hover:text-primary",
                location.pathname === '/pricing' && "text-primary"
              )}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "text-sm font-medium transition-smooth hover:text-primary",
                location.pathname === '/about' && "text-primary"
              )}
            >
              About
            </Link>
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-3">
            {/* Network selector */}
            <Select value={network} onValueChange={(value: 'mainnet' | 'fuji') => setNetwork(value)}>
              <SelectTrigger className="w-auto glass border-glass-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="glass backdrop-blur-glass border-glass-border">
                {networks.map((net) => (
                  <SelectItem key={net.value} value={net.value}>
                    <div className="flex items-center space-x-2">
                      <span>{net.label}</span>
                      <Badge variant={net.value === 'mainnet' ? 'default' : 'secondary'} className="text-xs">
                        {net.badge}
                      </Badge>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Language selector */}
            <Select value={language} onValueChange={(value: any) => setLanguage(value)}>
              <SelectTrigger className="w-auto glass border-glass-border">
                <Globe className="h-4 w-4" />
                <ChevronDown className="h-3 w-3" />
              </SelectTrigger>
              <SelectContent className="glass backdrop-blur-glass border-glass-border">
                {languages.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Help */}
            <Link to="/help">
              <GlassButton variant="ghost" size="sm">
                <HelpCircle className="h-4 w-4" />
              </GlassButton>
            </Link>

            {/* Wallet connection */}
            {wallet.isConnected ? (
              <GlassButton variant="secondary" size="sm" className="font-mono">
                <Wallet className="h-4 w-4 mr-2" />
                {formatAddress(wallet.address!)}
                <Badge variant="outline" className="ml-2 text-xs">
                  {wallet.network?.toUpperCase()}
                </Badge>
              </GlassButton>
            ) : (
              <GlassButton 
                variant="hero" 
                size="sm"
                onClick={() => setWalletModalOpen(true)}
              >
                {t('connect_wallet')}
              </GlassButton>
            )}
          </div>
        </div>
      </header>

      <WalletConnectModal 
        open={walletModalOpen} 
        onOpenChange={setWalletModalOpen} 
      />
    </>
  );
};