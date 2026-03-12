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
    title: 'Sistema de Agendamento - Barbearia',
    description: 'Website desenvolvido para uma barbearia com foco em presença online e agendamento de clientes, O projeto inclui interface moderna e integração com backend utilizando Supabase para gerenciamento de dados.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    category: 'web',
    liveUrl: 'https://lucks-studio.vercel.app',
    githubUrl: 'https://github.com/pkeddits/LUCKS-STUDIO',
  },
  {
    id: 2,
    title: 'Website Institucional - Consultoria Empresarial',
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
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Ambiente de Teste AWS',
    description: 'Configuração básica de um site estático na AWS usando S3 e CloudFront. Primeiro contato com serviços de cloud.',
    technologies: ['AWS S3', 'CloudFront', 'HTML'],
    category: 'infrastructure',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'Servidor Linux Local',
    description: 'Configuração de servidor Linux local para testes e aprendizado. Instalação de Apache e configuração básica de firewall.',
    technologies: ['Linux', 'Apache', 'UFW'],
    category: 'infrastructure',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'Backup Automatizado',
    description: 'Script simples em Bash para automatizar backups de arquivos importantes usando cron.',
    technologies: ['Bash', 'Linux', 'Cron'],
    category: 'infrastructure',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 7,
    title: 'Lista de Tarefas',
    description: 'Aplicativo de lista de tarefas para praticar React e gerenciamento de estado. Ainda em desenvolvimento.',
    technologies: ['React', 'TypeScript', 'LocalStorage'],
    category: 'inDevelopment',
    status: 'Em desenvolvimento',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 8,
    title: 'Blog Pessoal',
    description: 'Blog simples para documentar minha jornada de aprendizado em tecnologia. Explorando conceitos de backend.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    category: 'inDevelopment',
    status: 'Em desenvolvimento',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 9,
    title: 'Sistema de Gestão',
    description: 'Aplicação web para gerenciar produtos e estoque. Explorando banco de dados e autenticação.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    category: 'inDevelopment',
    status: 'Projeto futuro',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 10,
    title: 'Infraestrutura Docker',
    description: 'Configuração de ambiente de desenvolvimento usando Docker e Docker Compose para múltiplos serviços.',
    technologies: ['Docker', 'Docker Compose', 'Linux', 'Nginx'],
    category: 'inDevelopment',
    status: 'Projeto futuro',
    liveUrl: '#',
    githubUrl: '#',
  },
];

export const getCategorizedProjects = () => {
  return {
    web: projects.filter((p) => p.category === 'web'),
    infrastructure: projects.filter((p) => p.category === 'infrastructure'),
    inDevelopment: projects.filter((p) => p.category === 'inDevelopment'),
  };
};
