export interface Blog {
  title: string;
  description?: string;
  url: string;
  platform: 'hashnode' | 'medium';
  publishedAt?: string;
  readTime?: string;
  tags?: string[];
}
