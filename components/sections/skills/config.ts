import { Skill } from '@/types/skill';
import {
  CodeIcon,
  DatabaseIcon,
  LayoutIcon,
  SmartphoneIcon,
  Trophy,
  TrophyIcon,
  SquareCodeIcon,
  BinaryIcon,
} from 'lucide-react';

const skills: Skill[] = [
  {
    name: 'Codeforces',
    description: 'Expert, India top 95% percentile in competitive programming.',
    Icon: CodeIcon
  },
  {
    name: 'UST Global D3code 2023',
    description: 'Winners of India\'s largest hackathon, with over 12500+ participating teams.',
    Icon: TrophyIcon
  },
  {
    name: 'TIAA T3Hacks 2024',
    description: '2nd Runner up after competing against 2200+ registered participants',
    Icon: TrophyIcon
  },
  {
    name: 'ICPC Asia West Regionals',
    description: '3x regional finalist with all India ranks 61, 57 and 84 from 2022 - 2024',
    Icon: SquareCodeIcon
  },
  {
    name: 'Newton School CodeRush March 2023',
    description: 'Global rank 76 out of 12000+ participants',
    Icon: BinaryIcon
  },
  {
    name: 'VOIS International Finalists',
    description: 'India top 10 out of 5000+ competing teams',
    Icon: TrophyIcon
  }
];

export { skills };
