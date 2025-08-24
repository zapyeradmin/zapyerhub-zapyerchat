import { useEffect } from 'react';
import Header from '@/components/Header';
import TechBackground from '@/components/TechBackground';
import EnhancedInteractiveHeroSection from '@/components/EnhancedInteractiveHeroSection';
import AboutSection from '@/components/AboutSection';
import TimelineSection from '@/components/TimelineSection';
import EnhancedStatisticsSection from '@/components/EnhancedStatisticsSection';
import EnhancedFeaturesSection from '@/components/EnhancedFeaturesSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import PricingSection from '@/components/PricingSection';
import YouTubeShortsSection from '@/components/YouTubeShortsSection';
import FuturisticAIFAQSection from '@/components/FuturisticAIFAQSection';
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
    <div className="min-h-screen bg-background smooth-scroll relative font-sans">
      <TechBackground />
      <Header />
      <main className="relative z-10">
        <EnhancedInteractiveHeroSection />
        <AboutSection />
        <TimelineSection />
        <EnhancedStatisticsSection />
        <EnhancedFeaturesSection />
        <IntegrationsSection />
        <PricingSection />
        <YouTubeShortsSection />
        <FuturisticAIFAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
