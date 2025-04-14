
import React from 'react';
import Layout from '@/components/Layout';
import BlogOverview from '@/components/blog/BlogOverview';

const Blog = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <div className="pt-32 pb-16 text-center">
          <h1 className="mb-6 gradient-text">Blog</h1>
          <p className="text-cutover-lightGray text-xl max-w-3xl mx-auto">
            Discover insights, tutorials, and thought leadership on AI orchestration and automation.
          </p>
        </div>
        <BlogOverview />
      </div>
    </Layout>
  );
};

export default Blog;
