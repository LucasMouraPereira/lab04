## Next.js

[Next.js](https://nextjs.org/) é um framework React de código aberto hospedado no github sob a licença MIT. Ele é criado e mantido pela equipe da Vercel e tem como foco a produção e eficiência.

Ele se assimilar a um create react app onde você inicia um projeto sem se preocupar com a configuração de webpack, estrutura de pastas ou configuração de rotas.

## Principais Funcinalidades do Next.js

- Hibrido SSG e SSR: O [Next.js](https://nextjs.org/) lhe dar a opção de fazer a renderização das páginas durante a build utilizando o [`Static Site Generation`](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) ou a cada requisição utilizando o [`Server-side Rendering`](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering).

- Hot Code Reloading: Qualquer alteração feita em seu código durante o desenvolvimento será refletida na aplicação local em tempo real, atualizando de forma automática.

- Roteamento Automático: As URL’s no Next js são mapeadas com base na pasta **pages**, então qualquer arquivo nesta pasta se torna uma página, sem a necessidade de uma configuração extra. (é possível personalizar isto caso precise).

- Code Splitting Automático: Essa funcionalidade permite que as páginas sejam renderizadas apenas com os pacotes que elas precisam. Digamos que apenas uma página de seu site utilize o Ant Design, este pacote será atrelado apenas a esta página. Isso garante que cada página tenha apenas o código necessário para sua renderização, diminuindo o tamanho (kB) de cada página e melhorando a velocidade de renderização. Houve uma contribuição do time do Google para melhorar esta funcionalidade recentemente.

- Suporte a TypeScript: Configuração e compilação automáticos integrados similar a uma IDE.

- Internacionalização: Como padrão o Next.js já possui uma estrutura para identificação de idiomas diferentes, trabalhando com rotas exclusivas e traduções via locale.

- Otimização de Imagem: Componente nativo do Next para otimização de suas imagens com redimensionamento, lazyload, imagens em formato moderno e de fácil implementação.

## Criação de Projeto

Para se criar um projeto [Next.js](https://nextjs.org/) se utiliza o **create-next-app**, ele configura tudo automaticamente para você:

```bash
npx create-next-app@latest
# or
yarn create next-app
```

Você também pode criar um projeto typescript:

```bash
npx create-next-app@latest --typescript
# or
yarn create next-app --typescript
```

Após a conclusão da instalação, siga as instruções para iniciar o servidor de desenvolvimento. Tente editar **pages/index.js** e veja o resultado em seu navegador.
