# Blogs Section Setup Guide

## Overview
A new Blogs section has been added to your portfolio website! It displays featured articles from your Hashnode and Medium blogs.

## How to Add Your Blog Posts

Edit the file: `components/sections/blogs/config.ts`

### Example Configuration

```typescript
import { Blog } from '@/types/blog';

const blogs: Blog[] = [
  {
    title: 'Understanding React Server Components',
    description: 'A deep dive into React Server Components and how they work',
    url: 'https://ryuusama.hashnode.dev/understanding-react-server-components',
    platform: 'hashnode',
    publishedAt: 'Nov 2024',
    readTime: '8 min read',
    tags: ['React', 'Next.js', 'Web Development']
  },
  {
    title: 'Building Scalable APIs with Node.js',
    description: 'Best practices for creating production-ready APIs',
    url: 'https://medium.com/@shahh8138/building-scalable-apis',
    platform: 'medium',
    publishedAt: 'Oct 2024',
    readTime: '10 min read',
    tags: ['Node.js', 'Backend', 'API']
  },
];

export { blogs };
```

## Field Descriptions

- **title** (required): The title of your blog post
- **description** (optional): A brief summary or excerpt
- **url** (required): The full URL to the blog post
- **platform** (required): Either 'hashnode' or 'medium'
- **publishedAt** (optional): Publication date (e.g., "Nov 2024")
- **readTime** (optional): Estimated reading time (e.g., "5 min read")
- **tags** (optional): Array of up to 3 tags that will be displayed

## Features

✅ Responsive design matching your portfolio theme
✅ Separate layouts for mobile and desktop
✅ Platform badges (Hashnode/Medium)
✅ Reading time indicators
✅ Tag display
✅ Hover effects and animations
✅ Direct links to "View All" on Hashnode and Medium
✅ Added to navigation menu

## Section Order

The Blogs section appears after Skills and before Contact:
- Hero → About → Experience → Projects → Skills → **Blogs** → Contact → Footer

## Customization Tips

1. **Featured Posts**: Add 3-6 of your best or most recent posts
2. **Keep Updated**: Regularly update with new content
3. **Tags**: Use relevant, consistent tags across posts
4. **Descriptions**: Keep them concise (1-2 sentences)
5. **Mix Platforms**: Show variety by featuring posts from both Hashnode and Medium

## Where Files Are Located

- Type definition: `types/blog.ts`
- Configuration: `components/sections/blogs/config.ts`
- Horizontal layout: `components/sections/blogs/horizontal/`
- Vertical layout: `components/sections/blogs/vertical/`
- Main component: `components/sections/blogs/index.tsx`

## Current Status

The section is fully integrated but uses placeholder content.
**Action Required**: Update `config.ts` with your actual blog posts!
