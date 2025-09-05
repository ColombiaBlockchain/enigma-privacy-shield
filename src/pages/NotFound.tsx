import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { GlassButton } from '@/components/ui/glass-button';
import { useApp } from '@/contexts/AppContext';
import { ArrowLeft, Home } from 'lucide-react';

const NotFound: React.FC = () => {
  const { wallet } = useApp();
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout showFooter={false}>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto text-center">
          <div className="glass-card p-8">
            <div className="text-6xl font-bold text-primary mb-4">404</div>
            <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
            <p className="text-muted mb-8">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="space-y-4">
              {wallet.isConnected ? (
                <Link to="/dashboard">
                  <GlassButton variant="primary" size="lg" iconLeft={<Home className="h-4 w-4" />}>
                    Back to Dashboard
                  </GlassButton>
                </Link>
              ) : (
                <Link to="/">
                  <GlassButton variant="primary" size="lg" iconLeft={<Home className="h-4 w-4" />}>
                    Return to Home
                  </GlassButton>
                </Link>
              )}
              
              <Link to="/" className="block">
                <GlassButton variant="ghost" iconLeft={<ArrowLeft className="h-4 w-4" />}>
                  Go Back
                </GlassButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;