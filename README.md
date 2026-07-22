<h1 align="center">Game4r.store</h1>

<p align="center">
  Plataforma completa de e-commerce para produtos gamers — web + mobile.
</p>



---

## Índice

- [Arquitetura do Sistema](#arquitetura-do-sistema)
- [Modelo de Dados](#modelo-de-dados)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Fluxo de Navegação](#fluxo-de-navegação)
- [Componentes da Interface](#componentes-da-interface)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Setup](#setup)
- [Rodar](#rodar)
- [API](#api)
- [Tech Stack](#tech-stack)

---

## Arquitetura do Sistema

![Arquitetura do Sistema](docs/01.png)

```mermaid
C4Context
  title Arquitetura - Game4r.store

  Person(cliente_web, "Cliente Web", "Navegador")
  Person(cliente_mobile, "Cliente Mobile", "Expo Go / iOS")
  System_Boundary(sistema, "Game4r.store") {
    System(frontend, "Frontend", "Next.js 16", "Porta 3000")
    System(mobile, "Mobile", "Expo / React Native", "Porta 8081")
    System(backend, "Backend", "NestJS 11", "Porta 4000")
    SystemDb(db, "Banco", "PostgreSQL", "Porta 5432")
  }
  System_Ext(core, "Pacote Core", "@game4r/core", "Tipos, constantes, regras de negócio")

  Rel(cliente_web, frontend, "HTTP", "Navega")
  Rel(cliente_mobile, mobile, "Metro", "Abre app")
  Rel(frontend, backend, "REST", "GET/POST /api")
  Rel(mobile, backend, "REST", "GET/POST /api")
  Rel(backend, db, "Prisma ORM", "Consulta")
  Rel(frontend, core, "Importa", "Tipos e utils")
  Rel(mobile, core, "Importa", "Tipos e utils")
  Rel(backend, core, "Importa", "Tipos e utils")
  UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")
```

### Diagrama de Containers

```mermaid
C4Container
  title Containers - Game4r.store

  System_Boundary(frontend, "Frontend (Next.js)") {
    Container(paginas, "Páginas", "App Router", "Rotas da loja")
    Container(componentes, "Componentes", "React Server/Client", "UI components")
    Container(contexts, "Contexts", "React Context", "Estado global")
    Container(hooks, "Hooks", "Custom Hooks", "Lógica reutilizável")
  }

  System_Boundary(backend_api, "Backend (NestJS)") {
    Container(controllers, "Controllers", "REST", "Rotas /produtos, /auth, /pedidos")
    Container(services, "Services", "Regras de negócio", "Lógica de aplicação")
    Container(prisma, "Prisma Provider", "ORM", "Acesso ao banco")
  }

  System_Boundary(mobile_app, "Mobile (Expo)") {
    Container(tabs, "Tab Navigator", "Expo Router", "Início, Carrinho, Usuário")
    Container(stack, "Stack Navigator", "Expo Router", "Login, Produto, Pagamento")
  }

  Rel(paginas, componentes, "Renderiza")
  Rel(componentes, contexts, "Consome")
  Rel(contexts, hooks, "Usa")
  Rel(controllers, services, "Delega")
  Rel(services, prisma, "Persiste")
```

---

## Modelo de Dados

![Modelo de Dados](docs/02.png)

```mermaid
erDiagram
  Produto {
    int id PK
    string nome
    string descricao
    string marca
    string modelo
    string imagem
    float nota
    string videoReview
    string[] tags
    float precoBase
    float precoPromocional
    float menorPreco
    float maiorPreco
    float precoMedio
    json especificacoes
  }

  Usuario {
    int id PK
    string nome
    string email UK
    string senha
    string telefone
    string endereco
    string numero
    string bairro
    string cidade
    string estado
    string cep
  }

  Avaliacao {
    int id PK
    int produtoId FK
    int usuarioId FK
    float nota
    string comentario
    datetime data
  }

  Pedido {
    int id PK
    float total
    datetime data
    enum status
    enum formaPagamento
    int usuarioId FK
  }

  PedidoEntrega {
    int id PK
    int pedidoId FK, UK
    string nome
    string email
    string telefone
    string endereco
    string numero
    string complemento
    string bairro
    string cidade
    string estado
    string cep
  }

  ItemPedido {
    int id PK
    int quantidade
    float precoUnitario
    int produtoId FK
    int pedidoId FK
  }

  Produto ||--o{ Avaliacao : "tem"
  Usuario ||--o{ Avaliacao : "faz"
  Usuario ||--o{ Pedido : "realiza"
  Pedido ||--o{ ItemPedido : "contem"
  Produto ||--o{ ItemPedido : "inclui"
  Pedido ||--|| PedidoEntrega : "possui"
```

---

## Fluxo de Navegação

![Fluxo de Navegação](docs/03.png)

```mermaid
flowchart LR
  A[Início] --> B{Seleciona?}
  B -->|Produto| C[Detalhes]
  B -->|Carrinho| D[Carrinho]
  C -->|Adicionar| D
  C -->|Comprar| D
  D -->|Continuar| E[Pagamento]
  E -->|Finalizar| F[Sucesso]
  F --> A

  style A fill:#7811F5,color:#fff
  style C fill:#CB0BD4,color:#fff
  style D fill:#7811F5,color:#fff
  style E fill:#CB0BD4,color:#fff
  style F fill:#22c55e,color:#fff
```

---

## Estrutura do Projeto

```
game4r.store/
├── apps/
│   ├── backend/              # API REST (NestJS)
│   │   ├── prisma/
│   │   │   ├── schema.prisma # Modelo de dados
│   │   │   ├── migrations/   # Migrations + seed
│   │   │   └── seed.ts       # 28 produtos iniciais
│   │   └── src/
│   │       ├── auth/         # Autenticação JWT
│   │       ├── db/           # Prisma provider
│   │       ├── produto/      # CRUD produtos
│   │       ├── pedido/       # Gestão de pedidos
│   │       └── avaliacao/    # Avaliações
│   │
│   ├── frontend/             # Loja web (Next.js 16)
│   │   └── src/
│   │       ├── app/          # App Router
│   │       │   ├── (paginas) # Páginas principais
│   │       │   └── checkout/ # Fluxo de compra
│   │       ├── components/   # UI components
│   │       │   ├── checkout/ # Carrinho, pagamento
│   │       │   ├── produto/  # Cards, banner, specs
│   │       │   ├── template/ # Header, footer
│   │       │   └── shared/   # NotaReview, etc.
│   │       └── data/         # Contexts + hooks
│   │
│   └── mobile/               # App mobile (Expo)
│       └── src/
│           ├── app/          # Expo Router
│           │   ├── (tabs)/   # Início, Carrinho, Usuário
│           │   └── (stack)/  # Produto, Login, Pagamento
│           ├── components/   # Mesma estrutura do frontend
│           └── data/         # Contexts + hooks
│
└── packages/
    └── core/                 # @game4r/core
        └── src/
            ├── constants/    # Produtos, parcelamento
            ├── produto/      # Tipos e classes
            └── utils/        # Moeda, filtrar, etc.
```

---

## Componentes da Interface

![Componentes da Interface](docs/04.png)

```mermaid
classDiagram
  class ProdutoItem {
    +Produto produto
    +adicionarItem()
    +selecionar()
  }

  class ListaProdutos {
    +Produto[] produtos
    +render()
  }

  class BannerCompra {
    +Produto produto
    +Parcelamento parcelamento
    +adicionarItem()
    +comprar()
  }

  class CarrinhoItem {
    +ItemCarrinho item
    +adicionarItem()
    +removerItem()
    +removerProduto()
  }

  class CarrinhoVazio {
    +render()
  }

  class TotalCarrinho {
    +int qtdeItens
    +float valorTotal
    +continuar()
  }

  class CabecalhoCheckout {
    +string passo
    +renderizarItem()
  }

  class SelecaoFormaPagamento {
    +FormaPagamento formaPagamento
    +selecionar()
  }

  class FormularioEntrega {
    +PedidoEntrega entrega
    +alterarAtributo()
  }

  class ResumoPagamento {
    +float valorTotal
    +finalizarCompra()
  }

  ListaProdutos "1" --> "*" ProdutoItem : contém
  ProdutoItem --> BannerCompra : navega para
  CarrinhoItem --> TotalCarrinho : agregado em
  CabecalhoCheckout --> SelecaoFormaPagamento : passo pagamento
  CabecalhoCheckout --> CarrinhoItem : passo carrinho
  ResumoPagamento --> FormularioEntrega : usa dados
```

---

## Design System

![Design System](docs/design-system.png)

O design system do Game4r.store define a identidade visual completa do projeto, incluindo tokens (cores, tipografia, espaçamento, iconografia), componentes base (botões, inputs, cartões, badges), componentes de layout e componentes de negócio.

---

## Funcionalidades

- Catálogo de produtos com busca e filtro
- Carrinho de compras com persistência local
- Sistema de autenticação (cadastro/login)
- Checkout com PIX, Boleto e Cartão de Crédito
- Medidor de preço com comparação histórica
- Avaliações de usuários
- Design responsivo (web) e nativo (mobile)

---

## Pré-requisitos

- **Node.js** >= 20
- **PostgreSQL** rodando em `localhost:5432`
- **Xcode** (para iOS simulator)
- **Expo Go** (opcional, para testar no dispositivo físico)

---

## API

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/produtos` | Lista todos os produtos |
| GET | `/produtos/:id` | Detalhes do produto |
| POST | `/auth/cadastrar` | Cadastro de usuário |
| POST | `/auth/login` | Login (retorna JWT) |
| POST | `/avaliacoes` | Criar avaliação |
| GET | `/avaliacoes/produto/:id` | Avaliações de um produto |
| GET | `/avaliacoes/produto/:id/resumo` | Resumo das avaliações |
| POST | `/pedidos` | Criar novo pedido |
| GET | `/pedidos` | Listar pedidos do usuário |
| DELETE | `/pedidos/:id` | Cancelar pedido |

---

## Tech Stack

```mermaid
mindmap
  root((Game4r.store))
    Backend
      NestJS 11
      Prisma 7
      PostgreSQL
      JWT Auth
    Frontend
      Next.js 16
      Tailwind CSS 4
      TypeScript
    Mobile
      Expo SDK 57
      React Native 0.86
      Expo Router
    Compartilhado
      @game4r/core
      Turborepo
      npm workspaces
```

---

<p align="center">
  Feito por <a href="https://github.com/eduardodrolhe">Eduardo Drolhe</a>
</p>
