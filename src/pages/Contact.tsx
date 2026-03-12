import { Mail, Linkedin, Github } from 'lucide-react';
import Section from '../components/Section';

export default function Contact() {
  return (
    <Section id="contact" title="Entre em Contato" className="bg-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Está procurando um desenvolvedor iniciante motivado? Tem um projeto ou oportunidade?
          Adoraria ouvir de você!
        </p>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Informações de Contato</h3>

          <div className="space-y-4 mb-8">
            <a
              href="mailto:seu.email@example.com"
              className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <Mail className="text-blue-500" size={24} />
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-gray-400 text-sm">felipeplima2007@gmail.com</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/seu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <Linkedin className="text-blue-500" size={24} />
              <div>
                <p className="text-white font-medium">LinkedIn</p>
                <p className="text-gray-400 text-sm">https://www.linkedin.com/in/felipe-pereira-lima-35904b305/</p>
              </div>
            </a>

            <a
              href="https://github.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <Github className="text-blue-500" size={24} />
              <div>
                <p className="text-white font-medium">GitHub</p>
                <p className="text-gray-400 text-sm">https://github.com/pkeddits</p>
              </div>
            </a>
          </div>

          <div className="bg-gray-700 rounded-lg p-6">
            <h4 className="text-white font-medium mb-2">Disponibilidade</h4>
            <p className="text-gray-400 text-sm">
              Aberto a oportunidades de estágio, projetos freelance e colaborações em projetos open source.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
