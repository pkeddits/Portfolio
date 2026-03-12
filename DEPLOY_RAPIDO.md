# Guia Rápido de Deploy

Escolha a plataforma que mais se adequa às suas necessidades:

## Comparação Rápida

| Plataforma | Dificuldade | Grátis? | Melhor Para |
|------------|-------------|---------|-------------|
| **Vercel** | Muito Fácil | Sim | Iniciantes, deploy rápido |
| **Netlify** | Muito Fácil | Sim | Iniciantes, simplicidade |
| **GitHub Pages** | Fácil | Sim | Quem já usa GitHub |
| **AWS** | Média | Quase* | Aprender cloud, produção |

*AWS tem free tier generoso, mas pode gerar custos mínimos

---

## 1. VERCEL (Mais Rápido - Recomendado)

**Tempo estimado: 3 minutos**

### Passo a Passo:

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com GitHub
3. Clique "New Project"
4. Selecione seu repositório
5. Clique "Deploy"

**Pronto!** Seu site estará online em ~2 minutos.

### URL Final:
```
seu-portfolio.vercel.app
```

---

## 2. NETLIFY (Igualmente Fácil)

**Tempo estimado: 3 minutos**

### Passo a Passo:

1. Acesse [netlify.com](https://netlify.com)
2. Faça login com GitHub
3. "Add new site" → "Import from Git"
4. Selecione seu repositório
5. Configurações:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy!

### URL Final:
```
seu-portfolio.netlify.app
```

---

## 3. GITHUB PAGES

**Tempo estimado: 5 minutos**

### Passo a Passo:

1. **Edite `vite.config.ts`:**

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/nome-do-seu-repositorio/', // ← IMPORTANTE: adicione essa linha
});
```

2. **Adicione script no `package.json`:**

```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

3. **Instale gh-pages:**

```bash
npm install --save-dev gh-pages
```

4. **Build e Deploy:**

```bash
npm run build
npm run deploy
```

5. **Configure no GitHub:**
   - Vá em Settings → Pages
   - Source: Branch `gh-pages`
   - Salve

### URL Final:
```
seu-usuario.github.io/nome-do-repositorio
```

---

## 4. AWS (Para Aprender Cloud)

**Tempo estimado: 30-45 minutos**

### Método Simples - AWS Amplify:

1. Acesse AWS Amplify
2. "New app" → "Host web app"
3. Conecte ao GitHub
4. Selecione repositório
5. Build settings:
   - Build command: `npm run build`
   - Output: `dist`
6. Deploy

### Método Completo - S3 + CloudFront:

**Veja instruções detalhadas no README.md**

Principais passos:
1. Criar bucket S3
2. Configurar static website hosting
3. Upload dos arquivos
4. Configurar CloudFront (opcional, mas recomendado)

### Custo Estimado:
- **Amplify:** Grátis (tier gratuito)
- **S3 + CloudFront:** < $1/mês

---

## Qual Escolher?

### Escolha VERCEL ou NETLIFY se:
- ✅ Você quer algo rápido e simples
- ✅ É seu primeiro deploy
- ✅ Quer atualizações automáticas a cada push
- ✅ Não quer se preocupar com configurações

### Escolha GITHUB PAGES se:
- ✅ Já tem repositório no GitHub
- ✅ Quer tudo gratuito e simples
- ✅ Não se importa com URL .github.io

### Escolha AWS se:
- ✅ Quer aprender sobre cloud computing
- ✅ Precisa de controle total
- ✅ Quer adicionar isso ao currículo
- ✅ Planeja escalar no futuro

---

## Depois do Deploy

### Domínio Customizado (Opcional)

Todas as plataformas permitem domínio próprio:

**Vercel/Netlify:**
1. Compre um domínio (Namecheap, GoDaddy, etc)
2. Vá em Settings → Domains
3. Adicione seu domínio
4. Configure DNS conforme instruções

**GitHub Pages:**
1. Adicione arquivo `CNAME` na pasta `public/`
2. Conteúdo: `seudominio.com`
3. Configure DNS no registrador

**AWS:**
1. Use Route 53 para gerenciar domínio
2. Configure registro A para CloudFront
3. Adicione certificado SSL

### Atualizações Automáticas

**Vercel/Netlify:**
- Deploy automático a cada push no GitHub
- Nenhuma ação necessária!

**GitHub Pages:**
```bash
# Após fazer mudanças:
npm run build
npm run deploy
```

**AWS Amplify:**
- Deploy automático a cada push

**AWS S3:**
```bash
# Após fazer mudanças:
npm run build
aws s3 sync dist/ s3://seu-bucket --delete
aws cloudfront create-invalidation --distribution-id ID --paths "/*"
```

---

## Troubleshooting

### Build falhou?

```bash
# Limpe e reinstale dependências
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Página em branco após deploy?

Verifique:
1. Base URL no `vite.config.ts` (GitHub Pages)
2. Console do browser (F12) para erros
3. Paths das imagens e assets

### Rota 404 em páginas?

Single Page Apps precisam de configuração especial:

**Netlify:** Crie `public/_redirects`:
```
/*    /index.html   200
```

**Vercel:** Crie `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

---

## Checklist Final

Antes de compartilhar seu portfólio:

- [ ] Site está no ar e carregando
- [ ] Todos os links funcionam
- [ ] Links sociais estão corretos
- [ ] Não há erros no console
- [ ] Responsivo (teste no celular)
- [ ] Imagens carregam
- [ ] Formulário de contato funciona (ou avisa que é demo)
- [ ] Informações pessoais corretas

---

**Dica Final:** Comece com Vercel ou Netlify. São as opções mais simples e você pode sempre migrar depois!
