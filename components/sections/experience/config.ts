import { Experience } from '@/types/experience';

const experiences: Experience[] = [
  {
    name: 'SWE Intern',
    duration: 'May 2024 - July 2024',
    company: 'Morgan Stanley',
    url: 'https://truminds.com/',
    description: 'I worked on upgrading a payments system by migrating a legacy client-facing application to a modern Angular framework, replacing its sub-components, and shifting the architecture to a monorepo for improved scalability and maintainability. Additionally, I enhanced the performance of an asynchronous client API by implementing in-memory caching, which led to a 22% reduction in API overhead'
  },
  {
    name: 'DSA Instructor Intern',
    duration: 'Oct 2022 - Dec 2022',
    company: 'USACO Guide',
    url: 'https://datsolsolutions.com',
    description:
      'I was responsible to coach DSA topics like 2 pointers , graphs , DSU to over 150+ lower silver and bronze level students. I also delivered 5+ high quality problems for biweekly and annual contests.'
  },
];

export { experiences };
