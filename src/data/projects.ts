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
    technologies: ['React', 'JavaScript', 'Supabase', 'css'],
    category: 'web',
    liveUrl: 'https://lucks-studio.vercel.app',
    githubUrl: 'https://github.com/pkeddits/LUCKS-STUDIO',
  },
  {
    id: 2,
    title: 'Website Institucional - Consultoria Empresarial',
    description: 'Projeto desenvolvido durante a faculdade com o objetivo de criar um site institucional para uma empresa de consultoria, O foco do projeto foi estruturar páginas institucionais, apresentar serviços e desenvolver uma interface responsiva, Deploy de site estático utilizando AWS S3',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'web',
    liveUrl: 'http://consultoriawebsite.s3-website.us-east-2.amazonaws.com',
    githubUrl: 'https://github.com/pkeddits/SiteConsultoriaADS',
  },
  {
    id: 3,
    title: 'Website Institucional - Agência de Marketing',
    description: 'Website institucional desenvolvido para uma agência de marketing digital, com foco em apresentar serviços portfólio e informações da empresa de forma clara e profissional.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'web',
    liveUrl: 'https://strikemediacompany.vercel.app',
    githubUrl: 'https://github.com/pkeddits/strikemediacompany',
  },
  {
    id: 4,
    title: 'Deploy de Website na AWS',
    description: 'Projeto de deploy de website utilizando serviços da AWS para hospedagem de aplicações web estáticas. O objetivo foi aprender conceitos básicos de cloud computing, armazenamento e distribuição de conteúdo',
    technologies: ['AWS S3', 'CloudFront', 'HTML'],
    category: 'infrastructure',
    liveUrl: 'https://github.com/pkeddits/Portfolio',
    githubUrl: 'https://github.com/pkeddits/Portfolio',
  },
  {
    id: 5,
    title: 'Configuração de Servidor Web Linux',
    description: 'Projeto de configuração de servidor web utilizando Linux. Inclui instalação e configuração de servidor web para hospedar aplicações web.',
    technologies: ['Linux', 'Nginx', 'SSH'],
    category: 'inDevelopment',
    status: 'Em desenvolvimento',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'Monitoramento de Servidor Linux',
    description: 'Projeto de monitoramento de recursos de um servidor Linux, acompanhando uso de CPU, memória e processos ativos. O objetivo é aprender conceitos básicos de monitoramento e administração de sistemas.',
    technologies: ['Bash', 'Linux', 'ferramentas de monitoramento'],
    category: 'inDevelopment',
    status: 'Em desenvolvimento',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 7,
    title: 'Portfólio de Desenvolvedor',
    description: 'Website de portfólio desenvolvido para apresentar meus projetos, habilidades e evolução na área de tecnologia, vou estar sempre o atualizando então o deixarei aqui como em andamento, O site reúne projetos de desenvolvimento web, estudos em infraestrutura e cloud computing.',
    technologies: ['React', 'TypeScript', 'LocalStorage'],
    category: 'inDevelopment',
    status: 'Em desenvolvimento',
    liveUrl: 'https://github.com/pkeddits/Portfolio',
    githubUrl: 'https://github.com/pkeddits/Portfolio',
  },
  {
    id: 8,
    title: 'Pipeline CI/CD com GitHub Actions',
    description: 'Implementação de pipeline de integração e deploy contínuo para aplicações web. O objetivo é automatizar testes e deploy utilizando ferramentas de integração contínua.',
    technologies: ['github actions', 'git', 'Node.js'],
    category: 'inDevelopment',
    status: 'Em desenvolvimento',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 9,
    title: 'Scanner Básico de Portas',
    description: 'Projeto simples de análise de portas abertas em um servidor para estudar conceitos básicos de segurança e redes.',
    technologies: ['python', 'sockets', 'linux'],
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
