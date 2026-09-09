# 🍔 Lanches & Cia

<p align="center">
  Aplicativo mobile de cardápio digital desenvolvido com React Native e Expo.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React%20Native-0.81-blue?logo=react" />
  <img src="https://img.shields.io/badge/Expo-54-black?logo=expo" />
  <img src="https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript" />
  <img src="https://img.shields.io/badge/Status-Concluído-success" />
</p>

---

## 📌 Sobre o projeto

O **Lanches & Cia** é uma aplicação mobile desenvolvida em **React Native** utilizando o **Expo**.

O projeto simula um sistema de cardápio digital para uma lanchonete, permitindo que o usuário visualize os produtos disponíveis, pesquise por itens e filtre o cardápio de acordo com diferentes categorias.

A aplicação foi desenvolvida com foco em uma interface simples, moderna e intuitiva, utilizando componentes reutilizáveis e boas práticas de organização.

---

## 🎯 Objetivos

O projeto tem como principais objetivos:

- Desenvolver uma interface mobile utilizando React Native;
- Aplicar conceitos de componentização;
- Trabalhar com listas de dados;
- Utilizar gerenciamento de estado;
- Implementar pesquisa e filtros;
- Utilizar componentes nativos do React Native;
- Criar uma interface responsiva e intuitiva;
- Praticar organização e versionamento de código com Git e GitHub.

---

## ✨ Funcionalidades

### 🔎 Pesquisa

Permite pesquisar produtos pelo nome através de um campo de busca.

### 🏷️ Categorias

O usuário pode filtrar os produtos por categoria:

- Todos
- Lanches
- Combos
- Acompanhamentos
- Bebidas

### 🍔 Cardápio

Cada produto apresenta:

- Imagem;
- Nome;
- Descrição;
- Categoria;
- Preço;
- Avaliação.

### ⭐ Avaliações

Os produtos possuem avaliações exibidas através de estrelas.

### 📱 Interface

A aplicação possui:

- Cabeçalho;
- Banner de destaque;
- Campo de pesquisa;
- Filtros;
- Cards de produtos;
- Rodapé;
- Layout adaptado para dispositivos móveis.

---

## 🖥️ Interface

A estrutura principal da aplicação é composta por:

```text
┌──────────────────────────────────┐
│       🍔 LANCHES & CIA           │
│       O sabor que você merece!   │
├──────────────────────────────────┤
│                                  │
│    🍔 Hambúrguer especial        │
│    Peça agora e aproveite!      │
│                                  │
├──────────────────────────────────┤
│ 🔎 Pesquisar produto...          │
├──────────────────────────────────┤
│ Categorias                       │
│                                  │
│ [Todos] [Lanches] [Combos]       │
│ [Bebidas] [Acompanhamentos]      │
├──────────────────────────────────┤
│ Nosso cardápio                  │
│                                  │
│ ┌──────────────────────────────┐ │
│ │ 🍔  X-Bacon                  │ │
│ │     Hambúrguer, queijo...    │ │
│ │     R$ 24,90       ★ 4.9     │ │
│ └──────────────────────────────┘ │
│                                  │
└──────────────────────────────────┘
