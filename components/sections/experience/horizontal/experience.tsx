import React from 'react';

import MotionWrap from '@/components/motion-wrap';
import ExperienceCard from './experience-card';

import { experiences } from '@/components/sections/experience/config';

import Image from 'next/image';

function Experiences() {
  return (
    <MotionWrap className="mx-auto py-16 lg:w-9/12" id="experiences">
      <div className="px-4 md:px-6">
        <div className="grid gap-10 ">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
              Experience
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Here are some work experiences where challenges were turned into
              accomplishments, making things happen.
            </p>
            {/* <Image
              alt="Shreyansh"
              className="mx-auto h-auto rounded-sm object-cover lg:w-full"
              width="0"
              height="0"
              sizes="100vw"
              src={'/images/me-4.jpg'}
              title="Imagen sacada por Mariale en el curso de desarrollo web <3"
              priority={true}
            /> */}
          </div>
          <div className="grid">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                name={experience.name}
                description={experience.description}
                company={experience.company}
                url={experience.url}
                duration={experience.duration}
              />
            ))}
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Experiences;
