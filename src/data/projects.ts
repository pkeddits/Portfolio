export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: 'web' | 'infrastructure' | 'inDevelopment';
  liveUrl?: string;
  githubUrl?: string;
  status?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Portfólio Pessoal',
    description: 'Site de portfólio desenvolvido para apresentar meus projetos e habilidades. Primeiro projeto usando React e Tailwind CSS.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    category: 'web',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Landing Page Responsiva',
    description: 'Página de apresentação simples para um negócio local. Foco em design responsivo e boas práticas de HTML/CSS.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'web',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Calculadora Web',
    description: 'Calculadora simples desenvolvida para praticar JavaScript básico e manipulação do DOM.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'web',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Ambiente de Teste AWS',
    description: 'Configuração básica de um site estático na AWS usando S3 e CloudFront. Primeiro contato com serviços de cloud.',
    technologies: ['AWS S3', 'CloudFront', 'HTML'],
    category: 'infrastructure',
  },
  {
    id: 5,
    title: 'Servidor Linux Local',
    description: 'Configuração de servidor Linux local para testes e aprendizado. Instalação de Apache e configuração básica de firewall.',
    technologies: ['Linux', 'Apache', 'UFW'],
    category: 'infrastructure',
  },
  {
    id: 6,
    title: 'Backup Automatizado',
    description: 'Script simples em Bash para automatizar backups de arquivos importantes usando cron.',
    technologies: ['Bash', 'Linux', 'Cron'],
    category: 'infrastructure',
    githubUrl: '#',
  },
  {
    id: 7,
    title: 'Lista de Tarefas',
    description: 'Aplicativo de lista de tarefas para praticar React e gerenciamento de estado. Ainda em desenvolvimento.',
    technologies: ['React', 'TypeScript', 'LocalStorage'],
    category: 'inDevelopment',
    status: 'Em desenvolvimento',
  },
  {
    id: 8,
    title: 'Blog Pessoal',
    description: 'Blog simples para documentar minha jornada de aprendizado em tecnologia. Explorando conceitos de backend.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    category: 'inDevelopment',
    status: 'Em desenvolvimento',
  },
];

export const getCategorizedProjects = () => {
  return {
    web: projects.filter((p) => p.category === 'web'),
    infrastructure: projects.filter((p) => p.category === 'infrastructure'),
    inDevelopment: projects.filter((p) => p.category === 'inDevelopment'),
  };
};
