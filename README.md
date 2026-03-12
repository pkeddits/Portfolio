# Portfólio Profissional

Site de portfólio desenvolvido para apresentar projetos e habilidades na área de tecnologia. Design moderno, limpo e responsivo.

## Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset tipado do JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Vite** - Build tool moderna e rápida
- **Lucide React** - Ícones modernos

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.tsx      # Cabeçalho com navegação
│   ├── Footer.tsx      # Rodapé com links sociais
│   ├── Button.tsx      # Botão customizável
│   ├── ProjectCard.tsx # Card de projeto
│   └── Section.tsx     # Seção da página
├── pages/              # Páginas principais
│   ├── Home.tsx        # Página inicial
│   ├── About.tsx       # Sobre mim
│   ├── Projects.tsx    # Projetos
│   └── Contact.tsx     # Contato
├── data/               # Dados dos projetos
│   └── projects.ts     # Lista de projetos
├── App.tsx             # Componente principal
└── main.tsx            # Entrada da aplicação
```

## Como Executar Localmente

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone seu-repositorio-url
cd seu-portfolio
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra o navegador em `http://localhost:5173`

### Build de Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## Personalização

### Atualizar Informações Pessoais

1. **Dados de contato** - Edite `src/components/Footer.tsx` e `src/pages/Contact.tsx`
2. **Sobre mim** - Edite `src/pages/About.tsx`
3. **Projetos** - Edite `src/data/projects.ts`

### Adicionar Novos Projetos

Edite o arquivo `src/data/projects.ts`:

```typescript
{
  id: 9,
  title: 'Nome do Projeto',
  description: 'Descrição breve do projeto',
  technologies: ['React', 'TypeScript'],
  category: 'web', // ou 'infrastructure' ou 'inDevelopment'
  liveUrl: 'https://projeto.com',
  githubUrl: 'https://github.com/usuario/projeto',
}
```

## Deploy

### 1. GitHub Pages

#### Passo 1: Configurar vite.config.ts

Adicione a propriedade `base` no arquivo `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/nome-do-repositorio/', // Substitua pelo nome do seu repositório
});
```

#### Passo 2: Build e Deploy

```bash
# Build do projeto
npm run build

# Instale gh-pages (se ainda não tiver)
npm install --save-dev gh-pages

# Adicione no package.json:
"scripts": {
  "deploy": "gh-pages -d dist"
}

# Execute o deploy
npm run deploy
```

#### Passo 3: Configurar GitHub Pages

1. Vá para Settings > Pages no seu repositório
2. Selecione a branch `gh-pages` como source
3. Aguarde alguns minutos para o site ficar online

### 2. Vercel

#### Método 1: Via Dashboard (Recomendado)

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Importe seu repositório do GitHub
4. Vercel detectará automaticamente o Vite
5. Clique em "Deploy"

#### Método 2: Via CLI

```bash
# Instale Vercel CLI
npm install -g vercel

# Faça login
vercel login

# Deploy
vercel

# Para deploy em produção
vercel --prod
```

### 3. Netlify

#### Método 1: Via Dashboard (Recomendado)

1. Acesse [netlify.com](https://netlify.com)
2. Clique em "Add new site" > "Import an existing project"
3. Conecte ao GitHub e selecione seu repositório
4. Configurações de build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Clique em "Deploy site"

#### Método 2: Via CLI

```bash
# Instale Netlify CLI
npm install -g netlify-cli

# Faça login
netlify login

# Deploy
netlify deploy

# Para deploy em produção
netlify deploy --prod
```

#### Método 3: Drag and Drop

1. Build local: `npm run build`
2. Acesse [app.netlify.com/drop](https://app.netlify.com/drop)
3. Arraste a pasta `dist` para a área de drop

### 4. AWS (Amazon Web Services)

#### Opção 1: S3 + CloudFront (Recomendado)

##### Passo 1: Criar e Configurar Bucket S3

1. Acesse o console da AWS e vá para S3
2. Clique em "Create bucket"
3. Defina um nome único (ex: `meu-portfolio-site`)
4. Região: Escolha a mais próxima de você
5. Desmarque "Block all public access"
6. Confirme que entende os riscos
7. Clique em "Create bucket"

##### Passo 2: Configurar Static Website Hosting

1. Clique no bucket criado
2. Vá para a aba "Properties"
3. Role até "Static website hosting"
4. Clique em "Edit"
5. Selecione "Enable"
6. Index document: `index.html`
7. Error document: `index.html` (para suportar rotas SPA)
8. Salve as alterações
9. Anote o endpoint fornecido

##### Passo 3: Configurar Bucket Policy

1. Vá para a aba "Permissions"
2. Em "Bucket policy", clique em "Edit"
3. Cole a seguinte policy (substitua `seu-bucket-name`):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::seu-bucket-name/*"
    }
  ]
}
```

##### Passo 4: Upload dos Arquivos

```bash
# Build do projeto
npm run build

# Instale AWS CLI (se ainda não tiver)
# Windows: https://awscli.amazonaws.com/AWSCLIV2.msi
# Mac: brew install awscli
# Linux: sudo apt-get install awscli

# Configure AWS CLI
aws configure
# Digite suas credenciais:
# - AWS Access Key ID
# - AWS Secret Access Key
# - Default region name (ex: us-east-1)
# - Default output format (deixe em branco)

# Sync da pasta dist para o S3
aws s3 sync dist/ s3://seu-bucket-name --delete

# Com cache control para melhor performance
aws s3 sync dist/ s3://seu-bucket-name --delete --cache-control max-age=31536000,public
```

##### Passo 5: Configurar CloudFront (CDN)

1. Acesse o serviço CloudFront no console AWS
2. Clique em "Create distribution"
3. **Origin Settings:**
   - Origin domain: Selecione seu bucket S3
   - Origin access: "Public"
4. **Default Cache Behavior:**
   - Viewer protocol policy: "Redirect HTTP to HTTPS"
   - Allowed HTTP methods: GET, HEAD, OPTIONS
5. **Settings:**
   - Price class: Escolha conforme necessidade
   - Alternate domain names (CNAME): Deixe vazio por enquanto
   - Default root object: `index.html`
6. **Custom Error Pages (Importante para SPA):**
   - Clique em "Create custom error response"
   - HTTP error code: 403
   - Customize error response: Yes
   - Response page path: `/index.html`
   - HTTP response code: 200
   - Repita para erro 404
7. Clique em "Create distribution"
8. Aguarde a distribuição ser criada (pode levar 15-20 minutos)

##### Passo 6: Atualizar Após Mudanças

```bash
# Build
npm run build

# Upload para S3
aws s3 sync dist/ s3://seu-bucket-name --delete

# Invalidar cache do CloudFront (substitua DISTRIBUTION_ID)
aws cloudfront create-invalidation --distribution-id DISTRIBUTION_ID --paths "/*"
```

#### Opção 2: Amplify (Mais Simples)

##### Via Console

1. Acesse AWS Amplify
2. Clique em "New app" > "Host web app"
3. Conecte ao GitHub
4. Selecione o repositório
5. Configurações de build:
   - Build command: `npm run build`
   - Output directory: `dist`
6. Clique em "Save and deploy"

##### Via CLI

```bash
# Instale Amplify CLI
npm install -g @aws-amplify/cli

# Configure
amplify configure

# Inicialize
amplify init

# Adicione hosting
amplify add hosting

# Selecione "Hosting with Amplify Console"
# Selecione "Manual deployment"

# Deploy
amplify publish
```

#### Configurar Domínio Customizado (Opcional)

##### No Route 53

1. Acesse Route 53
2. Compre um domínio ou use um existente
3. Crie um Hosted Zone
4. Crie um Record Set:
   - Type: A - IPv4 address
   - Alias: Yes
   - Alias Target: Selecione sua distribuição CloudFront

##### No CloudFront

1. Edite sua distribuição
2. Em "Alternate domain names", adicione seu domínio
3. Em "SSL Certificate", selecione ou crie um certificado
4. Salve as alterações

## Custos Estimados AWS

- **S3**: ~$0.023/GB armazenado + ~$0.09/GB transferido
- **CloudFront**: ~$0.085/GB transferido (primeiros 10TB)
- **Route 53**: ~$0.50/mês por hosted zone (opcional)

Para um portfólio simples: **< $1/mês** (geralmente alguns centavos)

## Manutenção

### Atualizar Conteúdo

1. Edite os arquivos necessários
2. Teste localmente: `npm run dev`
3. Build: `npm run build`
4. Deploy conforme a plataforma escolhida

### Adicionar Novas Seções

1. Crie um novo componente em `src/pages/`
2. Importe e adicione no `src/App.tsx`
3. Adicione link de navegação no `src/components/Header.tsx`

## Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## Suporte

Se encontrar problemas ou tiver dúvidas:
- Abra uma issue no GitHub
- Entre em contato através do formulário no site

---

Desenvolvido com React, TypeScript e Tailwind CSS
