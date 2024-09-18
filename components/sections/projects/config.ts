import { Project } from '@/types/project';

const projects: Project[] = [
  {
    name: 'Sunpy',
    slug: 'Sunpy',
    description:
      'An opensource library for solar physics data analysis in Python. In PR #7541, I made the http scraper client more robust , implemented a retry-limiter and added new unit tests to support the features of the client.',
    thumbnail: '/images/projects/project1/sunpy.webp',
    githuburl: 'https://github.com/sunpy/sunpy/pull/7541'
  },
  {
    name: 'Encache',
    slug: 'Encache',
    description:
      'An open source lightweight caching library for your nodejs server. It supports multiple eviction policies that can be configured dynamically. It also supports data compression for higher memory effciency and provides user centric metrics',
    thumbnail: '/images/projects/project2/encache_logo.png',
    liveurl: 'https://npmjs.com/package/encache',  
    githuburl: 'https://github.com/ryuusama09/encache'
  },
  {
    name: 'Imgress',
    slug: 'Imgress',
    description:
      'A stop solution to create, manage and deploy and automate the process of creating your image search engine instances powered by highly accurate vector search databases and img2-vec neural networks layered above resnet50. It comes with highly efficient microservices architecture with serverless computing',
    thumbnail: '/images/projects/project3/imgress.jpeg',
    liveurl: 'https://img-ress.netlify.app/',
    githuburl: 'https://github.com/ryuusama09/imgress'
  },
  {
    name: 'Remote Code Execution (RCE) Engine',
    slug: 'RCE',
    description:
      'A remote code execution engine built with NodeJs , supported by docker which is a server-worker-microservice architecture based code execution engine. It performs code virtualization , parellel code execution along with code isolation by code containerization.',
    thumbnail: '/images/projects/project4/rce.jpeg',
    githuburl: 'https://github.com/ryuusama09/remote-code-execution-engine'
  },
  {
    name: 'SoulSupport.ai (winner of ust d3code 2023)',
    slug: 'ss.ai',
    description:
      'A one stop destination for your overall mental health support. Powered by a conversational AI based on fintetuned falcon 7B on mental health dataset. It provides Real time smart doctor recommendation , Diet plan generation , User Report generation , stress detection prompts and many other features which makes it a futuristic application',
    thumbnail: '/images/projects/project5/ss-1.jpeg',
    githuburl: 'https://github.com/ryuusama09/SoulSupport.ai'
  },
  {
    name: 'Trendsetters',
    slug: 'Trendsetters',
    description:
      'A webiste that scrapes the best ongoing trends from various social media platforms and provide the best trending products to users available on flipkart. Also supports reverse image search engine which allows the user to search based on an image',
    thumbnail: '/images/projects/project6/trendsetters.png',
    githuburl: 'https://github.com/ryuusama09/trendsetters'
  }
];

export { projects };
