export interface Blog {
  title: string;
  description?: string;
  url: string;
  platform: 'medium';
  publishedAt?: string;
  readTime?: string;
  tags?: string[];
}
