// Accordion
document.querySelectorAll(".accordion-btn").forEach((btn, index) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";

    // Chama renderProdutos quando o botão VER LISTA DE PRODUTOS for clicado
    if (index === 0) {
      renderProdutos();
    }
  });
});

// ---------------------
// Precarrega produtos uma única vez (se ainda não existir no localStorage)
// ---------------------
if (!localStorage.getItem("produtos")) {
    let produtosIniciais = [
    { "nome": "Água 1,5 litros", "preco": 6.00 },
    { "nome": "Agua sem gás 500ml", "preco": 4.00 },
    { "nome": "Água com gás 500ml", "preco": 5.00 },
    { "nome": "Coca sem açúcar 220ml", "preco": 6.00 },
    { "nome": "Coca sem açúcar 350ml", "preco": 8.00 },
    { "nome": "Coca tradicional 220ml", "preco": 6.00 },
    { "nome": "Coca tradicional 350ml", "preco": 8.00 },
    { "nome": "Fanta 220ml", "preco": 6.00 },
    { "nome": "Fanta 350 ml", "preco": 8.00 },
    { "nome": "Guaraná Zero 220ml", "preco": 6.00 },
    { "nome": "Guaraná Zero 350ml", "preco": 8.00 },
    { "nome": "Guaraná Tradicional 220ml", "preco": 6.00 },
    { "nome": "Guaraná Tradicional 350ml", "preco": 8.00 },
    { "nome": "H2OH 500ml", "preco": 8.00 },
    { "nome": "Life Mix Uva/Cramb", "preco": 8.00 },
    { "nome": "Mate Leão Tradicional", "preco": 9.00 },
    { "nome": "Mate Leão Limão", "preco": 9.00 },
    { "nome": "Mate Leão Pessego", "preco": 9.00 },
    { "nome": "Mate Leão pequeno", "preco": 7.50 },
    { "nome": "Schweppes 220ml", "preco": 6.00 },
    { "nome": "Schweppes 350ml", "preco": 8.00 },
    { "nome": "Sprite 350 ml", "preco": 8.00 },
    { "nome": "Suco Dell Valle Maracujá", "preco": 8.00 },
    { "nome": "Suco Del Valle Morango", "preco": 8.00 },
    { "nome": "Suco Del Valle Uva", "preco": 8.00 },
    { "nome": "Suco Maguari Maracujá", "preco": 8.00 },
    { "nome": "Suco Su Fresh Maracujá", "preco": 8.00 },
    { "nome": "YoPro 15g", "preco": 13.00 },
    { "nome": "Café Cappuccino da casa", "preco": 8.00 },
    { "nome": "Café Pilão expresso", "preco": 7.00 },
    { "nome": "Café Pilão decaf", "preco": 7.00 },
    { "nome": "Café Dolce Gusto Alpino", "preco": 7.00 },
    { "nome": "Café Dolce Gusto Alpino Black", "preco": 7.00 },
    { "nome": "Café Dolce Gusto Au Lat", "preco": 7.00 },
    { "nome": "Café Dolce Gusto Cappuccino", "preco": 7.00 },
    { "nome": "Café Dolce Gusto Kit Kat", "preco": 7.00 },
    { "nome": "Café Dolce Gusto Kopenhagen", "preco": 7.00 },
    { "nome": "Café Dolce Gusto Moça", "preco": 7.00 },
    { "nome": "Café Dolce Gusto Mocha Canela", "preco": 7.00 },
    { "nome": "Café Dolce Gusto Nescau", "preco": 7.00 },
    { "nome": "Chá Twining", "preco": 8.00 },
    { "nome": "Bolo simples", "preco": 7.00 },
    { "nome": "Bolo recheado", "preco": 8.00 },
    { "nome": "Brigadeiro Chocolate", "preco": 6.00 },
    { "nome": "Brigadeiro Creme Broule", "preco": 6.00 },
    { "nome": "Brigadeiro Cereja", "preco": 6.00 },
    { "nome": "Brigadeiro Bem casado", "preco": 6.00 },
    { "nome": "Brigadeiro Uva", "preco": 6.00 },
    { "nome": "Brigadeiro Colorido", "preco": 6.00 },
    { "nome": "Suspiro", "preco": 6.00 },
    { "nome": "Barra de Cereal", "preco": 5.00 },
    { "nome": "Queijadinha", "preco": 6.00 },
    { "nome": "Laranjinha carmelizada", "preco": 3.50 },
    { "nome": "Pão de Batata", "preco": 3.00 },
    { "nome": "Pão de Batata combo com 3", "preco": 8.00 },
    { "nome": "Pão de Queijo", "preco": 6.00 },
    { "nome": "Quiche", "preco": 7.50 },
    { "nome": "Saco de pão de Queijo", "preco": 90.00 }
  ];
  // Ordena em ordem alfabética ignorando acentos e maiúsculas/minúsculas
  produtosIniciais.sort((a, b) =>
    a.nome.normalize("NFD").replace(/[\u0300-\u036f]/g, "").localeCompare(
      b.nome.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
      "pt",
      { sensitivity: "base" }
    )
  );

  localStorage.setItem("produtos", JSON.stringify(produtosIniciais));
}

// ---------------------
// Produtos
// ---------------------
let produtos = JSON.parse(localStorage.getItem("produtos") || "[]");

const renderProdutos = () => {
  const ulExibir = document.getElementById("lista-produtos");
  const ulGerenciar = document.getElementById("lista-gerenciar");
  ulExibir.innerHTML = "";
  ulGerenciar.innerHTML = "";

  produtos.forEach((p, index) => {
    const li1 = document.createElement("li");
    li1.textContent = `${p.nome} - R$${parseFloat(p.preco).toFixed(2)}`;
    ulExibir.appendChild(li1);

    const li2 = document.createElement("li");

   li2.innerHTML = `
  <div class="item-produto">
    <span>${p.nome} - R$${parseFloat(p.preco).toFixed(2)}</span>
    <span class="icones-acao">
      <button onclick="editarProduto(${index})" title="Editar" class="btn-icon">✏️</button>
      <button onclick="excluirProduto(${index})" title="Excluir" class="btn-icon">🗑️</button>
    </span>
  </div>
`;
    ulGerenciar.appendChild(li2);
        const datalist = document.getElementById("lista-produto");
        if (datalist) {
    datalist.innerHTML = ""; // limpa antes de adicionar
    produtos.forEach((p) => {
        const opt = document.createElement("option");
        opt.value = p.nome;
        datalist.appendChild(opt);
    });
    }
  });
};

document.getElementById("form-produto").addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.getElementById("nome-produto").value.trim();
  const preco = parseFloat(document.getElementById("preco-produto").value);
  const indexExistente = produtos.findIndex(p => p.nome.toLowerCase() === nome.toLowerCase());

  const novoProduto = { nome, preco };

  if (indexExistente !== -1) {
    produtos[indexExistente] = novoProduto;
    showMsg("Produto atualizado!", "mensagem-produto");
  } else {
    produtos.push(novoProduto);
    showMsg("Produto adicionado!", "mensagem-produto");
  }

  localStorage.setItem("produtos", JSON.stringify(produtos));
  document.getElementById("form-produto").reset();
  renderProdutos();
});

function editarProduto(index) {
  const p = produtos[index];
  document.getElementById("nome-produto").value = p.nome;
  document.getElementById("preco-produto").value = p.preco;
}

function excluirProduto(index) {
  if (confirm("Tem certeza que deseja excluir este produto?")) {
    produtos.splice(index, 1);
    localStorage.setItem("produtos", JSON.stringify(produtos));
    renderProdutos();
  }
}

// ---------------------
// Registro de venda
// ---------------------
document.getElementById("venda-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const produto = document.getElementById("produto").value;
  const valor = parseFloat(document.getElementById("valor").value);
  const forma = document.getElementById("forma").value;
  const data = new Date().toLocaleString();

  const venda = { data, produto, valor, forma };
  let vendas = JSON.parse(localStorage.getItem("vendas") || "[]");
  vendas.push(venda);
  localStorage.setItem("vendas", JSON.stringify(vendas));

  showMsg("✅ Venda registrada!", "mensagem-sucesso");
  document.getElementById("venda-form").reset();
});

// ---------------------
// Relatório
// ---------------------
function gerarRelatorio() {
  const vendas = JSON.parse(localStorage.getItem("vendas") || "[]");
  const totalPorForma = {};

  vendas.forEach((v) => {
    if (!totalPorForma[v.forma]) totalPorForma[v.forma] = 0;
    totalPorForma[v.forma] += v.valor;
  });

  let rel = "📊 RELATÓRIO DE VENDAS\n\n";
  for (const forma in totalPorForma) {
    rel += `${forma}: R$${totalPorForma[forma].toFixed(2)}\n`;
  }

  rel += `\nTotal geral: R$${vendas.reduce((sum, v) => sum + v.valor, 0).toFixed(2)}\n`;
  rel += `\n🗓️ Período até: ${new Date().toLocaleDateString()}`;

  document.getElementById("relatorio").textContent = rel;
  return rel;
}

// ---------------------
function showMsg(msg, elId) {
  const el = document.getElementById(elId);
  el.textContent = msg;
  setTimeout(() => (el.textContent = ""), 3000);
}

// Quando selecionar produto, preencher valor automaticamente
document.getElementById("produto").addEventListener("input", (e) => {
  const nomeSelecionado = e.target.value;
  const produtoEncontrado = produtos.find(p => p.nome.toLowerCase() === nomeSelecionado.toLowerCase());

  if (produtoEncontrado) {
    document.getElementById("valor").value = produtoEncontrado.preco;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-baixar-pdf").addEventListener("click", () => {
    const vendas = JSON.parse(localStorage.getItem("vendas") || "[]");

    const agrupado = {};
    vendas.forEach(v => {
      if (!agrupado[v.produto]) {
        agrupado[v.produto] = { quantidade: 0, total: 0, unitario: v.valor };
      }
      agrupado[v.produto].quantidade++;
      agrupado[v.produto].total += v.valor;
    });

    const detalhes = [["Produto", "Quantidade", "Valor Unitário (R$)", "Valor Total (R$)"]];
    for (let prod in agrupado) {
      const info = agrupado[prod];
      detalhes.push([prod, info.quantidade, info.unitario.toFixed(2), info.total.toFixed(2)]);
    }

        const totais = {
      "Cartão Débito": 0,
      "Cartão Crédito": 0,
      "PIX": 0,
      "Dinheiro": 0
    };

    vendas.forEach(v => {
      if (totais[v.forma] !== undefined) {
        totais[v.forma] += v.valor;
      }
    });

    const totalGeral = Object.values(totais).reduce((s, v) => s + v, 0);

    const resumo = [
      ["Forma de Pagamento", "Valor Total (R$)"],
      ["Cartão Débito", totais["Cartão Débito"].toFixed(2)],
      ["Cartão Crédito", totais["Cartão Crédito"].toFixed(2)],
      ["PIX", totais["PIX"].toFixed(2)],
      ["Dinheiro", totais["Dinheiro"].toFixed(2)],
      ["", ""],
      ["Total Geral", totalGeral.toFixed(2)]
    ];

    const wb = XLSX.utils.book_new();
    const ws1 = XLSX.utils.aoa_to_sheet(detalhes);
    const ws2 = XLSX.utils.aoa_to_sheet(resumo);
    XLSX.utils.book_append_sheet(wb, ws1, "Detalhamento");
    XLSX.utils.book_append_sheet(wb, ws2, "Totais");

    XLSX.writeFile(wb, "Relatorio_Cafe.xlsx");
  });
});

// Inicia lista
renderProdutos();

// Evento do botão "Atualizar Relatório"
document.getElementById("btn-gerar-relatorio").addEventListener("click", gerarRelatorio);
