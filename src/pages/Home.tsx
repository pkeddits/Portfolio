import { ArrowRight, Code, Server, Cloud } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Section id="home" className="min-h-screen flex items-center bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 pt-20">
        <div className="w-full">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Olá, sou <span className="text-blue-500">Flipe Lima</span> Estudante de TI e <span className="text-blue-500">Desenvolvedor Web</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Sou estudante e entusiasta de tecnologia, focado em desenvolvimento web e explorando infraestrutura e cloud computing. 
               Crio projetos para aprender na prática e construir soluções simples, funcionais e bem estruturadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => scrollToSection('projects')}>
                Ver Projetos <ArrowRight className="inline ml-2" size={20} />
              </Button>
              <Button variant="outline" onClick={() => scrollToSection('contact')}>
                Entre em Contato
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-center hover:border-blue-500 transition-colors">
              <Code className="mx-auto mb-4 text-blue-500" size={40} />
              <h3 className="text-xl font-bold text-white mb-2">Desenvolvimento Web</h3>
              <p className="text-gray-400">
                Criação de sites e interfaces web utilizando HTML, CSS, JavaScript e React. 
                Foco em sites modernos, responsivos e bem estruturados.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-center hover:border-blue-500 transition-colors">
              <Server className="mx-auto mb-4 text-blue-500" size={40} />
              <h3 className="text-xl font-bold text-white mb-2">Infraestrutura</h3>
              <p className="text-gray-400">
                Estudo de fundamentos de infraestrutura, servidores Linux e redes. 
                Aprendendo como aplicações funcionam no ambiente real de servidores.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-center hover:border-blue-500 transition-colors">
              <Cloud className="mx-auto mb-4 text-blue-500" size={40} />
              <h3 className="text-xl font-bold text-white mb-2">Cloud Computing</h3>
              <p className="text-gray-400">
               Explorando serviços de cloud computing com AWS, aprendendo sobre deploy, armazenamento e arquitetura básica em nuvem.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="featured-projects" title="Projetos em Destaque" className="bg-gray-800">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button onClick={() => scrollToSection('projects')}>
            Ver Todos os Projetos
          </Button>
        </div>
      </Section>
    </>
  );
}
