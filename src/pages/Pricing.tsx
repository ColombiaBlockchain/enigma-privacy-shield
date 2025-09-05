import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { GlassButton } from '@/components/ui/glass-button';
import { GlassCard, GlassCardContent, GlassCardDescription, GlassCardHeader, GlassCardTitle } from '@/components/ui/glass-card';
import { Badge } from '@/components/ui/badge';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { Check, Star, Zap, Building } from 'lucide-react';

const Pricing: React.FC = () => {
  const { language } = useApp();
  const { t } = useTranslation(language);

  const plans = [
    {
      name: 'Starter',
      price: '$0',
      period: '/mo',
      description: 'Perfect for trying out private tokens',
      icon: <Star className="h-6 w-6" />,
      features: [
        '1 token on testnet',
        '1 auditor sandbox',
        '100 simulated transactions/mo',
        'Interactive product tour',
        'FAQ support',
        'Basic privacy features'
      ],
      cta: 'Start Free',
      popular: false,
      buttonVariant: 'secondary' as const
    },
    {
      name: 'Pro',
      price: '$39',
      period: '/mo',
      description: 'For growing businesses and DeFi projects',
      icon: <Zap className="h-6 w-6" />,
      features: [
        'Up to 3 tokens (mainnet/testnet)',
        'Up to 3 auditors',
        '5,000 transactions/mo',
        'Expiring view keys',
        'Advanced privacy controls',
        '48h email support',
        'API access (coming soon)'
      ],
      cta: 'Get Started',
      popular: true,
      buttonVariant: 'primary' as const
    },
    {
      name: 'Business',
      price: '$149',
      period: '/mo',
      description: 'Enterprise-grade privacy and compliance',
      icon: <Building className="h-6 w-6" />,
      features: [
        'Up to 10 tokens',
        'Unlimited auditors',
        '50,000 transactions/mo',
        'Webhooks & full API',
        'Custom privacy policies',
        '8h priority support',
        'Compliance reporting',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      popular: false,
      buttonVariant: 'hero' as const
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Choose the perfect plan for your privacy needs. All plans include core IERC20 features.
          </p>
          <div className="mt-6 inline-flex items-center space-x-2 p-1 glass rounded-full border-glass-border">
            <Badge variant="secondary" className="text-xs">🌎 LATAM Optimized</Badge>
            <span className="text-sm text-muted">Pricing in USD, support in your timezone</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <GlassCard 
              key={index} 
              className={`relative transition-smooth hover:shadow-glass-lg ${
                plan.popular ? 'ring-2 ring-primary border-primary/50' : 'border-glass-border'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <GlassCardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full ${plan.popular ? 'bg-primary text-primary-foreground' : 'glass'}`}>
                    {plan.icon}
                  </div>
                </div>
                <GlassCardTitle className="text-xl">{plan.name}</GlassCardTitle>
                <div className="text-3xl font-bold mb-2">
                  {plan.price}<span className="text-sm font-normal text-muted">{plan.period}</span>
                </div>
                <GlassCardDescription>{plan.description}</GlassCardDescription>
              </GlassCardHeader>
              
              <GlassCardContent>
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link to="/auth">
                  <GlassButton variant={plan.buttonVariant} size="lg" className="w-full">
                    {plan.cta}
                  </GlassButton>
                </Link>
              </GlassCardContent>
            </GlassCard>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <GlassCard>
              <GlassCardContent className="p-6">
                <h3 className="font-semibold mb-2">What's included in the free Starter plan?</h3>
                <p className="text-muted">
                  The Starter plan includes full access to create one private token on Fuji testnet, 
                  assign one auditor, and perform up to 100 test transactions. Perfect for learning and prototyping.
                </p>
              </GlassCardContent>
            </GlassCard>

            <GlassCard>
              <GlassCardContent className="p-6">
                <h3 className="font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
                <p className="text-muted">
                  Yes! You can change your plan at any time. Upgrades take effect immediately, 
                  and downgrades will take effect at the end of your current billing cycle.
                </p>
              </GlassCardContent>
            </GlassCard>

            <GlassCard>
              <GlassCardContent className="p-6">
                <h3 className="font-semibold mb-2">Do you offer custom enterprise solutions?</h3>
                <p className="text-muted">
                  Absolutely! For organizations needing custom integrations, higher transaction limits, 
                  or specialized compliance features, contact our sales team for a tailored solution.
                </p>
              </GlassCardContent>
            </GlassCard>

            <GlassCard>
              <GlassCardContent className="p-6">
                <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-muted">
                  We accept major credit cards, PayPal, and cryptocurrency payments. 
                  Enterprise customers can also pay via bank transfer with NET-30 terms.
                </p>
              </GlassCardContent>
            </GlassCard>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <GlassCard className="glass p-8 border-glass-border">
            <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-muted mb-6">
              Join hundreds of organizations already using Enigma for private token management.
            </p>
            <Link to="/auth">
              <GlassButton variant="hero" size="xl">
                {t('cta_get_started')}
              </GlassButton>
            </Link>
          </GlassCard>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;