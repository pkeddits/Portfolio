import { BookOpen, Target, Wrench } from 'lucide-react';
import Section from '../components/Section';

export default function About() {
  const technologies = [
    'HTML & CSS',
    'JavaScript',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Git & GitHub',
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
            Sou um iniciante apaixonado por tecnologia, explorando o vasto mundo da TI.
            Comecei minha jornada recentemente com desenvolvimento web e logo me interessei
            também por infraestrutura e cloud computing.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Cada projeto é uma oportunidade de aprender algo novo. Estou construindo
            minha base de conhecimento, um passo de cada vez, com foco em criar soluções
            práticas e funcionais.
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
                <span>Desenvolver projetos reais e funcionais</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">▹</span>
                <span>Aprofundar conhecimento em cloud computing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">▹</span>
                <span>Contribuir com projetos open source</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">▹</span>
                <span>Crescer profissionalmente na área de TI</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8 border border-blue-800/30">
          <p className="text-gray-300 text-center text-lg italic">
            "A jornada de mil milhas começa com um único passo. Cada linha de código,
            cada erro corrigido, cada conceito aprendido me aproxima dos meus objetivos."
          </p>
        </div>
      </div>
    </Section>
  );
}
