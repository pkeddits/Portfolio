# Guia Rápido de Personalização

Este guia ajudará você a personalizar o portfólio com suas informações pessoais.

## 1. Informações Pessoais

### Atualizar Nome e Título

**Arquivo:** `src/pages/Home.tsx`

Procure por:
```typescript
<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
  Olá, sou <span className="text-blue-500">Desenvolvedor</span> e entusiasta de <span className="text-blue-500">Tecnologia</span>
</h1>
```

Substitua por seu nome e área de atuação.

### Atualizar Descrição Pessoal

**Arquivo:** `src/pages/Home.tsx`

Procure por:
```typescript
<p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
  Iniciante na área de TI, explorando desenvolvimento web, infraestrutura e cloud computing.
  Cada linha de código é um passo na minha jornada de aprendizado.
</p>
```

## 2. Links Sociais

### GitHub, LinkedIn e Email

**Arquivos a editar:**
- `src/components/Footer.tsx`
- `src/pages/Contact.tsx`

Procure e substitua:
- `https://github.com/seu-usuario` → seu link do GitHub
- `https://linkedin.com/in/seu-perfil` → seu link do LinkedIn
- `seu.email@example.com` → seu email real

## 3. Adicionar Seus Projetos

**Arquivo:** `src/data/projects.ts`

### Exemplo de Projeto Web:

```typescript
{
  id: 9,
  title: 'Nome do Seu Projeto',
  description: 'Descrição clara e objetiva do que o projeto faz',
  technologies: ['React', 'CSS', 'JavaScript'],
  category: 'web',
  liveUrl: 'https://seu-projeto.com',
  githubUrl: 'https://github.com/usuario/projeto',
}
```

### Exemplo de Projeto de Infraestrutura:

```typescript
{
  id: 10,
  title: 'Configuração de Servidor',
  description: 'Configurei um servidor web básico usando Nginx',
  technologies: ['Linux', 'Nginx', 'UFW'],
  category: 'infrastructure',
}
```

### Exemplo de Projeto Em Desenvolvimento:

```typescript
{
  id: 11,
  title: 'App de Notas',
  description: 'Aplicativo para gerenciar notas e lembretes',
  technologies: ['React', 'TypeScript'],
  category: 'inDevelopment',
  status: 'Em desenvolvimento',
}
```

## 4. Atualizar "Sobre Mim"

**Arquivo:** `src/pages/About.tsx`

### Sua Jornada

Procure por:
```typescript
<p className="text-gray-300 leading-relaxed mb-4">
  Sou um iniciante apaixonado por tecnologia...
</p>
```

Conte sua história de forma autêntica.

### Tecnologias que você conhece

Procure por:
```typescript
const technologies = [
  'HTML & CSS',
  'JavaScript',
  // ... adicione suas tecnologias
];
```

### Seus Objetivos

Procure por:
```typescript
<li className="flex items-start gap-2">
  <span className="text-blue-500 mt-1">▹</span>
  <span>Desenvolver projetos reais e funcionais</span>
</li>
```

## 5. Personalizar Cores (Opcional)

Se quiser mudar a cor do tema azul para outra:

1. Abra qualquer arquivo de componente
2. Procure por `blue-500`, `blue-600`, etc.
3. Substitua por outra cor do Tailwind:
   - `green-500` para verde
   - `purple-500` para roxo
   - `orange-500` para laranja
   - `red-500` para vermelho

**Exemplo:**
```typescript
// De:
className="text-blue-500"

// Para:
className="text-green-500"
```

## 6. Atualizar Título da Página

**Arquivo:** `index.html`

Procure por:
```html
<title data-default>Meu Portfólio | Desenvolvedor & Entusiasta de Tecnologia</title>
```

## 7. Testar Suas Mudanças

Sempre que fizer alterações:

```bash
# 1. Veja as mudanças em tempo real
npm run dev

# 2. Teste o build de produção
npm run build
```

## 8. Dicas de Conteúdo

### Para Iniciantes - Seja Autêntico

✅ **BOM:**
- "Primeiro projeto usando React"
- "Aprendi a usar CSS Grid neste projeto"
- "Configuração básica de servidor Linux"

❌ **EVITAR:**
- "Sistema complexo e robusto"
- "Arquitetura escalável enterprise-level"
- "Infraestrutura completa de microserviços"

### Descrições de Projetos

Mantenha simples e honesto:

**Exemplo 1:**
```
Landing page responsiva desenvolvida para praticar HTML e CSS.
Primeiro projeto utilizando media queries e flexbox.
```

**Exemplo 2:**
```
Calculadora simples em JavaScript. Aprendi sobre manipulação
do DOM e eventos neste projeto.
```

**Exemplo 3:**
```
Configurei um ambiente de teste na AWS usando S3. Primeira
experiência com serviços de cloud.
```

## 9. Estrutura de Pastas

```
src/
├── components/       # Componentes reutilizáveis
│   ├── Header.tsx   # Navegação
│   ├── Footer.tsx   # Rodapé
│   └── ...
├── pages/           # Páginas completas
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
└── data/            # Dados dos projetos
    └── projects.ts
```

## 10. Checklist Antes do Deploy

- [ ] Atualizei meu nome e título
- [ ] Adicionei meus links sociais corretos
- [ ] Atualizei a seção "Sobre Mim"
- [ ] Adicionei meus projetos reais
- [ ] Testei o site localmente (`npm run dev`)
- [ ] Build funciona sem erros (`npm run build`)
- [ ] Revisei todo o conteúdo por erros de digitação

## Precisa de Ajuda?

- Leia o README.md completo para instruções de deploy
- Teste sempre localmente antes de fazer deploy
- Faça mudanças pequenas e teste frequentemente

---

Boa sorte com seu portfólio!
