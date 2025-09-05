import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle } from '@/components/ui/glass-card';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { Cookie } from 'lucide-react';

const Cookies: React.FC = () => {
  const { language } = useApp();
  const { t } = useTranslation(language);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-3 rounded-full glass">
                <Cookie className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl font-bold">{t('cookies')}</h1>
            <p className="text-muted">Last updated: January 1, 2024</p>
          </div>

          <GlassCard>
            <GlassCardHeader>
              <GlassCardTitle>[Demo Notice]</GlassCardTitle>
            </GlassCardHeader>
            <GlassCardContent className="prose prose-invert max-w-none">
              <p className="text-warning">
                This is a demonstration version of the Cookies Policy. This policy is for testing purposes only 
                and should not be considered a legally binding cookies policy.
              </p>
            </GlassCardContent>
          </GlassCard>

          <GlassCard>
            <GlassCardContent className="prose prose-invert max-w-none space-y-6 p-6">
              <section>
                <h2>1. What Are Cookies</h2>
                <p>
                  Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
                </p>
              </section>

              <section>
                <h2>2. Types of Cookies We Use</h2>
                
                <h3>Essential Cookies</h3>
                <p>These cookies are necessary for the website to function properly:</p>
                <ul>
                  <li><strong>Session Management:</strong> Keeps you logged in during your session</li>
                  <li><strong>Security:</strong> Protects against cross-site request forgery</li>
                  <li><strong>Preferences:</strong> Remembers your language and theme choices</li>
                  <li><strong>Functionality:</strong> Enables core features like wallet connection</li>
                </ul>

                <h3>Analytics Cookies (Optional)</h3>
                <p>These cookies help us understand how you use our application:</p>
                <ul>
                  <li><strong>Usage Analytics:</strong> Tracks page views and user interactions</li>
                  <li><strong>Performance Monitoring:</strong> Helps us identify and fix issues</li>
                  <li><strong>Feature Usage:</strong> Shows us which features are most valuable</li>
                </ul>
              </section>

              <section>
                <h2>3. Cookie Categories</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                  <GlassCard>
                    <GlassCardHeader>
                      <GlassCardTitle className="text-lg">Necessary Cookies</GlassCardTitle>
                    </GlassCardHeader>
                    <GlassCardContent>
                      <p className="text-sm text-muted">Always active - required for basic functionality</p>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>• Authentication state</li>
                        <li>• Language preferences</li>
                        <li>• Theme settings</li>
                        <li>• Security tokens</li>
                      </ul>
                    </GlassCardContent>
                  </GlassCard>

                  <GlassCard>
                    <GlassCardHeader>
                      <GlassCardTitle className="text-lg">Analytics Cookies</GlassCardTitle>
                    </GlassCardHeader>
                    <GlassCardContent>
                      <p className="text-sm text-muted">Optional - helps improve our service</p>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>• Page view tracking</li>
                        <li>• User interaction data</li>
                        <li>• Performance metrics</li>
                        <li>• Error reporting</li>
                      </ul>
                    </GlassCardContent>
                  </GlassCard>
                </div>
              </section>

              <section>
                <h2>4. Managing Your Cookie Preferences</h2>
                <p>
                  You can control cookies in several ways:
                </p>
                <ul>
                  <li><strong>Cookie Consent Banner:</strong> Choose your preferences when you first visit</li>
                  <li><strong>Browser Settings:</strong> Configure cookie handling in your browser</li>
                  <li><strong>Opt-Out:</strong> Disable analytics cookies at any time</li>
                </ul>
              </section>

              <section>
                <h2>5. Third-Party Cookies</h2>
                <p>
                  We may use third-party services that set their own cookies:
                </p>
                <ul>
                  <li><strong>Analytics Providers:</strong> For usage statistics (opt-in only)</li>
                  <li><strong>Security Services:</strong> For DDoS protection and security</li>
                </ul>
              </section>

              <section>
                <h2>6. Cookie Retention</h2>
                <p>
                  Different cookies have different retention periods:
                </p>
                <ul>
                  <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Stored for up to 1 year</li>
                  <li><strong>Analytics Cookies:</strong> Retained for up to 2 years</li>
                </ul>
              </section>

              <section>
                <h2>7. Withdrawing Consent</h2>
                <p>
                  You can withdraw your consent for optional cookies at any time by:
                </p>
                <ul>
                  <li>Clearing your browser cookies</li>
                  <li>Adjusting your browser settings</li>
                  <li>Contacting us to reset your preferences</li>
                </ul>
              </section>

              <section>
                <h2>8. Contact Us</h2>
                <p>
                  If you have questions about our use of cookies, please contact us at [Contact Email].
                </p>
              </section>
            </GlassCardContent>
          </GlassCard>
        </div>
      </div>
    </Layout>
  );
};

export default Cookies;