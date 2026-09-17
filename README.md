## 📷 Demonstração

<img width="468" height="416" alt="Captura de tela 2026-09-17 091418" src="https://github.com/user-attachments/assets/5a00dacf-9104-45ec-8ff4-b793946e1d7a" />

# 🧮 Calculadora Simples — React JS

Projeto desenvolvido como desafio prático de fixação de conceitos de **React JS**, baseado no exemplo da Calculadora de IMC. A aplicação permite realizar as quatro operações matemáticas básicas (soma, subtração, multiplicação e divisão) entre dois números informados pelo usuário.

## 🎯 Sobre o desafio

O objetivo era construir, do zero, um componente de calculadora simples, aplicando na prática os conceitos fundamentais de componentização, estado e eventos em React. O roteiro proposto foi:

1. Criar a pasta `components` com o componente `FormCalculadora.jsx`.
2. Inserir os campos de **primeiro número**, **segundo número** e um `<select>` para escolher a **operação** (`+`, `-`, `*`, `/`).
3. Criar os botões **Calcular** e **Limpar**.
4. Exibir o **resultado** na tela.
5. Estilizar o componente com CSS.

## 🚀 Tecnologias utilizadas

- [React](https://react.dev/) 19
- [Vite](https://vitejs.dev/) — ambiente de desenvolvimento e build
- JavaScript (ES6+)
- CSS Modules

## 📁 Estrutura do projeto

```
DesafioCalculadora/
├── src/
│   ├── components/
│   │   ├── FormCalculadora.jsx        # Componente principal da calculadora
│   │   └── FormCalculadora.module.css # Estilos isolados do componente
│   ├── App.jsx                        # Componente raiz, renderiza a calculadora
│   ├── App.css
│   ├── index.css
│   └── main.jsx                       # Ponto de entrada da aplicação
├── index.html
├── package.json
└── vite.config.js
```

## 🧠 Conceitos de React aplicados

### Componentização
A calculadora foi isolada em seu próprio componente funcional, `FormCalculadora.jsx`, dentro da pasta `components`. Isso mantém o `App.jsx` limpo, responsável apenas por renderizar `<FormCalculadora />`, seguindo o princípio de responsabilidade única de cada componente.

### Hook `useState`
O componente utiliza quatro estados independentes, controlados pelo hook `useState`, para guardar tudo o que pode mudar na tela:

- `num1` e `num2`: valores digitados nos campos numéricos;
- `operacao`: operação selecionada no `<select>` (`+`, `-`, `*` ou `/`), com `'+'` como valor padrão;
- `resultado`: mensagem ou valor calculado exibido ao usuário.

Cada vez que um desses estados é atualizado (via `setNum1`, `setNum2`, `setOperacao`, `setResultado`), o React re-renderiza o componente automaticamente para refletir a mudança na interface.

### Componentes controlados (*controlled components*)
Os `<input>` e o `<select>` têm seu `value` vinculado diretamente ao estado do React (`value={num1}`, `value={operacao}`, etc.), e são atualizados através do evento `onChange`. Isso significa que o React é a "fonte da verdade" dos dados do formulário, e não o DOM — uma prática essencial para formulários em React.

### Manipulação de eventos
- `onSubmit={calcular}`: dispara a função de cálculo quando o formulário é enviado (clicando em "Calcular" ou pressionando Enter). Dentro da função, `e.preventDefault()` evita o recarregamento padrão da página.
- `onClick={limpar}`: dispara a função de reset ao clicar no botão "Limpar".
- `onChange`: atualiza o estado a cada digitação ou seleção do usuário.

### Lógica condicional e validação
A função `calcular` converte os textos digitados em números com `parseFloat` e valida se são números válidos com `isNaN`. Em seguida, um `switch` decide qual operação executar de acordo com o valor selecionado no `<select>`, incluindo um tratamento específico para impedir **divisão por zero**.

### Renderização condicional de dados
O resultado (ou uma mensagem de erro) é guardado no estado `resultado` e exibido na tela através da interpolação `{resultado}` dentro do JSX — sempre que esse estado muda, o parágrafo é atualizado automaticamente.

### CSS Modules
O estilo do componente foi feito em `FormCalculadora.module.css` e importado como `styles` (`import styles from './FormCalculadora.module.css'`). Com isso, as classes (`styles.formContainer`, `styles.campo`, `styles.btn`, `styles.resultado`) ficam **isoladas** ao componente, evitando conflitos de nomes de classes com o restante da aplicação.

## ▶️ Como executar o projeto

```bash
# Clonar o repositório
git clone <link-do-repositorio>

# Entrar na pasta do projeto
cd DesafioCalculadora

# Instalar as dependências
npm install

# Rodar o projeto em ambiente de desenvolvimento
npm run dev
```

Depois disso, acesse o endereço exibido no terminal (geralmente `http://localhost:5173`) no navegador.

## 📌 Funcionalidades

- ✅ Entrada de dois números;
- ✅ Seleção da operação matemática (`+`, `-`, `*`, `/`);
- ✅ Botão **Calcular**, que executa a operação escolhida;
- ✅ Botão **Limpar**, que reseta o formulário;
- ✅ Exibição do resultado (ou mensagem de erro) na tela;
- ✅ Validação de campos vazios/inválidos e de divisão por zero.

## 👩‍💻 Autora

Projeto desenvolvido como exercício prático do curso, com base no roteiro do desafio "Calculadora Simples: React JS".


<div align="center">

Feito com ♡ por **Alana Corso** ✦

</div>
