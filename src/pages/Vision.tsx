
import React from 'react';
import Layout from '@/components/Layout';
import VisionStatement from '@/components/vision/VisionStatement';
import FutureScenarios from '@/components/vision/FutureScenarios';

const Vision = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <div className="pt-32 pb-16 text-center">
          <h1 className="mb-6 gradient-text">Our Vision</h1>
          <p className="text-cutover-lightGray text-xl max-w-3xl mx-auto">
            Explore our vision for the future of AI-powered orchestration and the transformative impact it will have.
          </p>
        </div>
        <VisionStatement />
        <FutureScenarios />
      </div>
    </Layout>
  );
};

export default Vision;
