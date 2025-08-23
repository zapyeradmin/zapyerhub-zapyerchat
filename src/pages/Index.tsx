import { useEffect } from 'react';
import Header from '@/components/Header';
import InteractiveHeroSection from '@/components/InteractiveHeroSection';
import AboutSection from '@/components/AboutSection';
import TimelineSection from '@/components/TimelineSection';
import EnhancedStatisticsSection from '@/components/EnhancedStatisticsSection';
import EnhancedFeaturesSection from '@/components/EnhancedFeaturesSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import PricingSection from '@/components/PricingSection';
import YouTubeShortsSection from '@/components/YouTubeShortsSection';
import AIFAQSection from '@/components/AIFAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add scroll reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          
          // Add appropriate animation class based on element's data attribute
          if (element.classList.contains('fade-in-up')) {
            element.style.animationPlayState = 'running';
          } else if (element.classList.contains('fade-in-left')) {
            element.style.animationPlayState = 'running';
          } else if (element.classList.contains('fade-in-right')) {
            element.style.animationPlayState = 'running';
          } else if (element.classList.contains('scale-in')) {
            element.style.animationPlayState = 'running';
          }
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
    animatedElements.forEach((element) => observer.observe(element));

    return () => {
      animatedElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background smooth-scroll">
      <Header />
      <main>
        <InteractiveHeroSection />
        <AboutSection />
        <TimelineSection />
        <EnhancedStatisticsSection />
        <EnhancedFeaturesSection />
        <IntegrationsSection />
        <PricingSection />
        <YouTubeShortsSection />
        <AIFAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
