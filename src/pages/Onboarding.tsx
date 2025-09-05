import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { GlassButton } from '@/components/ui/glass-button';
import { GlassCard, GlassCardContent, GlassCardDescription, GlassCardHeader, GlassCardTitle } from '@/components/ui/glass-card';
import { Badge } from '@/components/ui/badge';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { Plus, ArrowRightLeft, Send, TestTube } from 'lucide-react';
import { cn } from '@/lib/utils';

const Onboarding: React.FC = () => {
  const { language } = useApp();
  const { t } = useTranslation(language);
  const navigate = useNavigate();
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const goals = [
    {
      id: 'create',
      title: t('onb_create'),
      description: 'Launch a new private token with custom privacy settings and auditor support.',
      icon: <Plus className="h-8 w-8" />,
      route: '/create/step-1',
      recommended: true,
    },
    {
      id: 'migrate',
      title: t('onb_migrate'),
      description: 'Convert your existing ERC20 token to IERC20 for enhanced privacy features.',
      icon: <ArrowRightLeft className="h-8 w-8" />,
      route: '/migrate/step-1',
      recommended: false,
    },
    {
      id: 'transfer',
      title: t('onb_transfer'),
      description: 'Send private transactions using existing IERC20 tokens in your wallet.',
      icon: <Send className="h-8 w-8" />,
      route: '/transfer',
      recommended: false,
    },
  ];

  const handleContinue = () => {
    if (selectedGoal) {
      const goal = goals.find(g => g.id === selectedGoal);
      if (goal) {
        navigate(goal.route);
      }
    }
  };

  return (
    <Layout showFooter={false}>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">{t('onboarding_title')}</h1>
            <p className="text-muted text-lg">Choose your path to get started with private tokens</p>
            
            {/* Helper chip */}
            <div className="inline-flex items-center space-x-2 mt-6 p-3 glass rounded-full border-glass-border">
              <TestTube className="h-4 w-4 text-primary" />
              <span className="text-sm">Try Fuji Testnet first</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {goals.map((goal) => (
              <GlassCard
                key={goal.id}
                className={cn(
                  "cursor-pointer transition-smooth hover:shadow-glass-lg border-glass-border",
                  selectedGoal === goal.id && "ring-2 ring-primary border-primary/50",
                  "relative"
                )}
                onClick={() => setSelectedGoal(goal.id)}
              >
                {goal.recommended && (
                  <Badge className="absolute -top-2 left-4 bg-primary text-primary-foreground">
                    Recommended
                  </Badge>
                )}
                
                <GlassCardHeader>
                  <div className="flex justify-center mb-4">
                    <div className={cn(
                      "p-4 rounded-full transition-smooth",
                      selectedGoal === goal.id ? "bg-primary text-primary-foreground" : "glass"
                    )}>
                      {goal.icon}
                    </div>
                  </div>
                  <GlassCardTitle className="text-center">{goal.title}</GlassCardTitle>
                </GlassCardHeader>
                <GlassCardContent>
                  <GlassCardDescription className="text-center text-base">
                    {goal.description}
                  </GlassCardDescription>
                </GlassCardContent>
              </GlassCard>
            ))}
          </div>

          <div className="text-center">
            <GlassButton
              variant="primary"
              size="xl"
              onClick={handleContinue}
              disabled={!selectedGoal}
            >
              Continue
            </GlassButton>
          </div>

          {/* Info panel */}
          <div className="mt-12 glass p-6 rounded-card border-glass-border">
            <h3 className="font-semibold mb-4">What you'll need:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start space-x-2">
                <span className="text-primary">•</span>
                <span>Connected wallet (MetaMask, Core, etc.)</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-primary">•</span>
                <span>AVAX for gas fees (testnet AVAX is free)</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-primary">•</span>
                <span>Basic token information (name, symbol, supply)</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-primary">•</span>
                <span>5-10 minutes to complete setup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Onboarding;