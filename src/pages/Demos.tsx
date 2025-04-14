
import React from 'react';
import Layout from '@/components/Layout';
import DemoHub from '@/components/demos/DemoHub';

const Demos = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <div className="pt-32 pb-16 text-center">
          <h1 className="mb-6 gradient-text">Interactive Demos</h1>
          <p className="text-cutover-lightGray text-xl max-w-3xl mx-auto">
            Get hands-on experience with our AI-driven orchestration platform through these interactive demos.
          </p>
        </div>
        <DemoHub />
      </div>
    </Layout>
  );
};

export default Demos;
