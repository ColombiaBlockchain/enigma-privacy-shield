import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle } from '@/components/ui/glass-card';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { FileText } from 'lucide-react';

const Terms: React.FC = () => {
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
                <FileText className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl font-bold">{t('terms')}</h1>
            <p className="text-muted">Last updated: January 1, 2024</p>
          </div>

          <GlassCard>
            <GlassCardHeader>
              <GlassCardTitle>[Demo Notice]</GlassCardTitle>
            </GlassCardHeader>
            <GlassCardContent className="prose prose-invert max-w-none">
              <p className="text-warning">
                This is a demonstration version of the Terms of Use. These terms are for testing purposes only 
                and should not be considered legally binding.
              </p>
            </GlassCardContent>
          </GlassCard>

          <GlassCard>
            <GlassCardContent className="prose prose-invert max-w-none space-y-6 p-6">
              <section>
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing and using Enigma by AvalPay ("the Service"), you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2>2. Description of Service</h2>
                <p>
                  Enigma is a privacy-focused decentralized application (DApp) that enables the creation, migration, and transfer of private tokens (eERC20) on the Avalanche C-Chain. The Service provides:
                </p>
                <ul>
                  <li>Private token creation and management</li>
                  <li>Token migration from existing standards</li>
                  <li>Private transaction capabilities</li>
                  <li>Auditor assignment and compliance tools</li>
                </ul>
              </section>

              <section>
                <h2>3. Non-Custodial Nature</h2>
                <p>
                  Enigma is a non-custodial service. We do not hold, control, or have access to your private keys, funds, or digital assets. You are solely responsible for the security of your wallet and private keys.
                </p>
              </section>

              <section>
                <h2>4. Prohibited Uses</h2>
                <p>You agree not to use the Service for:</p>
                <ul>
                  <li>Any unlawful purpose or illegal activity</li>
                  <li>Money laundering or terrorist financing</li>
                  <li>Violating any applicable laws or regulations</li>
                  <li>Circumventing compliance requirements</li>
                </ul>
              </section>

              <section>
                <h2>5. Privacy and Compliance</h2>
                <p>
                  While Enigma provides privacy features, users must comply with all applicable laws and regulations in their jurisdiction. The Service includes auditor functionality to support regulatory compliance when required.
                </p>
              </section>

              <section>
                <h2>6. Limitation of Liability</h2>
                <p>
                  The Service is provided "as is" without warranties of any kind. [Company] shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of the Service.
                </p>
              </section>

              <section>
                <h2>7. Governing Law</h2>
                <p>
                  These terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2>8. Contact Information</h2>
                <p>
                  For questions about these Terms of Use, please contact us at [Contact Email].
                </p>
              </section>
            </GlassCardContent>
          </GlassCard>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;