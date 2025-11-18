import { Experience } from '@/types/experience';

const experiences: Experience[] = [
  {
    name: 'Software Engineer',
    duration: 'Jan 2025 - June 2025',
    company: 'Caarya',
    url: 'https://caarya.com/',
    description: 'Developed a 2-fold extraction layer to scrape startup data from multiple data sources. Integrated conversational intelligence with Twilio API for adaptive choice-based interviews with founders. Constructed a transformation layer to analyze data chunks and generate hidden insights by leveraging LLMs. Deployed 2 production-grade internal tools for the HR and Marketing team.'
  },
  {
    name: 'SWE Intern',
    duration: 'May 2023 - July 2023',
    company: 'Morgan Stanley',
    url: 'https://www.morganstanley.com/',
    description: 'Upgraded an augmented asynchronous client API using in-memory cache reducing the overhead by 22%. Integrated 4 comprehensive and interactive highcharts that display real-time data of agent exposure. Migrated the User-Interface (2 complex screens) with upgraded angular to a mono-repo with over 40 projects. Developed unit angular tests for multiple components of 1st screen thereby extending the test coverage to 82%.'
  },
  {
    name: 'DSA Instructor Intern',
    duration: 'Oct 2022 - Dec 2022',
    company: 'USACO Guide',
    url: 'https://usaco.guide/',
    description:
      'I was responsible to coach DSA topics like 2 pointers, graphs, DSU to over 150+ lower silver and bronze level students. I also delivered 5+ high quality problems for biweekly and annual contests.'
  },
];

export { experiences };
