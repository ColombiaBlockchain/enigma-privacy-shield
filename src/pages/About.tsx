import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { GlassButton } from '@/components/ui/glass-button';
import { GlassCard, GlassCardContent, GlassCardDescription, GlassCardHeader, GlassCardTitle } from '@/components/ui/glass-card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { Play, Linkedin, Github, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const { language } = useApp();
  const { t } = useTranslation(language);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const team = [
    {
      name: 'María González',
      role: 'CEO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    {
      name: 'Carlos Rivera',
      role: 'CTO & Co-Founder', 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    {
      name: 'Ana Santos',
      role: 'Head of Privacy',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    {
      name: 'Diego López',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  ];

  const roadmapItems = [
    {
      phase: 'MVP',
      title: 'Private Token Creation',
      description: 'Launch eERC20 token standard with basic privacy features',
      status: 'completed',
      date: 'Q1 2024'
    },
    {
      phase: 'Business',
      title: 'Auditor Network',
      description: 'Decentralized auditor assignment and compliance tools',
      status: 'in-progress',
      date: 'Q2 2024'
    },
    {
      phase: 'Enterprise',
      title: 'Full Integration Suite',
      description: 'APIs, webhooks, and enterprise-grade compliance',
      status: 'planned',
      date: 'Q3 2024'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            {t('about_title')}
          </h1>
          <p className="text-xl text-muted">
            {t('about_subtitle')}
          </p>
          <GlassButton 
            variant="hero" 
            size="lg"
            iconLeft={<Play className="h-4 w-4" />}
            onClick={() => setVideoModalOpen(true)}
          >
            {t('cta_watch_video')}
          </GlassButton>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('team_title')}</h2>
          <p className="text-muted text-lg">Meet the team building the future of private finance</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <GlassCard key={index} className="text-center group">
              <GlassCardHeader>
                <div className="relative mx-auto w-24 h-24 mb-4">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <GlassCardTitle className="text-lg">{member.name}</GlassCardTitle>
                <GlassCardDescription>{member.role}</GlassCardDescription>
              </GlassCardHeader>
              <GlassCardContent>
                <div className="flex justify-center space-x-3">
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary transition-smooth"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary transition-smooth"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </GlassCardContent>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('roadmap_title')}</h2>
          <p className="text-muted text-lg">Our journey to revolutionize financial privacy</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className={`w-4 h-4 rounded-full ${
                    item.status === 'completed' ? 'bg-success' : 
                    item.status === 'in-progress' ? 'bg-warning' : 'bg-muted'
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-sm font-medium text-primary">{item.phase}</span>
                    <span className="text-sm text-muted flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={videoModalOpen} onOpenChange={setVideoModalOpen}>
        <DialogContent className="sm:max-w-4xl glass backdrop-blur-glass border-glass-border max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>About Enigma</DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Play className="h-16 w-16 text-muted mx-auto mb-4" />
              <p className="text-muted">About video placeholder</p>
              <p className="text-sm text-muted">Integration with YouTube/Vimeo coming soon</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default About;