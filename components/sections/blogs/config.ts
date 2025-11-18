import { Blog } from '@/types/blog';

const blogs: Blog[] = [
  {
    title: `Ryuu's Dev Zone`,
    description:
      'A blog series here I share my thoughts on technology and programming.',
    url: 'https://ryuusama.hashnode.dev',
    platform: 'hashnode',
    publishedAt: 'Since May 2023',
    readTime: '~5 min read',
    tags: ['Technology', 'Programming']
  },
  {
    title: 'Medium Stories',
    description: 'Stories on algorithms , finance and life in general ',
    url: 'https://medium.com/@shahh8138',
    platform: 'medium',
    publishedAt: 'Since Jan 2024',
    readTime: '~4 min read',
    tags: ['Algorithms', 'Finance', 'Jainism']
  }
  // Add more featured blogs here
];

export { blogs };
