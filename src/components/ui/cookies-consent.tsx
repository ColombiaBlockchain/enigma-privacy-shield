import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { GlassButton } from '@/components/ui/glass-button';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { Cookie } from 'lucide-react';

export const CookiesConsent: React.FC = () => {
  const { language, cookiesAccepted, setCookiesAccepted } = useApp();
  const { t } = useTranslation(language);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show cookies consent on first visit
    const hasShown = localStorage.getItem('cookies-consent-shown');
    if (!hasShown && !cookiesAccepted) {
      setOpen(true);
    }
  }, [cookiesAccepted]);

  const handleAcceptAll = () => {
    setCookiesAccepted(true);
    localStorage.setItem('cookies-consent-shown', 'true');
    localStorage.setItem('cookies-analytics', 'true');
    setOpen(false);
  };

  const handleNecessaryOnly = () => {
    setCookiesAccepted(true);
    localStorage.setItem('cookies-consent-shown', 'true');
    localStorage.setItem('cookies-analytics', 'false');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg glass backdrop-blur-glass border-glass-border max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-lg font-semibold">
            <Cookie className="h-5 w-5 text-primary" />
            <span>{t('cookies_title')}</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-sm text-muted">
            {t('cookies_message')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <GlassButton 
              variant="hero" 
              className="flex-1"
              onClick={handleAcceptAll}
            >
              {t('cookies_accept_all')}
            </GlassButton>
            <GlassButton 
              variant="secondary" 
              className="flex-1"
              onClick={handleNecessaryOnly}
            >
              {t('cookies_necessary_only')}
            </GlassButton>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};