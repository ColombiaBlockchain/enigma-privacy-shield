import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { GlassButton } from '@/components/ui/glass-button';
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle } from '@/components/ui/glass-card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { useToast } from '@/hooks/use-toast';
import { Shield, CheckCircle } from 'lucide-react';

const AuditorRequest: React.FC = () => {
  const { language } = useApp();
  const { t } = useTranslation(language);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    walletAddress: '',
    organizationName: '',
    note: '',
    targetToken: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Success",
      description: t('request_sent'),
    });
    
    setIsSubmitting(false);
    navigate('/');
  };

  const isFormValid = formData.walletAddress && formData.organizationName;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-3 rounded-full glass">
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl font-bold">{t('auditor_request_title')}</h1>
            <p className="text-muted">
              Request access to audit private tokens. Your request will be reviewed by token creators.
            </p>
          </div>

          {/* Form */}
          <GlassCard>
            <GlassCardHeader>
              <GlassCardTitle>{t('become_auditor')}</GlassCardTitle>
            </GlassCardHeader>
            <GlassCardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="wallet">{t('requester_wallet')}</Label>
                  <Input
                    id="wallet"
                    placeholder="0x..."
                    value={formData.walletAddress}
                    onChange={(e) => handleInputChange('walletAddress', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="org">{t('org_name')}</Label>
                  <Input
                    id="org"
                    placeholder="Your organization name"
                    value={formData.organizationName}
                    onChange={(e) => handleInputChange('organizationName', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="token">{t('target_token')}</Label>
                  <Input
                    id="token"
                    placeholder="Token address (optional)"
                    value={formData.targetToken}
                    onChange={(e) => handleInputChange('targetToken', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="note">{t('request_note')}</Label>
                  <Textarea
                    id="note"
                    placeholder="Additional information about your audit capabilities..."
                    rows={4}
                    value={formData.note}
                    onChange={(e) => handleInputChange('note', e.target.value)}
                  />
                </div>

                <div className="flex space-x-4">
                  <GlassButton
                    type="submit"
                    variant="hero"
                    className="flex-1"
                    disabled={!isFormValid || isSubmitting}
                    loading={isSubmitting}
                  >
                    {t('submit_request')}
                  </GlassButton>
                  <GlassButton
                    type="button"
                    variant="secondary"
                    onClick={() => navigate('/')}
                  >
                    {t('cancel')}
                  </GlassButton>
                </div>
              </form>
            </GlassCardContent>
          </GlassCard>

          {/* Benefits */}
          <GlassCard>
            <GlassCardHeader>
              <GlassCardTitle>Auditor Benefits</GlassCardTitle>
            </GlassCardHeader>
            <GlassCardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <h4 className="font-medium">Access Private Transactions</h4>
                    <p className="text-sm text-muted">View transaction details for compliance and audit purposes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <h4 className="font-medium">Selective Disclosure</h4>
                    <p className="text-sm text-muted">Only see what you need for your audit scope</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <h4 className="font-medium">Trusted Network</h4>
                    <p className="text-sm text-muted">Join a verified network of compliance professionals</p>
                  </div>
                </div>
              </div>
            </GlassCardContent>
          </GlassCard>
        </div>
      </div>
    </Layout>
  );
};

export default AuditorRequest;