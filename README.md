# Loja-Online-PoekmonTCG
---
### 1. **Página Inicial (`index.html`)**
- **Lista de Produtos**:
  - Exibe os produtos disponíveis com imagem, nome, preço e botão "Adicionar ao Carrinho".
  - Cada produto tem um link para a página de detalhes.

- **Barra de Busca**:
  - Permite que o usuário busque produtos por nome.

- **Filtros**:
  - Filtra produtos por **categoria** (Eletrônicos, Roupas, Livros) e **preço máximo**.

- **Cabeçalho com Menu**:
  - Links para a página inicial e o carrinho de compras.
  - Contador de itens no carrinho.

---

### 2. **Página de Detalhes do Produto (`product.html`)**
- Exibe informações detalhadas sobre um produto específico:
  - Imagem, nome, preço e descrição.
  - Botão "Adicionar ao Carrinho".

---

### 3. **Carrinho de Compras (`cart.html`)**
- **Lista de Itens**:
  - Mostra os produtos adicionados ao carrinho.
  - Permite ajustar a quantidade de cada item.
  - Botão para remover itens do carrinho.

- **Total da Compra**:
  - Calcula e exibe o valor total dos itens no carrinho.

- **Finalizar Compra**:
  - Redireciona para a página de checkout.

---

### 4. **Página de Checkout (`checkout.html`)**
- **Formulário do Cliente**:
  - Coleta informações como nome, email, endereço e método de pagamento.

- **Resumo do Pedido**:
  - Exibe os itens do carrinho e o total da compra.

- **Finalização da Compra**:
  - Envia os dados do pedido para o back-end (simulado com `localStorage`).

---

### 5. **Funcionalidades de Interação**
- **Adicionar ao Carrinho**:
  - Adiciona produtos ao carrinho e atualiza o contador no cabeçalho.

- **Filtros e Busca**:
  - Filtra produtos por nome, categoria e preço.

- **Scroll Suave**:
  - Navegação suave entre as seções da página.

---

### 6. **Integração com Back-End (Simulada)**
- **Salvar Pedidos**:
  - Usa `localStorage` para simular o armazenamento de pedidos.
  - Pode ser integrado com um back-end real (Node.js, Express, banco de dados).

---

### 7. **Design Responsivo**
- O site é responsivo e se adapta a diferentes tamanhos de tela (desktop, tablet, celular).

---

### 8. **Tecnologias Utilizadas**
- **Front-End**:
  - HTML, CSS e JavaScript puro.
  - Uso de `localStorage` para gerenciar o carrinho de compras.

- **Back-End (Simulado)**:
  - Node.js e Express para simular uma API de pedidos (opcional).

---

### Resumo Geral
O site é um **e-commerce completo** com:
- Página inicial com busca e filtros.
- Páginas de detalhes do produto e carrinho de compras.
- Página de checkout para finalização da compra.
- Funcionalidades interativas como adicionar/remover itens e ajustar quantidades.
- Design moderno e responsivo.


