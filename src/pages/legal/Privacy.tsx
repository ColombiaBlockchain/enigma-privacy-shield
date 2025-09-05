import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle } from '@/components/ui/glass-card';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { Shield } from 'lucide-react';

const Privacy: React.FC = () => {
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
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl font-bold">{t('privacy')}</h1>
            <p className="text-muted">Last updated: January 1, 2024</p>
          </div>

          <GlassCard>
            <GlassCardHeader>
              <GlassCardTitle>[Demo Notice]</GlassCardTitle>
            </GlassCardHeader>
            <GlassCardContent className="prose prose-invert max-w-none">
              <p className="text-warning">
                This is a demonstration version of the Privacy Policy. This policy is for testing purposes only 
                and should not be considered a legally binding privacy policy.
              </p>
            </GlassCardContent>
          </GlassCard>

          <GlassCard>
            <GlassCardContent className="prose prose-invert max-w-none space-y-6 p-6">
              <section>
                <h2>1. Information We Collect</h2>
                <p>
                  Enigma is designed with privacy in mind. We collect minimal information necessary to provide our services:
                </p>
                <ul>
                  <li><strong>Wallet Addresses:</strong> Public wallet addresses for transaction facilitation</li>
                  <li><strong>Usage Data:</strong> Anonymized application usage statistics</li>
                  <li><strong>Local Storage:</strong> Preferences and settings stored locally in your browser</li>
                </ul>
              </section>

              <section>
                <h2>2. On-Chain Privacy</h2>
                <p>
                  No personally identifiable information (PII) is stored on the blockchain. All private transaction data is protected through zero-knowledge proofs and cryptographic techniques.
                </p>
              </section>

              <section>
                <h2>3. Cookies and Tracking</h2>
                <p>
                  We use essential cookies for application functionality and optional analytics cookies with your consent:
                </p>
                <ul>
                  <li><strong>Essential Cookies:</strong> Required for core functionality</li>
                  <li><strong>Analytics Cookies:</strong> Used to improve our service (opt-in only)</li>
                </ul>
              </section>

              <section>
                <h2>4. Data Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your information to third parties, except:
                </p>
                <ul>
                  <li>When required by law or legal process</li>
                  <li>With authorized auditors (only transaction data they have view keys for)</li>
                  <li>With your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2>5. Data Retention</h2>
                <p>
                  We retain data only as long as necessary to provide our services:
                </p>
                <ul>
                  <li>Transaction logs: As required by applicable regulations</li>
                  <li>Usage analytics: 24 months maximum</li>
                  <li>Application preferences: Until you clear them</li>
                </ul>
              </section>

              <section>
                <h2>6. Security</h2>
                <p>
                  We implement industry-standard security measures to protect your data:
                </p>
                <ul>
                  <li>End-to-end encryption for sensitive data</li>
                  <li>Secure communication protocols (HTTPS)</li>
                  <li>Regular security audits and updates</li>
                  <li>Minimal data collection principles</li>
                </ul>
              </section>

              <section>
                <h2>7. Your Rights</h2>
                <p>
                  You have the right to:
                </p>
                <ul>
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Withdraw consent for optional data processing</li>
                  <li>Data portability</li>
                </ul>
              </section>

              <section>
                <h2>8. Data Protection Officer</h2>
                <p>
                  For privacy-related inquiries, contact our Data Protection Officer at [DPO Email].
                </p>
              </section>

              <section>
                <h2>9. Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
                </p>
              </section>

              <section>
                <h2>10. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us at [Contact Email].
                </p>
              </section>
            </GlassCardContent>
          </GlassCard>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;