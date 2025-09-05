import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { GlassButton } from '@/components/ui/glass-button';
import { GlassCard } from '@/components/ui/glass-card';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { Wallet, Shield, Usb, Globe, Sparkles, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WalletProvider {
  id: string;
  name: string;
  icon: React.ReactNode;
  priority: number;
  description: string;
}

interface WalletConnectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const WalletConnectModal: React.FC<WalletConnectModalProps> = ({ open, onOpenChange }) => {
  const { language, setWallet } = useApp();
  const { t } = useTranslation(language);
  const [connecting, setConnecting] = useState<string | null>(null);
  
  const providers: WalletProvider[] = [
    {
      id: 'core',
      name: t('provider_core'),
      icon: <Shield className="h-6 w-6 text-primary" />,
      priority: 1,
      description: 'Avalanche native wallet'
    },
    {
      id: 'metamask',
      name: t('provider_metamask'),
      icon: <Wallet className="h-6 w-6 text-warning" />,
      priority: 2,
      description: 'Most popular web3 wallet'
    },
    {
      id: 'walletconnect',
      name: t('provider_wc'),
      icon: <Globe className="h-6 w-6 text-info" />,
      priority: 3,
      description: 'Connect any mobile wallet'
    },
    {
      id: 'ledger',
      name: t('provider_ledger'),
      icon: <Usb className="h-6 w-6 text-success" />,
      priority: 4,
      description: 'Hardware wallet security'
    },
    {
      id: 'scripto',
      name: t('provider_scripto'),
      icon: <Sparkles className="h-6 w-6 text-muted" />,
      priority: 5,
      description: 'Demo wallet for testing'
    }
  ];

  const handleConnect = async (providerId: string) => {
    setConnecting(providerId);
    
    // Simulate connection process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock successful connection
    const mockAddress = '0xAbc123...789def';
    setWallet({
      isConnected: true,
      address: mockAddress,
      provider: providerId,
      network: 'fuji'
    });
    
    setConnecting(null);
    onOpenChange(false);
  };

  const featuredProviders = providers.filter(p => p.priority <= 2);
  const otherProviders = providers.filter(p => p.priority > 2);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md glass backdrop-blur-glass border-glass-border max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center">
            {t('connect_wallet')}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Featured providers */}
          <div className="space-y-3">
            {featuredProviders.map((provider) => (
              <GlassButton
                key={provider.id}
                variant="hero"
                size="lg"
                className={cn(
                  "w-full justify-start h-16 text-left",
                  connecting === provider.id && "opacity-75"
                )}
                onClick={() => handleConnect(provider.id)}
                disabled={connecting !== null}
                loading={connecting === provider.id}
              >
                <div className="flex items-center space-x-4">
                  {connecting === provider.id ? (
                    <Loader2 className="h-6 w-6 animate-spin" />
                  ) : (
                    provider.icon
                  )}
                  <div className="flex-1">
                    <div className="font-semibold">{provider.name}</div>
                    <div className="text-sm text-muted">{provider.description}</div>
                  </div>
                </div>
              </GlassButton>
            ))}
          </div>

          {/* Other providers grid */}
          <div className="grid grid-cols-2 gap-3">
            {otherProviders.map((provider) => (
              <GlassCard
                key={provider.id}
                className={cn(
                  "p-4 cursor-pointer transition-smooth hover:bg-glass/80 border-glass-border",
                  connecting === provider.id && "opacity-75"
                )}
                onClick={() => handleConnect(provider.id)}
              >
                <div className="flex flex-col items-center space-y-2 text-center">
                  {connecting === provider.id ? (
                    <Loader2 className="h-6 w-6 animate-spin" />
                  ) : (
                    provider.icon
                  )}
                  <div className="text-sm font-medium">{provider.name}</div>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Trust banner */}
          <div className="glass rounded-lg p-3 text-center">
            <p className="text-sm text-muted">
              🔒 No custody. Sign in your wallet.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
