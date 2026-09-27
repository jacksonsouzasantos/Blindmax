# BlindMax — Landing page

Landing page responsiva em português para a BlindMax, com tema escuro premium, detalhes champagne, seção de serviços, benefícios, FAQ e chamadas para conversa no WhatsApp.

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

## Build para Netlify

A configuração já está em `netlify.toml`.

- **Build command:** `pnpm build`
- **Publish directory:** `dist/public`
- A imagem de destaque está otimizada em WebP e carregada por uma URL pública HTTPS, funcionando também fora do preview do projeto.

## Configuração necessária antes de publicar

Configure `VITE_WHATSAPP_NUMBER` nas variáveis de ambiente do Netlify com o número comercial em dígitos, incluindo código do país e DDD (por exemplo, `55` + DDD + número, sem `+`, espaços ou pontuação). O texto pré-preenchido é: “Olá! Gostaria de saber mais sobre a blindagem da BlindMax para o meu dispositivo.”

Se a variável não for definida, o botão abre o compartilhamento do WhatsApp com a mensagem pronta, mas não direciona a conversa a um número comercial específico.

Para ativar o link do Instagram no rodapé, configure `VITE_INSTAGRAM_URL` no Netlify com a URL completa do perfil (por exemplo, `https://www.instagram.com/seu_perfil/`). Sem essa variável, o rodapé exibe o espaço reservado sem apontar para um perfil incorreto.

## Conteúdo e alegações

- O briefing inicial não trouxe número de WhatsApp, endereço/ponto físico, condições de garantia nem especificações técnicas verificáveis; a página não inventa essas informações.
- A seção de avaliações usa os depoimentos fornecidos pelo responsável, que confirmou sua autenticidade e autorização de publicação.
- Recomenda-se revisar compatibilidade, descrição dos tratamentos, termos/garantia, endereço e formas de atendimento com a empresa antes da publicação.
