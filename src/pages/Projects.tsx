import { useState } from 'react';
import { Code, Server, Rocket } from 'lucide-react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { getCategorizedProjects } from '../data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'infrastructure' | 'inDevelopment'>('all');
  const categorizedProjects = getCategorizedProjects();

  const getFilteredProjects = () => {
    if (activeCategory === 'all') {
      return [...categorizedProjects.web, ...categorizedProjects.infrastructure, ...categorizedProjects.inDevelopment];
    }
    return categorizedProjects[activeCategory];
  };

  const filteredProjects = getFilteredProjects();

  const categories = [
    { id: 'all' as const, name: 'Todos', icon: Code },
    { id: 'web' as const, name: 'Web/sistemas', icon: Code },
    { id: 'infrastructure' as const, name: 'Infra/cloud', icon: Server },
    { id: 'inDevelopment' as const, name: 'Em Desenvolvimento', icon: Rocket },
  ];

  return (
    <Section id="projects" title="Meus Projetos" className="bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Aqui estão alguns dos projetos que desenvolvi durante minha jornada de aprendizado.
          Cada um representa um desafio superado e novos conhecimentos adquiridos.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Icon size={20} />
                {category.name}
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Nenhum projeto encontrado nesta categoria.</p>
          </div>
        )}
      </div>
    </Section>
  );
}
