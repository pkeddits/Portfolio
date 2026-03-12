import { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Formulário enviado! (Esta é apenas uma demonstração - você pode integrar com um serviço de email real)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Section id="contact" title="Entre em Contato" className="bg-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Está procurando um desenvolvedor iniciante motivado? Tem um projeto ou oportunidade?
          Adoraria ouvir de você!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:seu.email@example.com"
                className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <Mail className="text-blue-500" size={24} />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400 text-sm">seu.email@example.com</p>
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
                  <p className="text-gray-400 text-sm">linkedin.com/in/seu-perfil</p>
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
                  <p className="text-gray-400 text-sm">github.com/seu-usuario</p>
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

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Envie uma Mensagem</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Sua mensagem..."
                />
              </div>

              <Button variant="primary" className="w-full">
                <Send className="inline mr-2" size={18} />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
