
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import DemoPreview from '@/components/DemoPreview';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesGrid />
      <DemoPreview />
    </Layout>
  );
};

export default Index;
