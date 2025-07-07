import { Code, Users, Settings, Globe, Server, Database, Activity, MessageSquare, Target, Zap, Lightbulb, Heart, Crown } from 'lucide-react'

export interface SoftSkill {
  name: string
  description: string
  icon: any
}

export interface TechnicalSkills {
  frontend: string[]
  backend: string[]
  database: string[]
}

export interface Tools {
  development: string[]
  design: string[]
  testing: string[]
}

export const technicalSkills: TechnicalSkills = {
  frontend: [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Redux',
    'Vue.js',
    'Bootstrap'
  ],
  backend: [
    'Node.js',
    'Python',
    'Java',
    'C#',
    'Express.js',
    'Django',
    'Spring Boot',
    '.NET',
    'GraphQL',
    'REST APIs'
  ],
  database: [
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Redis',
    'Firebase',
    'AWS',
    'Azure',
    'Docker',
    'Kubernetes',
    'CI/CD'
  ]
}

export const softSkills: SoftSkill[] = [
  {
    name: 'Communication',
    description: 'Effective verbal and written communication skills with stakeholders, team members, and clients.',
    icon: MessageSquare
  },
  {
    name: 'Problem Solving',
    description: 'Analytical thinking and creative problem-solving abilities to tackle complex technical challenges.',
    icon: Target
  },
  {
    name: 'Leadership',
    description: 'Experience leading teams, mentoring junior developers, and driving project success.',
    icon: Crown
  },
  {
    name: 'Adaptability',
    description: 'Quick learner with ability to adapt to new technologies and changing project requirements.',
    icon: Lightbulb
  },
  {
    name: 'Team Collaboration',
    description: 'Strong team player with experience in agile methodologies and cross-functional collaboration.',
    icon: Users
  },
  {
    name: 'Attention to Detail',
    description: 'Meticulous approach to code quality, testing, and delivering polished user experiences.',
    icon: Heart
  }
]

export const tools: Tools = {
  development: [
    'VS Code',
    'Git',
    'GitHub',
    'GitLab',
    'Postman',
    'Insomnia',
    'Webpack',
    'Vite',
    'npm',
    'yarn'
  ],
  design: [
    'Figma',
    'Adobe XD',
    'Sketch',
    'Photoshop',
    'Illustrator',
    'InVision',
    'Zeplin',
    'Storybook',
    'Framer',
    'Canva'
  ],
  testing: [
    'Jest',
    'Cypress',
    'Playwright',
    'Selenium',
    'Postman',
    'JUnit',
    'Mocha',
    'Chai',
    'Testing Library',
    'Vitest'
  ]
} 