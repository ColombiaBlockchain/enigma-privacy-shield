import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { GlassButton } from '@/components/ui/glass-button';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { Home, RefreshCw, AlertTriangle } from 'lucide-react';

const ServerError: React.FC = () => {
  const { language } = useApp();
  const { t } = useTranslation(language);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Error Illustration */}
          <div className="relative">
            <div className="text-9xl font-bold text-danger/20">500</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <AlertTriangle className="h-16 w-16 text-danger animate-bounce" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{t('server_error')}</h1>
            <p className="text-muted text-lg">
              Our servers are having a privacy moment. We're working to restore full transparency 
              to our systems. Please try again in a moment.
            </p>
          </div>

          {/* Technical Details */}
          <div className="glass rounded-lg p-4 text-left max-w-md mx-auto">
            <h3 className="font-semibold mb-2">Technical Details:</h3>
            <ul className="text-sm text-muted space-y-1">
              <li>• Error code: 500</li>
              <li>• Timestamp: {new Date().toISOString()}</li>
              <li>• Network: All systems operational</li>
              <li>• Status: Investigating</li>
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlassButton 
              variant="hero" 
              size="lg" 
              iconLeft={<RefreshCw className="h-4 w-4" />}
              onClick={handleRefresh}
            >
              Try Again
            </GlassButton>
            <Link to="/dashboard">
              <GlassButton variant="secondary" size="lg" iconLeft={<Home className="h-4 w-4" />}>
                {t('back_to_dashboard')}
              </GlassButton>
            </Link>
          </div>

          {/* Status Links */}
          <div className="pt-8 border-t border-glass-border">
            <p className="text-sm text-muted mb-4">Check our status or get help:</p>
            <div className="flex gap-4 justify-center">
              <GlassButton variant="ghost" size="sm">
                Status Page
              </GlassButton>
              <Link to="/help">
                <GlassButton variant="ghost" size="sm">Contact Support</GlassButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServerError;