<img src="./src/assets/linktree_bg.png" heigth="300px " width="1024" alt="background" />

# Linktree clone - React Props

Projeto para treinar o uso de props em React, assim como JSX e CSS.

## Objetivo

Construir um clone da página de links do Linktree, utilizando componentização e props.

## Requisitos

**Obs: os dados dos links estão dentro de um aquivo JSON (src/utils/data.js).**

1. Preencher os dados no arquivo json.  
    1.1 - Colocar o texto e as urls que desejar.  
    1.2 - Exportar a constante `data` de forma `default`.  
   **Obs: a partir desse ponto é possível executar os testes locais. (`npm run test`)**

2. Colocar titulo e subtitulo na página.  
   2.1 - Os textos devem estar dentro de `<h1>` e `<h2>` respectivamente.

3. Criar o componente `Link`.  
    3.1 - O componente deve receber as props `text` e `url`.  
    3.2 - O componente deve renderizar um link (`<a>`) com o texto e url passados por props.  
   **Obs: não esquecer de exportar o componente**

4. Montar uma lista de links, onde cada link é um componente `Link`.
   4.1 - Utilizar o método `map` para percorrer o array de links e renderizar o componente `Link` para cada um deles.

5. Extra:
6. Adicionar estilos ao projeto.
7. Adicionar icones sociais ao final da página.  
   7.1 - Adicionar a biblioteca de icones - recomendado [phosphor-icons](https://phosphoricons.com/).  
   7.2 - Adicionar os icones no arquivo `data.js.`.  
   7.3 - Adicionar ao .map um novo componente `SocialLink` que recebe as props `icon` e `url`.
