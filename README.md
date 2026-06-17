#  Spotify Clone

Clone das telas iniciais do Spotify (Initial Page, Login e Home) desenvolvido em **React Native** com **Expo** e **TypeScript**, como projeto de estudo de navegação, componentização e estilização em aplicações mobile.

##  Objetivo

O objetivo deste projeto é praticar a construção de uma interface mobile fiel ao layout do Spotify, trabalhando:

- Navegação entre telas com **React Navigation** (Stack + Bottom Tabs);
- Criação de componentes reutilizáveis (botões, inputs, cards e "prateleiras" de conteúdo);
- Tipagem de props e rotas com **TypeScript**;
- Organização de um projeto React Native em camadas (componentes, páginas, rotas e dados mockados).

As imagens de referência usadas como base para o layout estão em `spotify-clone/assets/referencia/`.

##  Caminho de navegação (fluxo de telas)

```
InitialPage  →  Login  →  Home (Bottom Tabs)
                              ├── Home
                              ├── Search
                              ├── Library
                              └── Premium
```

- **Initial Page**: tela de boas-vindas com logo do Spotify, botões de cadastro/login social (Google, Facebook, Apple) e link **"Log in"**. Ao clicar em "Log in", o app navega para a tela **Login**.
- **Login**: tela de autenticação com inputs de e-mail/usuário e senha, switch "Remember me" e botão **"Log in"**. Ao clicar nesse botão, o app navega para a tela **Home**.
- **Home**: tela principal pós-login, com cabeçalho ("Good morning"), prateleiras horizontais de conteúdo ("Recently played", "Try something else", "Artist on the Radar", "Editor's picks") e um mini player fixo na parte inferior. A partir daqui, a navegação passa a ser feita pela **Bottom Tab Navigator** (Home, Search, Library, Premium).

> ⚠️ **Importante:** este projeto é focado em **visual/layout**, sem funcionalidades reais. Os botões sociais (Google, Facebook, Apple), os inputs de login e os switches **não possuem lógica de autenticação** — apenas os botões de navegação descritos acima ("Log in" na Initial Page e "Log in" na tela de Login) realmente trocam de tela. As abas Search, Library e Premium reutilizam o componente `Home` como placeholder visual e não possuem conteúdo próprio.

A navegação entre as telas é controlada pelos arquivos em `src/routers` (`stack.tsx` para a navegação em pilha e `tabs.tsx` para a navegação por abas inferiores).

## 📁 Estrutura do projeto

```
Spotify-Clone/
└── spotify-clone/
    ├── App.tsx                
    ├── index.ts               
    ├── app.json               
    ├── package.json
    ├── tsconfig.json
    ├── assets/
    │   ├── spotify-icon.png
    │   └── referencia/         
    └── src/
        ├── components/
        │   ├── Button/         
        │   ├── Input/           
        │   ├── Card/             
        │   └── Prateleira/       
        ├── data/
        │   └── index.ts        
        ├── pages/
        │   ├── InitialPage/    
        │   ├── Login/        
        │   └── Home/      
        ├── routers/
        │   ├── index.tsx       
        │   ├── stack.tsx         
        │   ├── tabs.tsx           
        │   ├── navigation.ts        
        │   └── style.ts             
        └── @types/
            └── image.d.ts      
```

## 🛠️ Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/) (`native-stack` e `bottom-tabs`)
- [@expo/vector-icons](https://docs.expo.dev/guides/icons/) (ícones Ionicons)

## ▶️ Como executar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/Luisa-abreu/Spotify-Clone.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd Spotify-Clone/spotify-clone
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o projeto com o Expo:
   ```bash
    npx expo start
   # ou
   npm start
   ```
5. Use o app **Expo Go** no celular para escanear o QR Code, ou rode em um emulador com:
   ```bash
   npm run android
   # ou
   npm run ios
   # ou, para rodar no navegador
   npm run web
   ```

## 📌 Status do projeto

Projeto em desenvolvimento, com foco no **layout** das telas iniciais (Initial Page, Login e Home). A única navegação implementada até o momento é: Initial Page → Login (via botão "Log in") e Login → Home (via botão "Log in"). Não há autenticação real, integração com API ou persistência de dados — todo o conteúdo é estático/mockado. As abas Search, Library e Premium ainda são placeholders visuais e podem ser implementadas em versões futuras.
