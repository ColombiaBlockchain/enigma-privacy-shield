import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { GlassButton } from '@/components/ui/glass-button';
import { GlassCard, GlassCardContent, GlassCardDescription, GlassCardHeader, GlassCardTitle } from '@/components/ui/glass-card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ProductTour } from '@/components/ui/product-tour';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { Play, HelpCircle, MessageCircle, Book } from 'lucide-react';

const Help: React.FC = () => {
  const { language, setTourActive } = useApp();
  const { t } = useTranslation(language);
  const [showDashboardTour, setShowDashboardTour] = useState(false);

  const faqItems = [
    {
      question: 'What is eERC20?',
      answer: 'eERC20 is a privacy-focused token standard built on Avalanche C-Chain that enables private transactions while maintaining regulatory compliance through selective disclosure.'
    },
    {
      question: 'How does privacy work?',
      answer: 'Our privacy system uses zero-knowledge proofs to hide transaction details (sender, receiver, amount) while allowing authorized auditors to view transactions when needed.'
    },
    {
      question: 'What networks are supported?',
      answer: 'Currently we support Avalanche C-Chain mainnet and Fuji testnet. We recommend starting with Fuji testnet for testing.'
    },
    {
      question: 'How do auditors work?',
      answer: 'Auditors are assigned view keys that allow them to see specific transactions or token movements. Token creators control which auditors have access.'
    },
    {
      question: 'Is my wallet safe?',
      answer: 'Yes, Enigma never holds custody of your funds. All transactions are signed in your wallet and we only facilitate the privacy layer.'
    },
    {
      question: 'Can I migrate existing tokens?',
      answer: 'Yes, you can migrate existing ERC20 tokens to eERC20 using our migration wizard. The process can be done through wrapping or burn & mint.'
    }
  ];

  const tourSteps = [
    {
      title: 'Welcome to Dashboard',
      description: 'This is your main dashboard where you can see all your private tokens and recent activity.'
    },
    {
      title: 'Quick Actions',
      description: 'Use these buttons to quickly create new tokens, migrate existing ones, or make private transfers.'
    },
    {
      title: 'Token Overview',
      description: 'Here you can see all your created tokens with their privacy settings and auditor assignments.'
    },
    {
      title: 'Auditor Requests',
      description: 'Manage incoming auditor requests and assign view permissions to compliance officers.'
    }
  ];

  const startTour = () => {
    setShowDashboardTour(true);
    setTourActive(true);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">{t('nav_help')}</h1>
          <p className="text-xl text-muted">Get help and learn how to use Enigma</p>
        </div>

        {/* Quick Actions */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Quick Start</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="text-center">
              <GlassCardHeader>
                <Play className="h-8 w-8 text-primary mx-auto mb-2" />
                <GlassCardTitle>Interactive Tour</GlassCardTitle>
                <GlassCardDescription>
                  Take a guided tour of the dashboard
                </GlassCardDescription>
              </GlassCardHeader>
              <GlassCardContent>
                <GlassButton variant="hero" onClick={startTour}>
                  {t('tour_start')}
                </GlassButton>
              </GlassCardContent>
            </GlassCard>

            <GlassCard className="text-center">
              <GlassCardHeader>
                <Book className="h-8 w-8 text-primary mx-auto mb-2" />
                <GlassCardTitle>Documentation</GlassCardTitle>
                <GlassCardDescription>
                  Read our comprehensive guides
                </GlassCardDescription>
              </GlassCardHeader>
              <GlassCardContent>
                <GlassButton variant="secondary">
                  {t('cta_docs')}
                </GlassButton>
              </GlassCardContent>
            </GlassCard>

            <GlassCard className="text-center">
              <GlassCardHeader>
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <GlassCardTitle>Contact Support</GlassCardTitle>
                <GlassCardDescription>
                  Get help from our team
                </GlassCardDescription>
              </GlassCardHeader>
              <GlassCardContent>
                <GlassButton variant="secondary">
                  Contact Us
                </GlassButton>
              </GlassCardContent>
            </GlassCard>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <GlassCard>
            <GlassCardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center space-x-3">
                        <HelpCircle className="h-4 w-4 text-primary" />
                        <span>{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted pl-7">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </GlassCardContent>
          </GlassCard>
        </section>
      </div>

      {/* Product Tour */}
      {showDashboardTour && (
        <ProductTour
          tourId="dashboard"
          steps={tourSteps}
          onComplete={() => setShowDashboardTour(false)}
        />
      )}
    </Layout>
  );
};

export default Help;