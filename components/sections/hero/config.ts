import { Hero } from '@/types/hero';
import { metadata as meta } from '@/app/config';

const hero: Hero = {
  name: meta.author.name,
  firstName: meta.author.firstName,
  lastName: meta.author.lastName,
  label: meta.author.label,
  description: 'I am passionate about building scalable applications. I am interested in SDE and Quant roles where I can work on challenging projects and learn new technologies.',
};

export { hero };
