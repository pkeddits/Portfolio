import { BookOpen, Target, Wrench } from 'lucide-react';
import Section from '../components/Section';

export default function About() {
  const technologies = [
    'HTML & CSS',
    'JavaScript',
    'React',
    'TypeScript',
    'Git e Github',
    'supabase',
    'Linux',
    'AWS (aprendendo)',
    'Node.js (básico)',
  ];

  return (
    <Section id="about" title="Sobre Mim" className="bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="text-blue-500" size={28} />
            <h3 className="text-2xl font-bold text-white">Minha Jornada</h3>
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">
            Estudante de Análise e Desenvolvimento de
            Sistemas com foco em infraestrutura, Linux e
            fundamentos de segurança da informação.

          </p>
          <p className="text-gray-300 leading-relaxed">
            Gosto de aprender criando projetos práticos, explorando desde a construção de interfaces até fundamentos de infraestrutura e cloud                   computing.
            Meu objetivo é evoluir constantemente como desenvolvedor e construir soluções cada vez mais completas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="text-blue-500" size={28} />
              <h3 className="text-2xl font-bold text-white">Tecnologias</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-blue-500" size={28} />
              <h3 className="text-2xl font-bold text-white">Objetivos</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">▹</span>
                <span>• Evoluir como desenvolvedor web</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">▹</span>
                <span>• Construir projetos práticos e funcionais</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">▹</span>
                <span>Aprender arquitetura de aplicações e cloud computing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">▹</span>
                <span>• Conseguir minha primeira oportunidade profissional em tecnologia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8 border border-blue-800/30">
          <p className="text-gray-300 text-center text-lg italic">
            "Cada projeto que desenvolvo é um passo na minha evolução como desenvolvedor."
          </p>
        </div>
      </div>
    </Section>
  );
}
