import React from 'react';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';

import Link from 'next/link';
import Image from 'next/image';
import { CodeIcon } from 'lucide-react';

import { Experience } from '@/types/experience';

import { cn } from '@/lib/utils';

interface ExperienceCardProps extends Experience {
  className?: string;
}

function ExperienceCard({
  company,
  name,
  duration,
  description,
  url,
  className
}: ExperienceCardProps) {
  return (
    <Card className={cn('border-none bg-transparent', className)}>
      <CardContent className="p-1">
        <div className="flex items-baseline justify-between">
          <Link href={url} className="text-xl font-bold underline">{company}</Link>
          <span className="font-base text-sm">{duration}</span>
        </div>
        <h4 className="mt-2 text-lg font-medium uppercase">{name}</h4>
        <p className="mt-2">{description}</p>
        <hr className="my-6 border-t border-border" />
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
