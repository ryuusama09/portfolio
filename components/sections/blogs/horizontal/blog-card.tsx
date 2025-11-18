import React from 'react';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Blog } from '@/types/blog';
import { ArrowUpRightIcon, BookOpenIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { HashnodeIcon, MediumIcon } from '../platform-icons';

interface BlogCardProps extends Blog {
  className?: string;
}

const PlatformIcon = ({ platform }: { platform: 'hashnode' | 'medium' }) => {
  if (platform === 'hashnode') {
    return <HashnodeIcon className="h-5 w-5" />;
  }
  return <MediumIcon className="h-5 w-5" />;
};

function BlogCard({
  title,
  description,
  url,
  platform,
  publishedAt,
  readTime,
  tags,
  className
}: BlogCardProps) {
  return (
    <Card
      className={cn(
        'group relative flex flex-col justify-between overflow-hidden rounded-md bg-muted/40 transition-all hover:shadow-lg',
        className
      )}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        title={title}
      />
      <CardContent className="z-[2] p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <PlatformIcon platform={platform} />
            </div>
            <Badge variant="secondary" className="capitalize">
              {platform}
            </Badge>
          </div>
          {readTime && (
            <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <BookOpenIcon className="h-3 w-3" />
              {readTime}
            </span>
          )}
        </div>
        <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">
          {title}
        </h3>
        {description && (
          <p className="mb-3 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        )}
        {tags && tags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-muted px-2 py-1 text-xs text-gray-600 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex items-center justify-between p-6 pt-0">
        {publishedAt && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {publishedAt}
          </span>
        )}
        <Button variant="ghost" size="sm" className="z-20 gap-1" asChild>
          <a href={url} target="_blank" rel="noopener noreferrer">
            Read More <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default BlogCard;
