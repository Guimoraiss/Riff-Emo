# Riff Emo

Site de treino para um projeto fictício de venda de merch de bandas alternativas e indie.

## Sobre

Este é um site estático de demonstração, criado apenas para prática e aprendizado. O conteúdo e as coleções são fictícios e não representam uma loja real.

## Tecnologias

- HTML
- CSS
- JavaScript

## Estrutura do projeto

- `index.html`: estrutura global, sacola, checkout demonstrativo e carregamento dos scripts
- `catalog.js`: bandas, produtos, preços, descrições, tamanhos e imagens
- `script.js`: rotas, renderização das páginas, filtros, sacola e checkout
- `style.css`: identidade visual, temas e responsividade

## Como editar o catálogo

Cada produto fica dentro da propriedade `products` de sua banda em `catalog.js`. Para mudar um produto, localize seu `id` e edite os campos `name`, `price`, `description`, `color`, `fit`, `sizes` ou `image`.

Os endereços das páginas seguem o formato `#product/id-da-banda/id-do-produto`. Por isso, evite mudar um `id` depois de publicar um link. O nome e a descrição podem ser alterados normalmente.

## Uso

- Abra `index.html` no navegador
- Navegue pelas seções usando os links
- O carrinho funciona de forma interativa, mas não processa pagamentos

## Observações

- Projeto de treino, não é um e-commerce real
- O objetivo é estudar layout, responsividade e navegação mobile
