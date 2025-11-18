import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import { blogs } from '../config';
import BlogCard from './blog-card';
import { Button } from '@/components/ui/button';
import { ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';
import { HashnodeIcon, MediumIcon } from '../platform-icons';

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
        {/* <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="https://ryuusama.hashnode.dev" target="_blank">
              <HashnodeIcon className="h-5 w-5" />
              View Hashnode Blog <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="https://medium.com/@shahh8138" target="_blank">
              <MediumIcon className="h-5 w-5" />
              View Medium Stories <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          </Button>
        </div> */}
      </div>
    </MotionWrap>
  );
}

export default Blogs;
