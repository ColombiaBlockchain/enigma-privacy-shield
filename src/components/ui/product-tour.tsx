import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { GlassButton } from '@/components/ui/glass-button';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { Play, X, ArrowLeft, ArrowRight } from 'lucide-react';

interface TourStep {
  title: string;
  description: string;
  element?: string;
}

interface ProductTourProps {
  tourId: 'dashboard' | 'create' | 'auditor' | 'transfer';
  steps: TourStep[];
  onComplete?: () => void;
}

export const ProductTour: React.FC<ProductTourProps> = ({ tourId, steps, onComplete }) => {
  const { language, tourActive, setTourActive } = useApp();
  const { t } = useTranslation(language);
  const [currentStep, setCurrentStep] = useState(0);
  const [showTourPrompt, setShowTourPrompt] = useState(false);

  useEffect(() => {
    const hasSeenTour = localStorage.getItem(`tour-${tourId}-completed`);
    if (!hasSeenTour && !tourActive) {
      setShowTourPrompt(true);
    }
  }, [tourId, tourActive]);

  const startTour = () => {
    setShowTourPrompt(false);
    setTourActive(true);
    setCurrentStep(0);
  };

  const skipTour = () => {
    setShowTourPrompt(false);
    localStorage.setItem(`tour-${tourId}-completed`, 'true');
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      finishTour();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const finishTour = () => {
    setTourActive(false);
    setCurrentStep(0);
    localStorage.setItem(`tour-${tourId}-completed`, 'true');
    onComplete?.();
  };

  const currentStepData = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;

  return (
    <>
      {/* Tour Prompt */}
      <Dialog open={showTourPrompt} onOpenChange={setShowTourPrompt}>
        <DialogContent className="sm:max-w-md glass backdrop-blur-glass border-glass-border">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <Play className="h-5 w-5 text-primary" />
              <span>{t('tour_start')}</span>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <p className="text-sm text-muted">
              Would you like to take a quick tour to learn how to use this feature?
            </p>
            
            <div className="flex space-x-3">
              <GlassButton variant="hero" onClick={startTour}>
                {t('tour_start')}
              </GlassButton>
              <GlassButton variant="secondary" onClick={skipTour}>
                {t('tour_skip')}
              </GlassButton>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Tour Steps */}
      <Dialog open={tourActive} onOpenChange={() => setTourActive(false)}>
        <DialogContent className="sm:max-w-lg glass backdrop-blur-glass border-glass-border">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle>
                Step {currentStep + 1} of {steps.length}
              </DialogTitle>
              <GlassButton 
                variant="ghost" 
                size="sm"
                onClick={finishTour}
              >
                <X className="h-4 w-4" />
              </GlassButton>
            </div>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">{currentStepData?.title}</h3>
              <p className="text-muted">{currentStepData?.description}</p>
            </div>
            
            <div className="flex justify-between">
              <GlassButton 
                variant="secondary" 
                onClick={prevStep}
                disabled={currentStep === 0}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t('tour_previous')}
              </GlassButton>
              
              <GlassButton 
                variant="hero" 
                onClick={nextStep}
              >
                {isLastStep ? t('tour_finish') : t('tour_next')}
                {!isLastStep && <ArrowRight className="h-4 w-4 ml-2" />}
              </GlassButton>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};