
<h1>📝 Texthooker para minerar palavras em japonês</h1>
<p>
  Cole aqui seu texto em japonês e passe o ponteiro do mouse na palavra com a extensão Yomitan/Yomichan
  ativa para ver os significados:
</p>
<textarea placeholder="Cole o texto japonês aqui..."></textarea>

::: details 📘 Guia de uso
Caso você tenha configurado o seu Yomitan de forma que ele adicione também a frase/sentença na carta do Anki. Você pode adicionar a frase inteira por linha que ela será capturada e adicionada a carta.
:::

<style>
  :root {
    --bg-color: #f4f4f4;
    --text-color: #1a1a1a;
    --border-color: #ccc;
    --textarea-bg: #ffffff;
    --textarea-text: #000000;
    --placeholder-color: #777;
  }

  html.dark {
    --bg-color: #1e1e1e;
    --text-color: #e0e0e0;
    --border-color: #333;
    --textarea-bg: #2a2a2a;
    --textarea-text: #f0f0f0;
    --placeholder-color: #888;
  }

  /* O seletor .VPDoc é adicionado pelo VitePress ao container principal da página */
  .VPDoc textarea {
    background-color: var(--textarea-bg);
    color: var(--textarea-text);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    font-size: 20px;
    height: 300px;
    width: 100%;
    padding: 10px;
    resize: vertical;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .VPDoc textarea::placeholder {
    color: var(--placeholder-color);
  }

  .VPDoc textarea:focus {
    outline: none;
    border-color: #007acc;
    box-shadow: 0 0 5px #007acc;
  }
</style>
