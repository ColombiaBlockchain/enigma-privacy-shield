import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { Github, Twitter, FileText, Shield, Cookie } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language } = useApp();
  const { t } = useTranslation(language);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass backdrop-blur-glass border-t border-glass-border mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">E</span>
              </div>
              <span className="font-bold">{t('app_title')}</span>
            </div>
            <p className="text-sm text-muted">
              Privacy-first DApp for Avalanche C-Chain. Create, migrate, and transfer tokens privately.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold">Product</h3>
            <div className="space-y-2 text-sm">
              <Link to="/dashboard" className="block text-muted hover:text-foreground transition-smooth">
                Dashboard
              </Link>
              <Link to="/pricing" className="block text-muted hover:text-foreground transition-smooth">
                Pricing
              </Link>
              <Link to={t('cta_docs')} className="block text-muted hover:text-foreground transition-smooth">
                {t('cta_docs')}
              </Link>
              <Link to="/help" className="block text-muted hover:text-foreground transition-smooth">
                Help & FAQ
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block text-muted hover:text-foreground transition-smooth">
                About
              </Link>
              <Link to="/auditors/request" className="block text-muted hover:text-foreground transition-smooth">
                Become Auditor
              </Link>
              <a 
                href="mailto:contact@avalpay.com" 
                className="block text-muted hover:text-foreground transition-smooth"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <div className="space-y-2 text-sm">
              <Link 
                to="/legal/terms" 
                className="flex items-center space-x-2 text-muted hover:text-foreground transition-smooth"
              >
                <FileText className="h-3 w-3" />
                <span>{t('terms')}</span>
              </Link>
              <Link 
                to="/legal/privacy" 
                className="flex items-center space-x-2 text-muted hover:text-foreground transition-smooth"
              >
                <Shield className="h-3 w-3" />
                <span>{t('privacy')}</span>
              </Link>
              <Link 
                to="/legal/cookies" 
                className="flex items-center space-x-2 text-muted hover:text-foreground transition-smooth"
              >
                <Cookie className="h-3 w-3" />
                <span>{t('cookies')}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t border-glass-border">
          <p className="text-sm text-muted">
            © {currentYear} AvalPay. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a 
              href="https://github.com/avalpay" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-smooth"
            >
              <Github className="h-4 w-4" />
            </a>
            <a 
              href="https://twitter.com/avalpay" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-smooth"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};