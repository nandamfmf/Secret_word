// Definimos as palavras com propriedades extras para enriquecer o jogo
export const BANCO_DE_PALAVRAS = [
  { id: 1, palavra: "react", categoria: "tecnologia", dificuldade: "facil", dica: "Biblioteca para interfaces" },
  { id: 2, palavra: "javascript", categoria: "tecnologia", dificuldade: "medio", dica: "Linguagem da web" },
  { id: 3, palavra: "abacaxi", categoria: "fruta", dificuldade: "facil", dica: "Fruta tropical com coroa" },
  { id: 4, palavra: "algoritmo", categoria: "tecnologia", dificuldade: "dificil", dica: "Sequência de passos lógicos" },
  { id: 5, palavra: "melancia", categoria: "fruta", dificuldade: "medio", dica: "Fruta verde por fora e vermelha por dentro" },
  // Você pode adicionar quantas quiser aqui...
];

/**
 * Função para obter palavras filtradas por dificuldade ou categoria
 */
export const filtrarPalavras = (dificuldade = null, categoria = null) => {
  let lista = BANCO_DE_PALAVRAS;

  if (dificuldade) {
    lista = lista.filter(item => item.dificuldade === dificuldade);
  }
  if (categoria) {
    lista = lista.filter(item => item.categoria === categoria);
  }

  return lista;
};

/**
 * Função para sortear uma palavra dentro de um filtro
 */
export const sortearPalavra = (dificuldade, categoria) => {
  const listaFiltrada = filtrarPalavras(dificuldade, categoria);
  
  if (listaFiltrada.length === 0) return null;
  
  const index = Math.floor(Math.random() * listaFiltrada.length);
  return listaFiltrada[index];
};