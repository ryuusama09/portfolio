'use client';

import { useMediaQuery } from '@/hooks/use-media-query';
import HorizontalBlogs from './horizontal/blogs';
import VerticalBlogs from './vertical/blogs';

function Blogs() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return isDesktop ? <HorizontalBlogs /> : <VerticalBlogs />;
}

export default Blogs;
