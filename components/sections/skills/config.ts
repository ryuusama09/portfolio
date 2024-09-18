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
    description: 'Expert ,top 5% in competitive programming.',
    Icon: CodeIcon
  },
  {
    name: 'UST Global , D3code 2023',
    description: 'winner of the hackathon , with over 15000+ participants.',
    Icon: TrophyIcon
  },
  {
    name: 'TIAA Global , T3Hacks India edition 2024',
    description: '2nd Runner up in T3Hacks India edition out of 2200+ registered particpants',
    Icon: TrophyIcon
  },
  {
    name: 'ICPC Asia-west Regionals 2022 , 2023 & 2024',
    description: 'Achieved an all india rank of 61 , 57 and 84 respectively out of 5000-8000+ teams nationally',
    Icon: SquareCodeIcon
  },
  {
    name: 'Newton School CodeRush march 2023',
    description: 'Global Rank 76 out of 36000+ registered particpants',
    Icon: BinaryIcon 
  },
  {
    name: 'Pan India Hackathons',
    description: 'Winner of 3 pan India hackathons and coding challenges : crackathon 4.0 , ignite 4.0 and semicode 2.0 with over 1000+ participants',
    Icon: LayoutIcon
  }
  ,
 
  
 
];

export { skills };
