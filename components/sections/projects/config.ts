import { Project } from '@/types/project';

const projects: Project[] = [
  {
    name: 'Sunpy (Open Source)',
    slug: 'Sunpy',
    description:
      'The community-developed, free and open-source solar data analysis environment for Python. Refactored the sunpy attributes and the world coordinate system to updated version in PR-6732. Overhauled the HTTP error handling in the scraper client along with re-query limiter and extending the pytest coverage to 72% in PR-7541.',
    thumbnail: '/images/projects/project1/sunpy.webp',
    githuburl: 'https://github.com/sunpy/sunpy/pull/7541'
  },
  {
    name: 'Encache (NPM Package - 600+ downloads)',
    slug: 'Encache',
    description:
      'A lightweight, In-memory Async Caching Library for your Nodejs Server. Developed a GET method with 0.01 ms average latency, optimized for high-frequency requests. Integrated 6 eviction policies with seamless dynamic swapping, ensuring no data loss. Implemented LZ4 compression, reducing data chunk size by up to 50%.',
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
    name: 'SoulSupport.ai (Won UST D3code)',
    slug: 'ss.ai',
    description:
      'AI based virtual behavioral companion to support a mentally stressed and disturbed individual with text and audio support 24/7. Designed an AI bot utilizing a fine-tuned Falcon-7B model with QLora, enabled with chained conversational responses. Incorporated 6 business features like doctor search, automated user report generation and personalized diet plan recommendations. Built real-time stress and anxiety detection using dual sentiment analysis models processing audio and video data.',
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
