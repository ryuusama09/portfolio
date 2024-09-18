import React from 'react';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';

import Link from 'next/link';
import Image from 'next/image';

import { Project } from '@/types/project';
import { GithubIcon, GlobeIcon, InfoIcon } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';
import { projects } from '../config';

interface ProjectCardProps extends Project {
  className?: string;
}

function ProjectCard({
  name,
  description,
  thumbnail,
  slug,
  liveurl,
  githuburl,
  className
}: ProjectCardProps) {
  return (
    <Card
      className={cn(
        'group relative flex flex-col justify-between overflow-hidden rounded-md bg-muted/40',
        className
      )}
    >
      <CardContent className="z-[2] inline-block w-full overflow-hidden p-0">
        <Image
          src={thumbnail || '/placeholder.svg'}
          alt={`Image of ${name}`}
          width={0}
          height={0}
          sizes="50vw"
          className="h-60 max-h-96 w-full object-contain transition-transform duration-300 hover:scale-110"
        />
      </CardContent>
      <CardFooter className="grid grid-cols-1 items-center gap-4 p-4 md:p-6 lg:grid-cols-1">
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {description || ''}
          </p>
        </div>
        <div className="flex items-center justify-end">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="z-[2] rounded-full border bg-muted hover:bg-foreground/10"
                  asChild
                >
                  {githuburl && (
                    <a href={githuburl} target="_blank" title={slug}>
                      <GithubIcon />
                    </a>
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>More Details</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardFooter>
      <a
        href={liveurl}
        target="_blank"
        className="z-1 absolute inset-0 block"
        title="Link"
      />
    </Card>
  );
}

export default ProjectCard;
