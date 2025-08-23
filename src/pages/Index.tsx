import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatisticsSection from '@/components/StatisticsSection';
import ConvertSection from '@/components/ConvertSection';
import AutomationSection from '@/components/AutomationSection';
import FeaturesSection from '@/components/FeaturesSection';
import ComparisonSection from '@/components/ComparisonSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
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
        <HeroSection />
        <StatisticsSection />
        <ConvertSection />
        <AutomationSection />
        <FeaturesSection />
        <ComparisonSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
