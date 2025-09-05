import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { GlassButton } from '@/components/ui/glass-button';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { Home, Search, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  const { language } = useApp();
  const { t } = useTranslation(language);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Error Illustration */}
          <div className="relative">
            <div className="text-9xl font-bold text-primary/20">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="h-16 w-16 text-primary animate-pulse" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{t('page_not_found')}</h1>
            <p className="text-muted text-lg">
              The page you're looking for seems to have vanished into the private blockchain. 
              Don't worry, your funds are safe!
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <GlassButton variant="hero" size="lg" iconLeft={<Home className="h-4 w-4" />}>
                {t('back_to_dashboard')}
              </GlassButton>
            </Link>
            <GlassButton 
              variant="secondary" 
              size="lg" 
              iconLeft={<ArrowLeft className="h-4 w-4" />}
              onClick={() => window.history.back()}
            >
              Go Back
            </GlassButton>
          </div>

          {/* Helpful Links */}
          <div className="pt-8 border-t border-glass-border">
            <p className="text-sm text-muted mb-4">Looking for something specific?</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link to="/dashboard">
                <GlassButton variant="ghost" size="sm">Dashboard</GlassButton>
              </Link>
              <Link to="/create/step-1">
                <GlassButton variant="ghost" size="sm">Create Token</GlassButton>
              </Link>
              <Link to="/transfer">
                <GlassButton variant="ghost" size="sm">Transfer</GlassButton>
              </Link>
              <Link to="/help">
                <GlassButton variant="ghost" size="sm">Help</GlassButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;