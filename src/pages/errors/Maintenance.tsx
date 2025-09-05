import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { GlassButton } from '@/components/ui/glass-button';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { Wrench, Clock, ArrowRight } from 'lucide-react';

const Maintenance: React.FC = () => {
  const { language } = useApp();
  const { t } = useTranslation(language);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Maintenance Illustration */}
          <div className="relative">
            <div className="glass rounded-full w-32 h-32 mx-auto flex items-center justify-center">
              <Wrench className="h-16 w-16 text-primary animate-pulse" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{t('maintenance_mode')}</h1>
            <p className="text-muted text-lg">
              We're upgrading our privacy infrastructure to serve you better. 
              We'll be back soon with enhanced security and new features.
            </p>
          </div>

          {/* Status */}
          <div className="glass rounded-lg p-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Clock className="h-5 w-5 text-warning" />
              <span className="font-semibold">Estimated Downtime</span>
            </div>
            <p className="text-2xl font-bold text-primary">2-3 hours</p>
            <p className="text-sm text-muted mt-2">
              Started at 14:00 UTC • Expected completion: 17:00 UTC
            </p>
          </div>

          {/* What's Being Updated */}
          <div className="text-left glass rounded-lg p-6">
            <h3 className="font-semibold mb-4 text-center">What we're improving:</h3>
            <ul className="space-y-2 text-muted">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Enhanced zero-knowledge proof generation</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Improved auditor key management</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Faster transaction processing</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>New compliance reporting features</span>
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <GlassButton 
              variant="hero" 
              size="lg"
              onClick={() => window.location.reload()}
            >
              Check Again
            </GlassButton>
            
            <div className="flex gap-4 justify-center">
              <GlassButton variant="ghost" size="sm">
                Status Updates
              </GlassButton>
              <GlassButton variant="ghost" size="sm">
                Follow on Twitter
              </GlassButton>
            </div>
          </div>

          {/* Contact */}
          <div className="pt-8 border-t border-glass-border">
            <p className="text-sm text-muted">
              Need urgent assistance? Contact our emergency support team.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Maintenance;