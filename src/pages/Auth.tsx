import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { GlassButton } from '@/components/ui/glass-button';
import { GlassCard, GlassCardContent, GlassCardDescription, GlassCardHeader, GlassCardTitle } from '@/components/ui/glass-card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { toast } from '@/hooks/use-toast';
import { Building, User, ArrowLeft } from 'lucide-react';

const Auth: React.FC = () => {
  const { language } = useApp();
  const { t } = useTranslation(language);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orgType: '',
  });

  const orgTypes = [
    { value: 'fintech', label: 'Fintech' },
    { value: 'defi', label: 'DeFi Protocol' },
    { value: 'enterprise', label: 'Enterprise' },
    { value: 'startup', label: 'Startup' },
    { value: 'other', label: 'Other' },
  ];

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Registration successful!",
      description: "Welcome to Enigma. Let's get you started.",
      variant: "default"
    });

    setLoading(false);
    navigate('/onboarding');
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Login successful!",
      description: "Welcome back to Enigma.",
      variant: "default"
    });

    setLoading(false);
    navigate('/dashboard');
  };

  return (
    <Layout showFooter={false}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          {/* Back button */}
          <Link to="/" className="inline-flex items-center space-x-2 text-muted hover:text-foreground mb-8 transition-smooth">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to home</span>
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">Welcome to Enigma</h1>
            <p className="text-muted">Privacy-first token management for Avalanche</p>
          </div>

          <GlassCard>
            <GlassCardContent className="p-6">
              <Tabs defaultValue="register" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="register">Register</TabsTrigger>
                  <TabsTrigger value="login">Login</TabsTrigger>
                </TabsList>

                <TabsContent value="register">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="glass border-glass-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="glass border-glass-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="org-type">Organization Type</Label>
                      <Select value={formData.orgType} onValueChange={(value) => setFormData({ ...formData, orgType: value })}>
                        <SelectTrigger className="glass border-glass-border">
                          <SelectValue placeholder="Select organization type" />
                        </SelectTrigger>
                        <SelectContent className="glass backdrop-blur-glass border-glass-border">
                          {orgTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <GlassButton type="submit" variant="primary" size="lg" className="w-full" loading={loading}>
                      Create Account
                    </GlassButton>
                  </form>
                </TabsContent>

                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email</Label>
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="glass border-glass-border"
                      />
                    </div>

                    <GlassButton type="submit" variant="primary" size="lg" className="w-full" loading={loading}>
                      Sign In
                    </GlassButton>
                  </form>
                </TabsContent>
              </Tabs>

              {/* Trust notice */}
              <div className="mt-6 p-4 glass rounded-lg text-center border-glass-border">
                <p className="text-sm text-muted">
                  🔒 Your account is for UI preferences only. All crypto operations happen in your connected wallet.
                </p>
              </div>
            </GlassCardContent>
          </GlassCard>
        </div>
      </div>
    </Layout>
  );
};

export default Auth;