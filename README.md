# MagicLinkAuthUI

Interface front-end em React para o projeto Magic Link Authentication, que permite autenticação via link mágico enviado por email.

---

## Visão Geral

Este projeto implementa a interface do usuário para o sistema de autenticação baseado em magic links. O usuário insere seu email, recebe um link de login temporário no email e ao clicar, é autenticado automaticamente.

A API backend é responsável por gerar tokens temporários, enviar o email e validar o token retornando um JWT.

---

## Tecnologias Utilizadas

- React 18+
- React Router DOM (para rotas)
- Vite (ferramenta de build e dev server)
- Axios (para comunicação HTTP com a API)
- Context API + Hooks (para estado e autenticação)
- Docker (opcional, para containerizar o ambiente de desenvolvimento)

---

## Estrutura do Projeto

- `src/pages` — Páginas principais da aplicação, como Login, Validate e Dashboard
- `src/components` — Componentes reutilizáveis da interface
- `src/hooks` — Hooks personalizados, ex: autenticação
- `src/services` — Serviços para chamada da API (ex: envio do email, validação do token)
- `src/routes` — Definição das rotas públicas e privadas

---

## Como Rodar o Projeto

### Pré-requisitos

- Node.js e npm instalados (pode usar Docker para ambiente isolado)
- Backend API MagicLinkAuth rodando e acessível (ex: http://localhost:5209)

### Instalação

```bash
npm install
