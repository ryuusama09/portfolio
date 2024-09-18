import React from 'react';
import SkillCard from './skill-card';

import Reveal from '@/components/reveal';

import { skills } from '@/components/sections/skills/config';
import MotionWrap from '@/components/motion-wrap';

import Carousel from '@/components/Carousel';

function Skills() {
  return (
    <MotionWrap className="p mx-auto py-16 lg:w-9/12" id="skills">
      <div className="space-y-4 px-4 md:px-6 lg:space-y-10">
        <div className="flex w-full flex-col justify-center  lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col lg:items-start">
            <Reveal>
              <h2 className="text-4xl font-bold leading-tight sm:text-5xl md:text-5xl lg:text-6xl">
                Skills & Achievements
              </h2>
            </Reveal>
          </div>
          <p className="mt-4 hidden text-gray-500 dark:text-gray-400 lg:mt-0 lg:block lg:w-[35%]">
            Here are some skills where knowledge has been turned into expertise,
            making things happen.
          </p>
        </div>
        <Carousel />
        <div className="mt-6 space-y-4">
          {skills.map((skill, index) => (
            // eslint-disable-next-line react/jsx-key
            <SkillCard
              key={index}
              index={index + 1}
              name={skill.name}
              description={skill.description}
              Icon={skill.Icon}
            />
          ))}
        </div>
      </div>
    </MotionWrap>
  );
}

export default Skills;
