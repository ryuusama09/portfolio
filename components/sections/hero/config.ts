import { Hero } from '@/types/hero';
import { metadata as meta } from '@/app/config';

const hero: Hero = {
  name: meta.author.name,
  firstName: meta.author.firstName,
  lastName: meta.author.lastName,
  label: meta.author.label,
  description:
    'I am a quant developer at Intrade SDC and CFA Level 3 candidate, passionate about building scalable applications and quantitative systems.'
};

export { hero };
