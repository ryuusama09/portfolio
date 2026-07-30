import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import { blogs } from '../config';
import BlogCard from './blog-card';

function Blogs() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="blogs">
      <div className="px-4 md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Blogs & Articles
          </h2>
          <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Trying to give back to the community for the greater cause .
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </MotionWrap>
  );
}

export default Blogs;
