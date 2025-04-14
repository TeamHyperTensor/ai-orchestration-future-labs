
import React from 'react';
import Layout from '@/components/Layout';
import FeatureShowcase from '@/components/capabilities/FeatureShowcase';
import InteractiveDiagrams from '@/components/capabilities/InteractiveDiagrams';

const Capabilities = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <div className="pt-32 pb-16 text-center">
          <h1 className="mb-6 gradient-text">AI Capabilities</h1>
          <p className="text-cutover-lightGray text-xl max-w-3xl mx-auto">
            Explore the cutting-edge AI technologies powering the next generation of orchestration platforms.
          </p>
        </div>
        <FeatureShowcase />
        <InteractiveDiagrams />
      </div>
    </Layout>
  );
};

export default Capabilities;
