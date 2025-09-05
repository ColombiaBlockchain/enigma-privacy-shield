import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { GlassButton } from '@/components/ui/glass-button';
import { GlassCard, GlassCardContent, GlassCardDescription, GlassCardHeader, GlassCardTitle } from '@/components/ui/glass-card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { Shield, Eye, Play, ArrowRight, Lock, Zap, Users } from 'lucide-react';

const Home: React.FC = () => {
  const { language } = useApp();
  const { t } = useTranslation(language);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: 'What is IERC20?',
      description: 'Private token standard built on Avalanche that hides transaction details while maintaining auditability.',
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: 'How privacy works?',
      description: 'Zero-knowledge proofs ensure complete privacy. View keys allow selective disclosure to auditors.',
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: 'Demo & Testing',
      description: 'Try on Fuji testnet first. Create, migrate, and transfer tokens in a safe environment.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Privacy-First Tokens
              <br />
              <span className="text-primary">Built for Avalanche</span>
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Create, migrate, and transfer private tokens (IERC20) on Avalanche C-Chain. 
              Complete privacy with auditor oversight — no custody, no compromise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <GlassButton variant="hero" size="xl" iconRight={<ArrowRight className="h-4 w-4" />}>
                  {t('cta_get_started')}
                </GlassButton>
              </Link>
              <GlassButton 
                variant="secondary" 
                size="xl" 
                iconLeft={<Play className="h-4 w-4" />}
                onClick={() => setVideoModalOpen(true)}
              >
                {t('cta_watch_video')}
              </GlassButton>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Enigma?</h2>
          <p className="text-muted text-lg">Privacy, security, and simplicity for Web3 businesses</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <GlassCard key={index} className="text-center group hover:shadow-glass-lg transition-smooth">
              <GlassCardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full glass">
                    {feature.icon}
                  </div>
                </div>
                <GlassCardTitle>{feature.title}</GlassCardTitle>
              </GlassCardHeader>
              <GlassCardContent>
                <GlassCardDescription className="text-base">
                  {feature.description}
                </GlassCardDescription>
              </GlassCardContent>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="container mx-auto px-4 py-8">
        <div className="glass rounded-card p-8 text-center border-glass-border">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Lock className="h-6 w-6 text-success" />
            <span className="text-lg font-semibold">No Custody. Sign in Your Wallet.</span>
          </div>
          <p className="text-muted max-w-2xl mx-auto">
            Enigma never holds your funds. All transactions are signed directly in your wallet. 
            Your private keys remain secure while enjoying complete transaction privacy.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">1,000+</div>
            <div className="text-muted">Private Tokens Created</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted">Certified Auditors</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted">Transaction Privacy</div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={videoModalOpen} onOpenChange={setVideoModalOpen}>
        <DialogContent className="sm:max-w-4xl glass backdrop-blur-glass border-glass-border">
          <DialogHeader>
            <DialogTitle>Product Demo</DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Play className="h-16 w-16 text-muted mx-auto mb-4" />
              <p className="text-muted">Demo video placeholder</p>
              <p className="text-sm text-muted">Integration with YouTube/Vimeo coming soon</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Home;